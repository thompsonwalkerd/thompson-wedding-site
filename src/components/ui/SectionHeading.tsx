type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-heading mb-4 border-b border-wedding-cream/30 pb-2 ${className}`}>
      {children}
    </h2>
  );
}
