import React from 'react';
import styles from '../scss/pages/prestations.module.scss';
import Contact from '../components/Contact/Contact';

export default function seo() {
  return (
    <main>
      <section className={styles.presta__header} data-scroll-section>
        <h1>Stratégie de Référencement SEO</h1>
        <p>Nous gérons votre projet web de A à Z. Nous vous accompagnons sur les conseils techniques, la création de maquette, l'intégration de votre site, sa maintenance et l'optimisation des performances. Le tout sans négliger la créativité et l'importance de l'expérience utilisateur.</p>
      </section>
      <Contact />
    </main>
  )
}
