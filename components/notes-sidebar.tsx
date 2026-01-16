


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import EmptyState from "@/components/empty-state"
export default function NotesSideBar() {
  const notes = [];
  return (
  <Card className="dark">
  <CardHeader>
    <CardTitle>Notes</CardTitle>
    </CardHeader>
  <CardContent>
    { notes.length ===0 ? (
    <EmptyState message="No notes yet" buttonText="create your first Note"/>
    ): (
      <h1>Your notes</h1>
    )}
  </CardContent>
 </Card>
  )
}
