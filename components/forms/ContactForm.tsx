'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const schema = z.object({
  firstName: z.string().min(2, 'Veuillez entrer votre prénom'),
  lastName: z.string().min(2, 'Veuillez entrer votre nom'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.enum([
    'general',
    'devis-entretien',
    'demande-vehicule',
    'reprise-vente',
    'autre',
  ]),
  vehicle: z.string().optional(),
  message: z.string().min(10, 'Décrivez votre demande en quelques phrases'),
  rgpd: z
    .boolean()
    .refine((v) => v === true, { message: 'Vous devez accepter pour continuer' }),
});

type FormValues = z.infer<typeof schema>;

const subjects: { value: FormValues['subject']; label: string }[] = [
  { value: 'general', label: 'Demande générale' },
  { value: 'devis-entretien', label: 'Devis entretien' },
  { value: 'demande-vehicule', label: 'Demande sur un véhicule' },
  { value: 'reprise-vente', label: 'Reprise / vente' },
  { value: 'autre', label: 'Autre' },
];

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { subject: 'general', rgpd: false },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Contact form submission', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-start gap-5 border border-gold-400/50 bg-gold-400/10 p-8',
          className,
        )}
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-500 text-gold-700">
          <Check className="h-5 w-5" strokeWidth={2} />
        </span>
        <h3 className="font-serif text-2xl text-navy-700">
          Merci, votre message a bien été envoyé.
        </h3>
        <p className="text-sm leading-relaxed text-ink-500">
          Nous vous répondrons sous 24 heures ouvrées. Si votre demande est
          urgente, n&rsquo;hésitez pas à nous appeler directement au 026 411
          15 65.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 inline-flex font-sans text-eyebrow uppercase tracking-eyebrow text-gold-700 transition-colors hover:text-gold-600"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('flex flex-col gap-6', className)}
      noValidate
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Prénom" error={errors.firstName?.message} required>
          <input
            type="text"
            autoComplete="given-name"
            {...register('firstName')}
            className="form-input"
          />
        </Field>
        <Field label="Nom" error={errors.lastName?.message} required>
          <input
            type="text"
            autoComplete="family-name"
            {...register('lastName')}
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            autoComplete="email"
            {...register('email')}
            className="form-input"
          />
        </Field>
        <Field label="Téléphone (optionnel)">
          <input
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Sujet" required>
        <select {...register('subject')} className="form-input">
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Véhicule concerné (optionnel)">
        <input
          type="text"
          placeholder="ex. BMW Série 5, Mercedes Classe E…"
          {...register('vehicle')}
          className="form-input"
        />
      </Field>

      <Field label="Votre message" error={errors.message?.message} required>
        <textarea
          rows={6}
          {...register('message')}
          className="form-input resize-y"
          placeholder="Décrivez votre besoin en quelques phrases…"
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-500">
        <input
          type="checkbox"
          {...register('rgpd')}
          className="mt-1 h-4 w-4 accent-gold-500"
        />
        <span>
          J&rsquo;accepte que mes données soient utilisées pour me recontacter,
          conformément à la{' '}
          <a
            href="/politique-confidentialite"
            className="border-b border-gold-500/40 text-navy-700 transition-colors hover:border-gold-500"
          >
            politique de confidentialité
          </a>
          .
        </span>
      </label>
      {errors.rgpd?.message && (
        <span className="-mt-2 text-xs text-red-700">{errors.rgpd.message}</span>
      )}

      <div className="mt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'inline-flex items-center gap-3 rounded-none bg-gold-400 px-7 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-navy-700 transition-all duration-200 hover:-translate-y-px hover:bg-gold-300 hover:shadow-gold disabled:cursor-not-allowed disabled:opacity-60',
          )}
        >
          {isSubmitting ? 'Envoi…' : 'Envoyer le message'}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </button>
      </div>

      <p className="text-xs leading-relaxed text-ink-500">
        Note technique : ce formulaire ne déclenche pas d&rsquo;envoi réel pour
        l&rsquo;instant. Le branchement (Resend / Formspree) sera effectué en
        phase 2.
      </p>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background-color: #ffffff;
          border: 1px solid rgba(14, 26, 43, 0.15);
          padding: 0.875rem 1rem;
          color: #0e1a2b;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          border-radius: 0;
        }
        .form-input:focus {
          outline: none;
          border-color: #c9a875;
          box-shadow: 0 0 0 3px rgba(201, 168, 117, 0.12);
        }
        .form-input::placeholder {
          color: #8a8a8a;
        }
        .form-input:hover:not(:focus) {
          border-color: rgba(14, 26, 43, 0.3);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-ink-500">
        {label}
        {required && <span className="ml-1 text-gold-600">*</span>}
      </span>
      {children}
      {error && <span className="text-xs text-red-700">{error}</span>}
    </label>
  );
}
