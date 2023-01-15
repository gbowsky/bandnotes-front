import {
  Button,
  ButtonGroup,
  Card,
  Div,
  FormItem,
  FormLayout,
  Input,
  SimpleCell,
  Spacing,
  Textarea
} from "@vkontakte/vkui";
import {Note} from "../utils/localNotes";
import {FormEvent, useState} from "react";
import {Icon16DeleteOutline, Icon16Done} from "@vkontakte/icons";

interface NoteItemProps {
  note: Note;
  index: number;
  onEdit: (note: Note, index: number) => void;
  onRemove: (index: number) => void;
}

export const NoteItem = ({ note, index, onEdit, onRemove }: NoteItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<string>("");

  const onSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, content } = e.target as typeof e.target & {
      name: { value: string };
      content: { value: string };
    };

    if (name.value && content.value) {
      onEdit({
        name: name.value,
        content: content.value,
      }, index);
      setExpanded(false);
      setStatus("Успешно сохранено");
      setTimeout(() => {
        setStatus("");
      }, 5000)
    }
  }

  return (
    <Div className="Note">
      <Card mode="shadow">
        {!expanded && (
          <SimpleCell
            children={note.name}
            subtitle={note.content}
            extraSubtitle={status}
            onClick={() => {
              setExpanded(true);
              setStatus("");
            }}
          />
        )}
        {expanded && (
          <FormLayout onSubmit={onSave}>
            <FormItem top="Название">
              <Input name="name" defaultValue={note.name} placeholder="Введите название"/>
            </FormItem>
            <FormItem top="Текст">
              <Textarea name="content" defaultValue={note.content} placeholder="Введите текст"/>
            </FormItem>
            <Spacing/>
            <FormItem>
              <ButtonGroup>
                <Button
                  type="submit"
                  appearance="positive"
                  before={<Icon16Done />}
                >
                  Сохранить
                </Button>
                <Button
                  appearance="negative"
                  before={<Icon16DeleteOutline />}
                  onClick={() => onRemove(index)}
                >
                  Удалить
                </Button>
              </ButtonGroup>
            </FormItem>
          </FormLayout>
        )}
      </Card>
    </Div>
  )
}
