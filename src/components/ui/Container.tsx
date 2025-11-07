type ContainerProps = {
  children: React.ReactNode;
  size?: 'default' | 'wide';
  className?: string;
};

export default function Container({ children, size = 'default', className = '' }: ContainerProps) {
  const sizeStyles = {
    default: 'max-w-4xl',
    wide: 'max-w-6xl',
  };

  return (
    <div
      className={`px-4 sm:px-6 py-8 md:py-12 ${sizeStyles[size]} mx-auto animate-fade-in ${className}`}
    >
      {children}
    </div>
  );
}
