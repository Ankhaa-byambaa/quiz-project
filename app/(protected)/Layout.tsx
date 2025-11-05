import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Header } from "../_components/main/Header";
import { SideBar } from "../_components/main/SideBar";

export async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <div className="flex">
          <Header />
          <main className="px-14">
            <SidebarTrigger />
            <div>
              <SideBar />
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
