type PageTitleProps = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className='text-4xl sm:text-5xl md:text-6xl font-heading text-wedding-cream mb-8 md:mb-12 border-b border-wedding-cream/30 pb-3 md:pb-4 leading-tight'>
      {children}
    </h1>
  );
}
