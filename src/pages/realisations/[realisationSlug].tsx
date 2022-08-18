import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styles from "./realisation.module.scss";
import { v4 as uuidv4 } from "uuid";
import Contact from "../../components/Contact/Contact";
import CTA from "../../components/CTA/CTA";

export default function realisationSlug(realisationData) {
  const currentData = realisationData.realisationData;

  return (
    <main>
      <section data-scroll-section className={styles.realisation__header}>
        <div className={styles.realisation__img}>
          <img
            src={currentData.featuredImage.node.mediaItemUrl}
            alt={currentData.featuredImage.node.altText}
          />
          <div className={styles.realisation__title}>
            <h1 data-scroll data-scroll-speed="3">
              {currentData.title}
            </h1>
          </div>
          <div
            className={styles.realisation__short}
            data-scroll
            data-scroll-speed="4"
          >
            <p>{currentData.dataRealisation.shortdescription}</p>
          </div>
          <div
            className={styles.realisation__date}
            data-scroll
            data-scroll-speed="1"
          >
            <p>
              <span>Date</span>
              {currentData.dataRealisation.date}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section__content} data-scroll-section>
        <h2>Services</h2>
        <div className={styles.tags__items}>
          {currentData.dataRealisation.prestationsrealisees.map((tag) => {
            return (
              <div key={uuidv4()} className={styles.item__tag}>
                <h3>{tag.name}</h3>
              </div>
            );
          })}
        </div>
        <div className={styles.content_long}>
          <h2>Notre mission</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>${currentData.dataRealisation.descriptionlong}</p>`,
            }}
          ></div>
        </div>

      </section>
      <section data-scroll-section>
      <CTA
        text="Revenir sur la page d'accueil pour découvrir les autres projets digitaux du studio"
        link="./"
      />
      </section>
      <Contact />
    </main>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.realisationSlug;
  const client = new ApolloClient({
    uri: "http://headless.local/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query getRealisationData {
        realisations {
          nodes {
            slug
            title
            featuredImage {
              node {
                mediaItemUrl
                altText
              }
            }
            dataRealisation {
              descriptionlong
              date
              prestationsrealisees {
                name
              }
              secteuractivite {
                name
              }
              shortdescription
              urlwebsite
            }
          }
        }
      }
    `,
  });
  const realisationData = data.realisations.nodes.find(
    (item) => item.slug === slug
  );
  //Gestion de la 404
  if (!realisationData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      realisationData,
    },
  };
}
export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
