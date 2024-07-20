import { INNER_LINKS, OUTER_LINKS, SOCIALS } from "@/config";
import { acmesa } from "@/fonts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={classNames(styles.container, acmesa.className)}>
      <span>LOGO</span>
      <div className={styles.socials_container}>
        {SOCIALS.map(({ imageSrc, href }, key) => {
          return (
            <Link
              key={key}
              className={styles.social_icon}
              href={href}
              target="_blank"
            >
              <Image src={imageSrc} alt="" />
            </Link>
          );
        })}
      </div>
      <div className={styles.inner_links_container}>
        {INNER_LINKS.map(({ text, href }, key) => {
          return (
            <Link key={key} className={styles.link} href={href}>
              {text}
            </Link>
          );
        })}
      </div>
      <div className={styles.outer_links_container}>
        {OUTER_LINKS.map(({ text, href }, key) => {
          return (
            <Link key={key} className={styles.link} href={href} target="_blank">
              {text}
            </Link>
          );
        })}
      </div>
      <button className={styles.buy_button}>BUY</button>
    </footer>
  );
}
