import neighbour_png from "@/assets/neighbour.png";
import { acmesa } from "@/fonts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function HowToBuy() {
  return (
    <div className={classNames(styles.container, acmesa.className)}>
      <Image src={neighbour_png} alt="" className={styles.neighbour} />
      <div className={styles.box}>
        <span className={styles.title}>HOW TO BUY</span>
        <div className={styles.box_content}>
          <span>Есть вопросы??</span>
          <span>Читай все детали по ссылке</span>
          <Link className={styles.link} href="#" target="_blank">
            Ссылка
          </Link>
        </div>
      </div>
    </div>
  );
}
