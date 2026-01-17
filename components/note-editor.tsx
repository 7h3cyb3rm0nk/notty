"use client"
import { Note } from "@/lib/types";
import { Input } from "@/components/ui/input"
import {  useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface NoteEditorProps {
  note: Note;
}

export default function NoteEditor({ note }: NoteEditorProps ) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content)
  
  return (
    <Card className="dark">
      <CardHeader>
        <Input value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        className="text-xl font-bold border-none px-4 focus-visible:ring-0"
        />
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  )
}

