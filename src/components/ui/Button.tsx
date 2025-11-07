import Link from 'next/link';

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'link' | 'back';
  className?: string;
};

type ButtonAsButton = ButtonBaseProps & {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

type ButtonAsLink = ButtonBaseProps & {
  as: 'link';
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props;

  const variantStyles = {
    primary:
      'bg-wedding-cream text-wedding-olive px-20 py-2 rounded-full text-2xl font-sans uppercase insert-shadow-sm shadow-xl hover:bg-wedding-cream/90 transition-colors',
    link: 'inline-flex items-center gap-2 text-wedding-cream/70 hover:text-wedding-cream transition-colors font-sans text-lg group',
    back: 'inline-flex items-center gap-2 text-wedding-cream/70 hover:text-wedding-cream transition-colors font-sans',
  };

  const combinedClassName = `${variantStyles[variant]} ${className}`;

  if (props.as === 'link') {
    return (
      <Link href={props.href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
