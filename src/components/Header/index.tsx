"use client";

import burger_svg from "@/assets/icons/burger.svg";
import close_svg from "@/assets/icons/close.svg";
import { INNER_LINKS, OUTER_LINKS, SOCIALS } from "@/config";
import { acmesa } from "@/fonts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <header className={classNames(styles.header_container, acmesa.className)}>
      <div className={styles.header_content}>
        <div className={styles.outer_container2}>
          <div className={styles.mobile_menu_container}>
            <button onClick={() => setExpanded((expanded) => !expanded)}>
              <Image src={expanded ? close_svg : burger_svg} alt="" />
            </button>
            <h1>$HUI</h1>
          </div>
          <div className={styles.outer_container}>
            <div className={styles.inner_container}></div>
            <div className={styles.inner_container}>
              <div className={styles.links_container}>
                <h1>$HUI</h1>
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
