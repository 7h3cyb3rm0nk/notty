// components/canvas-wrapper.tsx
"use client"

import dynamic from 'next/dynamic'

// This is now safe because this file is a Client Component
const TldrawCanvas = dynamic(
  () => import('tldraw').then((mod) => mod.Tldraw),
  { 
    ssr: false,
    loading: () => <div className="h-screen w-full bg-muted animate-pulse" /> 
  }
)

import 'tldraw/tldraw.css'

export default function CanvasWrapper() {
  return (
    <div className="fixed inset-0">
      <TldrawCanvas />
    </div>
  )
}
