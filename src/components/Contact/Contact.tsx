import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.section__contact}>
      <div data-scroll-section className={styles.contact__items}>
        <div className={styles.item__column}>
          <h2 data-scroll data-scroll-speed="2">Comment pouvons-nous vous permettre de briller sur internet ?</h2>
          <h3 data-scroll data-scroll-speed="2">On aura à coeur de réaliser pour vous un site original et de qualité ainsi qu'une stratégie d'acquisition qui vous permettra de trouver et conquérir vos prospects sur le web. 💪</h3>
          <p data-scroll data-scroll-speed="1">
            <span>Contactez-nous</span>
          </p>
        </div>
      </div>
    </section>
  );
}
