import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import "../globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { APP_TITLE } from "@/const";
import { Lexend } from "next/font/google";
import { ConfigProvider} from "antd";
const lexend = Lexend({
  weight:["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;}>
}>) {
   // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={lexend.className}>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {                
                fontFamily: "Lexend, -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto",
              },
            }}>
              <NextIntlClientProvider>
            {children}
            </NextIntlClientProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
