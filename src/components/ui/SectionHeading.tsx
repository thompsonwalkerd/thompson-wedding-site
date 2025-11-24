type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl md:text-5xl font-heading text-heading mb-2 md:mb-4 md:mt-10 border-b border-heading/30 pb-4 leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}
