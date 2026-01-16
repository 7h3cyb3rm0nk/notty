import Image from "next/image";

import { Button } from "@/components/ui/button" 

import NotesSideBar  from "@/components/notes-sidebar"
import Header from "@/components/header"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header/>
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className=" md:col-span-1"><NotesSideBar/></div>
        <div className="bg-red-500 md:col-span-2">right</div>
      </main>
    </div>
      )
}
