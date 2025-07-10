import { Footer, Content } from "antd/es/layout/layout";
import OrcaHeader from "@/components/header/header";
import { Layout } from "antd";
import { MENU_ITEMS } from "@/const";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className="w-full !bg-white">
      <div className="max-w-7xl w-full mx-auto"><OrcaHeader menu={MENU_ITEMS} /></div>      
      <Content className="!bg-white">
        {children}
      </Content>
      <div className="max-w-7xl w-full mx-auto">
      <Footer className="!bg-white"></Footer>
      </div>
    </Layout>
  );
}