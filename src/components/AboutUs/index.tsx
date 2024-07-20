import player_png from "@/assets/player.png";
import { acmesa } from "@/fonts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function AboutUs() {
  return (
    <div className={classNames(styles.container, acmesa.className)}>
      <div className={styles.box}>
        <span className={styles.title}>Я, Мистер Ротвейлер</span>
        <div className={styles.box_content}>
          <span>
            и я хочу чтобы ты помог мне обустроить мою берлогу и победить моего
            злейшего соседа-Вуди. Вместе мы пройдем путь от грязи под ногтями до
            уровня пивных магнатов и сожжем квартиру соседа. Чтобы добиться
            наших грандиозных целей, кликай и получай е-баллы, расти свои $HUY и
            прокачивай меня до неузнаваемости. Если мы будем работать вместе, мы
            сможем обогнать всех наших соседей-конкурентов и стать самым большим
            $HUY в крипте.
          </span>
        </div>
        <Link className={styles.button} href="#" target="_blank">
          Play
        </Link>
      </div>
      <Image src={player_png} alt="" className={styles.player} />
    </div>
  );
}
