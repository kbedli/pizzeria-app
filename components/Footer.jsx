import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Zapraszamy na najlepszą, włoską pizzę.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ZNAJDŹ NASZE RESTUARACJE</h1>
          <p className={styles.text}>
            ul. Kościuszki 10
            <br /> Lublin
            <br /> 602 867 101
          </p>
          <p className={styles.text}>
            ul. Stefana Batorego 20
            <br /> Warszawa
            <br /> 602 867 101
          </p>
          <p className={styles.text}>
            ul. Czeladników 18
            <br /> Gdańsk
            <br /> 602 867 101
          </p>
          <p className={styles.text}>
            ul. Narutowicza 26
            <br /> Sopot
            <br /> 602 867 101
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>GODZINY OTWARCIA</h1>
          <p className={styles.text}>
            OD PON DO PT
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            OD SB DO NDZ
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
