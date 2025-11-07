type PageTitleProps = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className='text-5xl font-heading text-wedding-cream mb-12 border-b border-wedding-cream/30 pb-4'>
      {children}
    </h1>
  );
}
