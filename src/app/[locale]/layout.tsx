import { Locale } from '@/lib/translations';

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // params.locale will be 'en of 'cz' from URL
    const locale = params.locale as Locale;
    
    return <>{children}</>;
}


