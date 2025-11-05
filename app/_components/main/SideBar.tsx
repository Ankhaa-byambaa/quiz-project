"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";
export function SideBar() {
  const [history, setHistory] = useState<String>("");
  const [date, setDate] = useState<String>("");

  return (
    <>
      <Sidebar className=" flex flex-col pt-14 mx-0">
        <SidebarHeader>
          <p className="text-5 text-foreground font-semibold pt-4 pr-4">
            History
          </p>
        </SidebarHeader>
        <SidebarContent>
          {history ? (
            <p>{`${history}`}</p>
          ) : (
            <div className="flex flex-col items-center justify-center py-4 px-4">
              <p className=" text-[#71717A] text-[14px]">No articles yet </p>
              <p className=" text-[#71717A] text-[14px] text-nowrap">
                Create your first article to get started
              </p>
            </div>
          )}
        </SidebarContent>
      </Sidebar>
    </>
  );
}
