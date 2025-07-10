import { Layout } from "antd";
import { Footer, Content } from "antd/es/layout/layout";
import OrcaHeader from "@/components/header/header";
import OrcaLanding from "@/components/landing/landing";
import { MENU_ITEMS } from "@/const";

export default function Home() {    
  return (        
   <Layout className="max-w-7xl mx-auto">    
      <OrcaHeader menu={MENU_ITEMS}/>
      <Content className="!bg-white">
        <OrcaLanding />
      </Content>
      <Footer  className="!bg-white"></Footer>
    </Layout>    
  );
}
