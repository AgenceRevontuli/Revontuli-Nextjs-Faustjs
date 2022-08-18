import React from 'react';
import styles from 'scss/components/Footer.module.scss';

interface Props {
  copyrightHolder?: string;
}

function Footer({ copyrightHolder = 'Revontuli - Studio de développement web et stratégie de Marketing Digital' }: Props): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer data-scroll-container className={styles.main}>
      <div data-scroll-section className={styles.footer}>
        <div data-scroll className={styles.footer__columns}>
          <div className={styles.column_block}>
            <h4>Studio Revontuli</h4>
            <p>Revontuli est un studio de développement de site internet et de consulting en stratégie d'acquisition digitale basé à Caen en Normandie et à Paris. L'initiative est portée par Tristan Tornatore, Freelance et expert en marketing digital. Retrouvez ici les mentions légales et la politique de confidentialité et des cookies du site.</p>
          </div>
          <div>
            <h4>Nous contacter</h4>
            <ul>
              <li>+33 6 31 49 63 05</li>
              <li>foxy@revontuli.fr</li>
              <li>1 rue Jean Jacques Rousseau </li>
              <li>94200 - Ivry-Sur-Seine</li>
            </ul>
          </div>
          <div>
            <h4>Nous suivre</h4>
            <ul>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <p>{`© ${year} ${copyrightHolder}.`}</p>
        <p data-scroll>Site internet designé et développé par <a href="https://www.tristantornatore.fr/" target="_blank">Tristan Tornatore</a> 🦊</p>
      </div>
    </footer>
  );
}

export default Footer;
