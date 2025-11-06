export default function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // This layout is required by Next.js for dynamic [locale] routing
    // Locale-specific logic is handled in PageLayout component
    return <>{children}</>;
}
