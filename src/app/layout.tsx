import type { Metadata } from "next";
import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.className}>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {                
                fontFamily: "Lexend, -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto",
              },
            }}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
