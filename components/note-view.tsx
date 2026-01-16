import { Note } from "@/lib/types"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { formatDate } from "@/lib/storage"


interface NoteViewProps {
  note: Note
}
export default function NoteView( { note }: NoteViewProps) {
  return (
    <Card className="dark">
          <CardHeader>
           <CardTitle>
            {note.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {formatDate(note.createdAt)}
        </p>
          </CardHeader>
          <CardContent>
         {note.content}
          </CardContent>
    </Card>
  )
}

