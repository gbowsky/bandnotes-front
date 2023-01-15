import {useCallback, useEffect, useState} from "react";
import {Gallery, Group, Title, Spacing, Paragraph} from "@vkontakte/vkui";
import home from '../resources/screens/bandnotes/0.png';
import note from '../resources/screens/bandnotes/1.png';
import setts from '../resources/screens/bandnotes/2.png';

export const Hero = () => {
  const [slide, setSlide] = useState(0);

  const pushNextSlide = useCallback(() => {
    if (slide >= 2) {
      setSlide(0);
      return;
    }

    setSlide(slide + 1);
  }, [slide, setSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      pushNextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [slide, pushNextSlide]);

  return (
    <Group>
      <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ padding: '0 24px 0 0' }}>
          <Gallery
            slideIndex={slide}
            draggable={false}
            slideWidth={100}
            style={{width: '100px'}}
          >
            <img src={home} alt="Notes application's home screen" />
            <img src={note} alt="Notes application's note preview" />
            <img src={setts} alt="Notes application's settings screen" />
          </Gallery>
        </div>
        <div>
          <Title level="1">
            BandNotes
          </Title>
          <Title level="3">
            Приложение заметок для Xiaomi Smart Band 7
          </Title>
          <Spacing />
          <Paragraph>
            <div>
              — Настраиваемый контраст и размер текста
            </div>
            <div>
              — Запись своих заметок с упаковкой через сайт
            </div>
          </Paragraph>

        </div>
      </section>
    </Group>
  )
}
