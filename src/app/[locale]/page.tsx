import { Layout } from "antd";
import { Footer, Content } from "antd/es/layout/layout";
import OrcaHeader from "@/components/header/header";
import OrcaLanding from "@/components/landing/landing";

export default function Home() {    
  return (        
   <Layout className="max-w-7xl mx-auto">    
      <OrcaHeader />
      <Content className="!bg-white">
        <OrcaLanding />
      </Content>
      <Footer  className="!bg-white"></Footer>
    </Layout>    
  );
}
