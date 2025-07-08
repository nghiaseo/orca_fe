import {Header } from "antd/es/layout/layout";
import OrcaNav from "../nav/nav";
import Link from 'next/link'
import { MENU_ITEMS} from "@/const";

export default function OrcaHeader() {
  return (
    <Header className="!bg-white !h-24">
      <div className="flex items-center justify-between h-full">
        <div>
            <Link href="/">
            <img src={"/images/logo_with_text.png"} alt="Orca Logo" className="h-full w-20" draggable="false" />
            </Link>
        </div>
        <div>
            <OrcaNav items={MENU_ITEMS} />
        </div>
      </div>
    </Header>
  );
}