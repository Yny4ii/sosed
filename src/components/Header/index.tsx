"use client";

import burger_svg from "@/assets/icons/burger.svg";
import close_svg from "@/assets/icons/close.svg";
import telegram_svg from "@/assets/icons/telegram.svg";
import twitter_svg from "@/assets/icons/twitter.svg";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { acmesa } from "@/fonts";

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <header className={classNames(styles.header_container, acmesa.className)}>
      <div className={styles.header_content}>
        <div className={styles.outer_container2}>
          <button
            className={styles.mobile_menu_button}
            onClick={() => setExpanded((expanded) => !expanded)}
          >
            <Image src={expanded ? close_svg : burger_svg} alt="" />
          </button>
          <div className={styles.outer_container}>
            <div className={styles.inner_container}>LOGO</div>
            <div className={styles.inner_container}>
              <div className={styles.links_container}>
                {INNER_LINKS.map(({ text, href }, key) => {
                  return (
                    <Link key={key} className={styles.link} href={href}>
                      {text}
                    </Link>
                  );
                })}
              </div>
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
              <div className={styles.button_container}>
                <Link className={styles.button} href="#" target="_blank">
                  BUY
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(styles.mobile_expandable_menu, {
            [`${styles.expanded}`]: expanded,
          })}
        >
          <div className={styles.outer_links_container}>
            {OUTER_LINKS.map(({ text, href }, key) => {
              return (
                <Link
                  key={key}
                  className={styles.link}
                  href={href}
                  target="_blank"
                >
                  {text}
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
        </div>
      </div>
      <div className={styles.header_links_container}>
        {OUTER_LINKS.map(({ text, href }, key) => {
          return (
            <Link key={key} className={styles.link} href={href} target="_blank">
              {text}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

const SOCIALS = [
  { imageSrc: telegram_svg, href: "#" },
  { imageSrc: twitter_svg, href: "#" },
];

const OUTER_LINKS = [
  { text: "DEXTOOLS", href: "#" },
  { text: "DEXSCREENER", href: "#" },
  { text: "CONTRACT ADDRESS", href: "#" },
];

const INNER_LINKS = [
  { text: "ABOUT US", href: "#" },
  { text: "ROADMAP", href: "#" },
  { text: "HOW TO BUY", href: "#" },
];
