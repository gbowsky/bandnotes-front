import {Button, ButtonGroup, Div, Group, Header, Paragraph, Spacing} from "@vkontakte/vkui";
import {Icon12ArrowUpRight, Icon12Download} from "@vkontakte/icons";
import React from "react";
import {Invertocat} from "../components/Invertocat";
import {repackAndDownload} from "../utils/repack";
import {getNotes} from "../utils/localNotes";
import {GITHUB_URL, INSTALLATION_URL} from "../utils/constants";

export const BundleApp = () => {
  return (
    <Group header={<Header>Сборка приложения</Header>}>
      <Div>
        <Paragraph id="hm-sb7-restrictions">
          Чтобы загрузить в приложение свои заметки нужно его перепаковывать.
          К сожалению это программное ограничение ZeppOS со стороны Xiaomi, на Smart Band 7 установка сторонних приложений не была предусмотрена.
        </Paragraph>
        <Spacing size={20} />
        <ButtonGroup stretched style={{ justifyContent: 'center' }}>
          <Button
            href={INSTALLATION_URL}
            target="_blank"
            after={<Icon12ArrowUpRight/>}
            size="m"
            appearance="accent"
          >
            Как установить?
          </Button>
          <Button
            target="_blank"
            size="m"
            before={<Icon12Download/>}
            onClick={() => repackAndDownload(getNotes())}
            appearance="positive"
          >
            Скачать
          </Button>
          <Button
            href={GITHUB_URL}
            target="_blank"
            after={<Icon12ArrowUpRight/>}
            before={<Invertocat size={12}/>}
            size="m"
            appearance="neutral"
          >
            Исходный код
          </Button>
        </ButtonGroup>
      </Div>
    </Group>
  )
}
