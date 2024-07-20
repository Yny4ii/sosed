import Header from "@/components/Header";
import Intro from "@/components/Intro";
import styles from "./page.module.scss";
import AboutUs from "@/components/AboutUs";
import Roadmap from "@/components/Roadmap";
import HowToBuy from "@/components/HowToBuy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Intro />
      <AboutUs />
      <Roadmap />
      <HowToBuy />
      <Footer />
    </main>
  );
}
