// import { getNextStaticProps } from '@faustjs/next';
// import { GetStaticPropsContext } from 'next';
import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styles from "scss/pages/home.module.scss";
import CTA from "../components/CTA/CTA";
import RealisationList from "../components/Realisations/RealisationsList";
// import { client, PageIdType } from 'client';
import Banner from "../components/Banner/Banner";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";

export default function Page({ currentData }) {
  const pageData = currentData.page.homeInfo;
  const faqs = currentData.faqs;
  // const { usePosts, useQuery, usePage } = client;
  //## Code pour ajouter les articles à la page d'accueil ci-dessous.
  // const posts = usePosts({
  //   first: 6,
  //   where: {
  //     categoryName: 'uncategorized',
  //   },
  // });

  //Fonction pour séparer les mots du titre
  const splitTitle = pageData.primarytitle.split(" ");
  const renderTitle = splitTitle.map((item) => <span key={item}>{item}</span>);

  return (
    <>
      <Head>
        <title></title>
      </Head>

      <main className="content">
        <div>
          <section data-scroll-section className={styles.block__header}>
            <div className={styles.header_title} data-scroll-section>
              <h1 data-scroll data-scroll-speed="2" data-scroll-position="top">
                {renderTitle}
              </h1>
              <p>{pageData.headertext}</p>
            </div>
          </section>
        </div>

        <section className={styles.content__presta}>
          <p data-scroll-section>
            <span data-scroll data-scroll-speed="2">
              Proposez une vraie expérience à vos clients. Notre mission est
              d’établir et mettre en oeuvre des stratégies de marketing et de
              communication digitales pour développer vos conversions sur le
              web.
            </span>
          </p>
          <div data-scroll-section className={styles.block__prestations}>
            <div className={styles.prestation_item}>
              <div className={styles.presta_icon}>
                <img
                  src="http://headless.local/wp-content/uploads/2022/08/barre-de-recherche-1.svg"
                  alt=""
                  width="30px"
                />
              </div>
              <div className="styles presta_content">
                <h2>Référencement Naturel - SEO</h2>
                <p>
                  Nous réalisons un audit de votre site et on vous livre un plan
                  d’actions complet sur 6 mois pour développer votre position
                  dans les moteurs de recherche.
                </p>
              </div>
            </div>
            <div className={styles.prestation_item}>
              <div className={styles.presta_icon}>
                <img
                  src="http://headless.local/wp-content/uploads/2022/08/google-ads-icons.png"
                  alt=""
                  width="30px"
                />
              </div>
              <div className="styles presta_content">
                <h2>Google Ads - SEA</h2>
                <p>
                  On vous accompage dans le paramétrage de votre compte Google
                  Ads, la mise en place du tracking des conversions sur votre
                  site et nous développons les campages Ads.
                </p>
              </div>
            </div>
            <div className={styles.prestation_item}>
              <div className={styles.presta_icon}>
                <img
                  src="http://headless.local/wp-content/uploads/2022/08/developpement-site-internet-wordpress.png"
                  alt=""
                  width="30px"
                />
              </div>
              <div className="styles presta_content">
                <h2>Création de site internet wordpress</h2>
                <p>
                  Nous designons une maquette avec vous avant de créer un site
                  wordpress sur mesure et optimisé pour le SEO. Nous attachons
                  une grande importance aux performances et à la sécurité.
                </p>
              </div>
            </div>
            <CTA
              text="En apprendre davantage sur les compétences et les expériences du studio"
              link="./"
            />
          </div>
        </section>
        <RealisationList projets={currentData.realisations} />
        <Banner />
        <FAQ questions={faqs.nodes} />
        <Contact />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://headless.local/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query getPageData {
        page(id: "home-page", idType: URI) {
          id
          homeInfo {
            primarytitle
            headertext
          }
        }
        realisations {
          edges {
            node {
              id
              slug
              title
              dataRealisation {
                descriptionlong
                fieldGroupName
                shortdescription
                urlwebsite
                prestationsrealisees {
                  name
                } 
              }
              featuredImage {
                node {
                  mediaItemUrl
                  uri
                  altText
                }
              }
            }
          }
        }
        faqs {
          nodes {
            faqItem {
              faqanswer
              faqsubtitle
              fieldGroupName
            }
            title
          }
        }
      }
    `,
  });

  return {
    props: {
      currentData: data,
    },
  };
}
