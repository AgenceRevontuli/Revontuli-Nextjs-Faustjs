import React from "react";
import styles from "../scss/pages/prestations.module.scss";
import Contact from "../components/Contact/Contact";

export default function siteWeb() {
  return (
    <main>
      <section className={styles.presta__header} data-scroll-section>
        <div className={styles.header__title}>
          <h2>
            Expertise /  
            <span> Création de site internet</span>
          </h2>
          <h1>
            Nous développons de magnifiques sites web interactifs et performants
          </h1>
          <img src="http://headless.local/wp-content/uploads/2022/08/developpement-site-internet-wordpress.jpg" alt="" />
        </div>
        <div className={styles.header__text}>
          <p>
            Nous gérons votre projet web de A à Z. Nous vous accompagnons sur
            les conseils techniques, la création de maquette, l'intégration de
            votre site, sa maintenance et l'optimisation des performances. Le
            tout sans négliger la créativité et l'importance de l'expérience
            utilisateur.
          </p>
        </div>
      </section>
      <section className={styles.content__expertise}></section>
      <Contact />
    </main>
  );
}
