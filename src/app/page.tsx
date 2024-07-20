import Header from "@/components/Header";
import Intro from "@/components/Intro";
import styles from "./page.module.scss";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Intro />
      <AboutUs />
    </main>
  );
}
