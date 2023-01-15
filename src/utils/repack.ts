import {Notes} from "./localNotes";
import JSZip from "jszip";
import {BINARY_URL} from "./constants";

export async function repackAndDownload(notes: Notes) {
  const notesAsset = JSON.stringify(notes);
  const zip = new JSZip();

  const binary = await fetch(await BINARY_URL);
  const buffer = await binary.arrayBuffer();
  await zip.loadAsync(buffer);

  zip.file("assets/notes.json", notesAsset);

  const blob = await zip.generateAsync({type:"blob"});

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a"); // Or maybe get it from the current document
  link.href = url;
  link.download = "notes.bin";
  link.click();
}
