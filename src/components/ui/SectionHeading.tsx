type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-heading mb-3 md:mb-4 border-b border-wedding-cream/30 pb-2 leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}
