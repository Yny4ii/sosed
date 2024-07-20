import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowToBuy from "@/components/HowToBuy";
import Intro from "@/components/Intro";
import Roadmap from "@/components/Roadmap";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background} />
      <Header />
      <Intro />
      <AboutUs />
      <Roadmap />
      <HowToBuy />
      <Footer />
    </main>
  );
}
