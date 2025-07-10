import {Header } from "antd/es/layout/layout";
import OrcaNav from "../nav/nav";
import Link from 'next/link'
import LanguageSelector from "../languageSelector/languageSelector";
import { MenuItem } from "@/interfaces";
type HeaderProps = {
  menu?:MenuItem[];
}
export default function OrcaHeader({menu = []}:HeaderProps) {
  return (
    <Header className="!bg-white !h-24">
      <div className="flex items-center justify-between h-full">
        <div>
            <Link href="/">
            <img src={"/images/logo_with_text.png"} alt="Orca Logo" className="h-full w-20" draggable="false" />
            </Link>
        </div>
        <div className="flex items-center gap-16">
            <OrcaNav items={menu} />
            <div>
              <LanguageSelector />
            </div>
        </div>
        
      </div>
    </Header>
  );
}