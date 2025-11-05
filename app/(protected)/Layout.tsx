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
          <SideBar />
          <main>
            <div className=" flex gap-20 ">
              <div className="h-screen w-15 bg-white border border-[#E4E4E7] flex justify-center  ">
                <SidebarTrigger className="pt-20" />
              </div>

              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
