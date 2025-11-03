import { cookies } from "next/headers";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Header } from "./Header";

export async function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
