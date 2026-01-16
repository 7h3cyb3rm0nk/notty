


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {  formatDate } from "@/lib/storage"

import { Note } from "@/lib/types"
import { Button } from "@/components/ui/button"

import EmptyState from "@/components/empty-state"

import { Trash2 } from "lucide-react"

interface NotesSidebarProps {
  notes: Note[];
  onSelectNote: (note: Note) => void;
}
export default function NotesSideBar({ notes, onSelectNote }: NotesSidebarProps) {
  return (
  <Card className="dark">
  <CardHeader>
    <CardTitle>Notes</CardTitle>
    </CardHeader>
  <CardContent>
    { notes.length ===0 ? (
    <EmptyState message="No notes yet" buttonText="create your first Note"/>
    ): (
    <div>
            {notes.map( note=> (
            <div key={note.id} className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors" onClick={() => onSelectNote(note)}>
                <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        {note.title.substring(0,30)}
                        {note.title.length > 30 ? "..." : ""}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {note.content.substring(0,40)}
                        {note.content.length > 40 ? "...": ""}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(note.createdAt)}
                      </p>

                    </div>
                    <Button 
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4"/>
                    </Button>
                  </div>
                </div>
            ))}
    </div>
    )}
  </CardContent>
 </Card>
  )
}
