'use client';

import { Button } from "@/components/ui/button" 

import NotesSideBar  from "@/components/notes-sidebar"
import Header from "@/components/header"
import { useState } from "react"
import { Note } from "@/lib/types"
import { formatDate } from "@/lib/storage"
import  NoteView from "@/components/note-view"
import NoteEditor from "@/components/note-editor"

export default function Page() {
  const [notes, setNotes ] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  console.log(activeNote);
  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'New Note',
      content: '',
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes])
    setActiveNote(newNote)
    setIsEditing(true);
  }

  const selectNote = (note: Note) => {
    setActiveNote(note)
    setEditing(false)
  }
  const renderNoteContent = () => {
    if (activeNote && isEditing) {
      return <NoteEditor note={activeNote}/>
    }
    if (activeNote){
      return (
     <NoteView note={activeNote}/> 
      )

    }
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Header onNewNote={createNewNote}/>
      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className=" md:col-span-1"><NotesSideBar notes={notes} onSelectNote={selectNote}/></div>
        <div className=" md:col-span-2">{renderNoteContent()}</div>
      </main>
    </div>
      )
}
