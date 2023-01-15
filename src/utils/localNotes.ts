import {PLACEHOLDER_NOTES} from "./constants";

export interface Note {
  name: string;
  content: string;
}

export type Notes = Note[];

export function getNotes(): Notes {
  let result = null;

  try {
    const data = localStorage.getItem('sb-notes');

    if (data) {
      result = JSON.parse(data);
    } else {
      localStorage.setItem('sb-notes', JSON.stringify(PLACEHOLDER_NOTES));
      result = PLACEHOLDER_NOTES;
    }
  } catch (e) {
    console.error(e);
  }

  return result;
}

export function saveNotes(notes: Notes) {
  try {
    localStorage.setItem('sb-notes', JSON.stringify(notes));
  } catch (e) {
    console.log(e);
  }
}
