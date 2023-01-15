import {Panel, PanelHeader, PanelProps, Spacing} from "@vkontakte/vkui";
import React from "react";
import {Hero} from "../containers/Hero";
import {NotesEditing} from "../containers/NotesEditing";
import {BundleApp} from "../containers/BundleApp";

export const IndexPage = (props: PanelProps) => {
  const { id } = props;

  return (
    <Panel id={id}>
      <PanelHeader>
        BandNotes
      </PanelHeader>
      <Hero />
      <NotesEditing/>
      <BundleApp/>
      <Spacing size={window.innerHeight / 2}/>
    </Panel>
  )
}
