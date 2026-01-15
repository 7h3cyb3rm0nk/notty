import Image from "next/image";

import { Button } from "@/components/ui/button" 

// app/page.tsx
import CanvasWrapper from "@/components/canvas-wrapper"

export default function Page() {
  return (
    <main className="h-screen w-screen">
      <CanvasWrapper />
    </main>
  )
}
