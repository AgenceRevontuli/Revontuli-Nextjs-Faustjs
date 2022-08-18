import React from "react";
import styles from "./RealisationsList.module.scss";
import { v4 as uuidv4 } from "uuid";
import Link from 'next/link';
export default function RealisationsList({ projets }) {
  const dataProjets = projets.edges;
  return (
    <section>
      <div data-scroll-section className={styles.section__header}>
        <h2 data-scroll data-scroll-speed="3">
          Les derniers projets de marketing et de développement web sur lesquels
          nous avons travaillé.
        </h2>
        <p data-scroll data-scroll-speed="1">
          Bientôt, c’est votre projet que l’on affichera fièrement sur notre
          site internet ✌️
        </p>
      </div>
      <div data-scroll-section className={styles.block__realisation}>
        {dataProjets.map((item) => {
          return (
          <Link href={`realisations/${item.node.slug}`} key={uuidv4()}>
            <div data-scroll className={styles.realisation_item} >
              <img
                src={item.node.featuredImage.node.mediaItemUrl}
                alt={item.node.featuredImage.node.altText}
              />
              <h3>{item.node.title}</h3>
            </div>
          </Link>
)})}
      </div>
    </section>
  );
}
