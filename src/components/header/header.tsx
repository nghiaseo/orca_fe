import {Header } from "antd/es/layout/layout";
import OrcaNav from "../nav/nav";
import Link from 'next/link'
import { MENU_ITEMS} from "@/const";
import LanguageSelector from "../languageSelector/languageSelector";

export default function OrcaHeader() {
  return (
    <Header className="!bg-white !h-24">
      <div className="flex items-center justify-between h-full">
        <div>
            <Link href="/">
            <img src={"/images/logo_with_text.png"} alt="Orca Logo" className="h-full w-20" draggable="false" />
            </Link>
        </div>
        <div className="flex items-center gap-16">
            <OrcaNav items={MENU_ITEMS} />
            <div>
              <LanguageSelector />
            </div>
        </div>
        
      </div>
    </Header>
  );
}