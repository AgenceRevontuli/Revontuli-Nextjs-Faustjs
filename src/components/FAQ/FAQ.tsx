import React from "react";
import styles from "./FAQ.module.scss";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CTA from "../CTA/CTA"

export default function FAQ({ questions }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth); 
  }, [])

  return (
    <section className={styles.section__faq}>
      <div data-scroll-section className={styles.section__reassurance}>
        <div className={styles.reassurance__header}>
          <p>
            <span>Tout doux Billy Boy !</span>
          </p>
          <h2>Pourquoi le Studio digital Revontuli ?</h2>
          <p>
            L'univers digital s'apparante au FarWest. Il existe un nombre important d'agences et de freelances sur le marché du numérique Français. Mais alors comment choisir le bon prestataire ? Revontuli a pour vocation de répondre à cette question, en vous proposant un accompagnement d'expert sur la stratégie digitale. Nous ne réalisons pas juste votre site internet. Nous développons un support web pour convertir en fin de parcours de votre stratégie digitale. Pas de langue de bois. Nous ne vous promettons pas des choses irréalistes. On avance avec vous dans l'atteinte de vos objectifs.
          </p>
        </div>
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          ref={carousel}
          className={styles.questions__items}
        >
          {questions.map((item) => (
            <div
              data-scroll
              data-scroll-direction="horizontal"
              className={styles.question__item}
              key={uuidv4()}
            >
              <h2>{item.title}</h2>
              <h3>{item.faqItem.faqsubtitle}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<p>${item.faqItem.faqanswer}</p>`,
                }}
              ></div>
            </div>
          ))}
        </motion.div>
      </div>
      <div data-scroll-section>
        <CTA
            text="Découvrir les valeurs et l'histoire du studio digital et de création web"
            link="./"
          />
      </div>
    </section>
  );
}
