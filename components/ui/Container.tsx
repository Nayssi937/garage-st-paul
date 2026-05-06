import { cn } from '@/lib/utils/cn';

type ContainerSize = 'narrow' | 'default' | 'wide';

const sizeClass: Record<ContainerSize, string> = {
  narrow: 'max-w-[960px]',
  default: 'max-w-[1280px]',
  wide: 'max-w-[1440px]',
};

export function Container({
  children,
  className,
  as: Tag = 'div',
  size = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
  size?: ContainerSize;
}) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-10',
        sizeClass[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
