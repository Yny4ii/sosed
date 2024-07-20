import head1_png from "@/assets/head1.png";
import head2_png from "@/assets/head2.png";
import head3_png from "@/assets/head3.png";
import { acmesa } from "@/fonts";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

export default function Roadmap() {
  return (
    <div className={classNames(styles.container, acmesa.className)}>
      <div className={styles.title_container}>
        <span className={styles.title}>Roadmap</span>
        <span>
          Мы здесь не для того чтобы пинать $HUY,сделаем Мистера
          Ротвейлера-Рокфеллером!
        </span>
      </div>
      <div className={styles.cards_container}>
        {CARDS.map(({ color, imageSrc, title, text, transform }, key) => {
          return (
            <div key={key} className={styles.card}>
              <div
                className={styles.icon_container}
                style={{ backgroundColor: color }}
              >
                <Image className={styles.icon} src={imageSrc} alt="" />
              </div>
              <div className={styles.card_paper} style={{ transform }}>
                <span className={styles.title}>{title}</span>
                <div className={styles.card_content}>
                  {text.map((t, key) => (
                    <span key={key}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CARDS: {
  color: string;
  imageSrc: StaticImageData;
  title: string;
  text: string[];
  transform?: string;
}[] = [
  {
    color: "#96CB29",
    imageSrc: head1_png,
    title: "Q3 2024",
    text: [
      "1) Запуск игры",
      "2) Пресейл",
      "3) Запуск токена",
      "4) Эирдроп и листинг",
    ],
    transform: "rotateZ(-2.5deg)",
  },
  {
    color: "#FF9432",
    imageSrc: head2_png,
    title: "Q4 2024",
    text: [
      "1) Нфт коллекция соседей",
      "2) $HUYpad -инкубатор мемов на тоне",
      "3) Начало разработки web2 игры",
    ],
    transform: "rotateZ(2.5deg)",
  },
  {
    color: "#C73FF7",
    imageSrc: head3_png,
    title: "Q1 2025",
    text: [
      "1) Запуск игры в app store",
      "2) Создание revenue share для холдеров",
      "3) Создание web2 игр и инкубатор для них",
    ],
  },
];
