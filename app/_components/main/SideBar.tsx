"use client";
import { Empty } from "@/components/ui/empty";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
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
          {history ? <p>{`${history}`}</p> : <Empty />}
        </SidebarContent>
      </Sidebar>
    </>
  );
}
