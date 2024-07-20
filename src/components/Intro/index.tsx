"use client";

import player_png from "@/assets/player.png";
import { acmesa } from "@/fonts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ADDRESS } from "@/config";

export default function Intro() {
  return (
    <div className={classNames(styles.container, acmesa.className)}>
      <Image src={player_png} alt="" className={styles.player} />
      <div className={styles.box}>
        <span className={styles.title}>Не дуй в хуй, а инвестируй в него</span>
        <div className={styles.box_container}>
          <span>1. отправь тон на этот адрес</span>
          <div className={styles.address_container}>
            <Link className={styles.address} href="#" target="_blank">
              {ADDRESS}
            </Link>
            <button
              className={classNames(styles.copy_button, acmesa.className)}
              onClick={async () => {
                await window.navigator.clipboard.writeText(ADDRESS);
              }}
            >
              Скопировать
            </button>
          </div>
          <span>
            2. Не отправляйте с бирж,только с децентрализованных кошельков
          </span>
          <span>3. Минимальная сумма-1 до 3000 ТОН</span>
        </div>
      </div>
    </div>
  );
}
