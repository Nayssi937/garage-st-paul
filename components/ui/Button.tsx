import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

type Variant = 'primary' | 'secondary' | 'secondary-on-light' | 'ghost';

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'secondary-on-light': 'btn-secondary-on-light',
  ghost: 'btn-ghost',
};

type BaseProps = {
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonElProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

type AnchorElProps = BaseProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonElProps | AnchorElProps;

function Arrow() {
  return (
    <span className="relative inline-flex h-4 w-5 overflow-hidden">
      <ArrowRight
        className="absolute h-4 w-5 transition-transform duration-300 ease-out-quart group-hover:translate-x-6"
        strokeWidth={1.75}
      />
      <ArrowRight
        className="absolute h-4 w-5 -translate-x-6 transition-transform duration-300 ease-out-quart group-hover:translate-x-0"
        strokeWidth={1.75}
      />
    </span>
  );
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', withArrow = false, className, children } = props;
  const classes = cn('group', variantClass[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <Arrow /> : null}
    </>
  );

  if ('href' in props) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { variant: _v, withArrow: _a, className: _c, children: _ch, ...rest } = props;
  return (
    <button {...rest} className={classes}>
      {content}
    </button>
  );
}
