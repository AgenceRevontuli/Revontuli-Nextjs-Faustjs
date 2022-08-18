import React from "react";
import styles from "./Banner.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Banner() {
  const bannerData = {
    banner: [
      {
        txt: "Création de site web pas cher",
        id: "one",
        speed: "8",
        delay: "1",
      },
      {
        txt: "Site Web avec Abonnement Mensuel",
        id: "two",
        speed: "-8",
        delay: "0",
      },
      {
        txt: "Devenez premier sur Google",
        id: "three",
        speed: "5",
        delay: "2",
      },
      {
        txt: "Agence Digitale numéro 1 sur Paris",
        id: "four",
        speed: "10",
        delay: "-5",
      },
      {
        txt: "Meilleure Agence web de Caen et du MONDE",
        id: "five",
        speed: "-3",
        delay: "3",
      },
      // {
      //   txt: "STOP",
      //   id: "six",
      //   speed: "-10",
      //   delay: "5"
      // },
    ],
  };
  return (
    <section id="scroll-direction">
      <div className={styles.banner__section} data-scroll-section>
        <div className={styles.direction__block} id="direction">
          {bannerData.banner.map((banner) => (
            <div className={styles.banner__item} key={uuidv4()}>
              <h4
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-target="#direction"
                data-scroll-speed={banner.speed}
              >
                {banner.txt}
              </h4>
            </div>
          ))}
          <div className={styles.banner__item}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="5"
            data-scroll-delay="1"
          >
            <h4>#STOP</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
