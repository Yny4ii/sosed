import { acmesa } from "@/fonts";
import classNames from "classnames";
import styles from "./page.module.scss";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={classNames(styles.main, acmesa.className)}>
      <Header />
    </main>
  );
}
