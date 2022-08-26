import React from "react";
import styles from "../scss/pages/prestations.module.scss";
import Contact from "../components/Contact/Contact";

export default function siteWeb() {
  return (
    <main>
      <section className={styles.presta__header} data-scroll-section>
        <div className={styles.header__img}>
          <img
            src="http://headless.local/wp-content/uploads/2022/08/developpement-site-internet-wordpress.jpg"
            alt=""
          />
        </div>
        <div className={styles.header__content}>
          <div className={styles.header__title}>
            <h2>
              Expertise /<span> Création de site internet</span>
            </h2>
            <h1>
              Nous développons de magnifiques sites web interactifs et
              performants
            </h1>
          </div>
          <div className={styles.header__text}>
            <p>
              Nous gérons votre projet web de A à Z. Nous vous accompagnons sur
              les conseils techniques, la création de maquette, l'intégration de
              votre site, sa maintenance et l'optimisation des performances. Le
              tout sans négliger la créativité et l'importance de l'expérience
              utilisateur.
            </p>
            <div className={styles.text__tgs}>
              <h3>E-commerce</h3>
              <h3>Site vitrine</h3>
              <h3>Webdesign</h3>
              <h3>Wordpress</h3>
              <h3>Webflow</h3>
              <h3>Maintenance</h3>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll-section className={styles.content__expertise}>
        <div className={styles.expertise__text}>
          <h2>
            Nous sommes <strong>développeurs</strong>
          </h2>
          <p>
            Il existe de plus en plus d'outils et de prestataires qui propose de
            la création de site internet "No-code". C'est une très bonne chose.
            Le web se démocratise. En revanche, prendre un prestataire technique
            pour la réalisation de votre projet c'est vous assurez de nombreux
            avantages sur la concurrence. Nous sommes développeurs avant tout.
            Nous maîtrisons les langages HTML, CSS mais également le PHP, le
            Javascrip et nous travaillons avec des outils modernes comme
            ReactJs. Ainsi, nous sommes en mesure de vous proposer la solution
            la plus adaptée et performante sur-mesure pour votre projet.
          </p>
        </div>
        <div className={styles.expertise__img}>
          <img
            src="http://headless.local/wp-content/uploads/2022/08/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg"
            alt=""
          />
        </div>
      </section>
      <section data-scroll-section>
        <div className={styles.action__header}>
          <h3>1.0 /// Gestion de projet et cahier des charges</h3>
          <h2>
            Créer un site web est un saut de géant dans l'inconnu. Avec nous,
            soyez accompagner de A à Z sur la réalisation de votre projet. Nous
            vous aidons dans la réflexion de la stratégie et nous vous aidons à
            comprendre chacune des étapes du développement.
          </h2>
        </div>
        <div className={styles.action__items}>
          <div>
            <h3>Établissement votre besoin</h3>
            <p>
              La première étape est de vous comprendre. Votre business, vos
              attentes, qui sont vos utilisateurs. Nous discutons ensemble de
              votre projet sans terme technique afin que vous puissiez vous
              concentrer sur votre expertise et que nous puissions vous
              conseiller au mieux.
            </p>
          </div>
          <div>
            <h3>Préconisations techniques</h3>
            <p>
              Une fois que nous avons parfaitement compris votre besoin, nous vous donnons notre recommandation technique. On peut comparer cette étape avec le cahier des charges. Nous utilisons souvent le terme de Users Stories pour vous montrer quelle technologie on vous conseil pour quelle fonctionnalité. Ainsi on s'assure de vous livrer le maximum de détail avant le lancement du projet et on vous offre une visibilité globale de notre planning de production.
            </p>
          </div>
          <div>
            <h3>Gestion de projet</h3>
            <p>
              Dernière étape avant le lancement de votre prestation, nous établissons le perimètre de la gestion de projet. On vous asisgne un référent qui vous guidera et répondra à toutes vos questions. Nous mettons également une page web facilement accessible qui vous permettra de suivre chacune des étapes du développement et de nous communiquer vos retours. Nous utilisons Notion connecté à notre outil de gestion de projet interne, Jira.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div className={styles.action__header}>
          <h3>2.0 /// Webdesign UI</h3>
          <h2>
            Vous avez vraiment envie que votre site soit un template copier coller trouver gratuitement sur internet ? Nous, non. On veut vous offrir une image durable et efficace sur le web. Tout nos sites sont réalisés avec maquette pour vous permettre de participer au développement.
          </h2>
        </div>
        <div className={styles.action__items}>
          <div>
            <h3>Wireframes</h3>
            <p>
              On écoute vos inspirations et tout commence avec un dessin tout simple. Ce que l'on appelle le wireframe. Au crayon on dessine les zones importantes de votre site web.
            </p>
          </div>
          <div>
            <h3>Maquettage sous figma</h3>
            <p>
              Nous reprenons les wireframes pour les designer sous l'outil Figma. On reprend votre charte graphique. On créer votre librairie d'icones et on vous propose un webdesign moderne et efficace.
            </p>
          </div>
          <div>
            <h3>Prototypage</h3>
            <p>
              Pas de mauvaise surprise ! Vous pouvez vour un prototype de votre site final avec animation et effet qui produirons l'effet Wahou! que vous venez cherchez.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div className={styles.action__header}>
          <h3>3.0 /// Développement</h3>
          <h2>
            Votre site part au four ! Votre référent vous proposera un planing de production aux petits oignons. Vous n'êtes pas mis de côté pour autant. À chaque fin d'étape du développement de votre site, vous êtes invité à nous faire vos retours et vous avez la possibilité d'apporter des modifications.
          </h2>
        </div>
        <div className={styles.action__items}>
          <div>
            <h3>Sprints</h3>
            <p>
              Le planing vous présentera clairement les différentes étapes du développement, appelées des sprints. À chaque fin de sprint on se rencontre pour valider la production et passer à l'étape suivante.
            </p>
          </div>
          <div>
            <h3>Tickets</h3>
            <p>
              Nous vous fournirons un outil de dépôt de ticket pour simplifier les communications entre les développeurs et vous. Vous pouvez ainsi apporter des modifications de dernières minutes.
            </p>
          </div>
          <div>
            <h3>Recettage</h3>
            <p>
              Après le développement, place aux tests ! Cette étape est appelé recettage. Nous assurons des modifications jusqu'à 3 semaines après la production pour modifier et corriger tous les bugs de votre site.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div className={styles.action__header}>
          <h3>4.0 /// Optimisations et Maintenance</h3>
          <h2>
            Nous ne disparaissons pas après la livraison de votre site web. Une fois le site en place, nous optimisons le temps de chargement et le SEO de votre site. Nous assurons également des missions de formation pour vous aider à prendre en main votre site. Et nous assurons aussi la maintenance pour éviter toutes les mauvaises surprises.
          </h2>
        </div>
        <div className={styles.action__items}>
          <div>
            <h3>Sécurisation et optimisations</h3>
            <p>
              Nous installons toutes les instances de sécurité pour éviter le piratage. Nous installons également Google Analytics et Google Tag Manager pour vous permettre de suivre les performances de votre site.
            </p>
          </div>
          <div>
            <h3>Référencement naturel - SEO</h3>
            <p>
              Nous passons en revue votre site pour l'optimiser pour le référencement naturel. Temps de chargement dektop et mobile, balises meta et alt, hiérarchie des contenus ... 
            </p>
          </div>
          <div>
            <h3>Maintenance et Formation</h3>
            <p>
              Votre site est fournis avec une documentation pour vous aider à le prendre en main. Pour aller plus loin, nous assurons des formations spécifiques 100% prises en charge avec notre partenaire Exupery
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
