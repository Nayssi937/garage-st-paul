'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

const schema = z.object({
  name: z.string().min(2, 'Veuillez entrer votre nom'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.enum(['mecanique', 'preparation', 'restauration', 'achat-vente', 'autre']),
  vehicle: z.string().optional(),
  message: z.string().min(10, 'Décrivez votre demande en quelques phrases'),
});

type FormValues = z.infer<typeof schema>;

const subjects: { value: FormValues['subject']; label: string }[] = [
  { value: 'mecanique', label: 'Mécanique' },
  { value: 'preparation', label: 'Préparation' },
  { value: 'restauration', label: 'Restauration' },
  { value: 'achat-vente', label: 'Achat / Vente' },
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
    defaultValues: { subject: 'mecanique' },
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
          'flex flex-col items-start gap-4 border border-racing-500/40 bg-racing-500/5 p-8',
          className,
        )}
      >
        <CheckCircle2 className="h-10 w-10 text-racing-500" strokeWidth={1.5} />
        <h3 className="font-display text-2xl uppercase tracking-wide text-ink-50">
          Message reçu
        </h3>
        <p className="text-base text-ink-200">
          Merci. Nous vous répondons sous 48h ouvrées. Pour une demande
          urgente, n'hésitez pas à nous appeler directement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-5', className)} noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Nom complet" error={errors.name?.message} required>
          <input
            type="text"
            autoComplete="name"
            {...register('name')}
            className="form-input"
          />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            autoComplete="email"
            {...register('email')}
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Téléphone (optionnel)">
        <input
          type="tel"
          autoComplete="tel"
          {...register('phone')}
          className="form-input"
        />
      </Field>

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
          placeholder="ex. Porsche 964, Ford Escort MK1…"
          {...register('vehicle')}
          className="form-input"
        />
      </Field>

      <Field label="Votre message" error={errors.message?.message} required>
        <textarea
          rows={6}
          {...register('message')}
          className="form-input resize-none"
          placeholder="Décrivez votre besoin, votre voiture, vos attentes…"
        />
      </Field>

      <div className="mt-2">
        <Button type="submit" variant="primary" disabled={isSubmitting} withArrow>
          {isSubmitting ? 'Envoi…' : 'Envoyer le message'}
        </Button>
      </div>

      <p className="text-2xs text-ink-400">
        En envoyant ce formulaire, vous acceptez d'être recontacté par LS
        Automobiles. Vos données ne sont ni stockées ni partagées sans accord.
      </p>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background-color: theme('colors.ink.900');
          border: 1px solid theme('colors.ink.700');
          padding: 0.875rem 1rem;
          color: theme('colors.ink.50');
          font-size: 0.95rem;
          transition: border-color 0.2s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: theme('colors.racing.500');
        }
        .form-input::placeholder {
          color: theme('colors.ink.400');
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
      <span className="font-mono text-2xs uppercase tracking-widest text-ink-300">
        {label}
        {required && <span className="ml-1 text-racing-500">*</span>}
      </span>
      {children}
      {error && <span className="text-2xs text-racing-500">{error}</span>}
    </label>
  );
}
