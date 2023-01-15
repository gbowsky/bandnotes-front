import {Button, Group, Header} from "@vkontakte/vkui";
import {Icon12Add} from "@vkontakte/icons";
import {useEffect, useState} from "react";
import {getNotes, Note, Notes, saveNotes} from "../utils/localNotes";
import {NoteItem} from "./NoteItem";
import {NEW_NOTE} from "../utils/constants";
import {id} from "../utils/ids";

export const NotesEditing = () => {
  const [notes, setNotes] = useState<Notes>(getNotes());

  const onAdd = () => {
    setNotes([...notes, NEW_NOTE]);
  }

  const onRemove = (index: number) => {
    const res = [...notes];
    res.splice(index, 1);
    setNotes(res);
  }

  const onEdit = (note: Note, index: number) => {
    const res = [...notes];
    res[index] = note;
    setNotes(res);
  }

  useEffect(() => {
    saveNotes(notes);
  }, [notes])

  return (
    <Group
      header={
        <Header
          indicator={notes.length}
          aside={
            <Button
              mode="tertiary"
              onClick={() => onAdd()}
              before={<Icon12Add/>}>
              Добавить
            </Button>
          }
        >
          Заметки
        </Header>
      }
    >
      {notes.map((note, index) => (
        <NoteItem key={`noteitem-${id()}`} index={index} note={note} onEdit={onEdit} onRemove={onRemove} />
      ))}
    </Group>
  )
}
