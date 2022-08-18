import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client, MenuLocationEnum } from "client";

interface Props {}

function Navbar({}: Props): JSX.Element {
  // Fetch nav data elements
  const { menuItems } = client.useQuery();
  const links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;
  // Responsive menu function
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuButton = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {toggleMenu && (
        <nav className={styles.menu}>
          <div className={styles.menu__items}>
            {/* Map du primary menu de wordpress */}
            <ul>
              {links?.map((link) => (
                <li key={`${link.label}$-menu`}>
                  <Link href={link.url ?? ""}>
                    <a href={link.url} onClick={toggleMenuButton}>
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.item__contact}>
              <Link href="/"><a>Nous Contacter</a></Link>
          </div>
        </nav>
      )}
      <button
        className={`${styles.navbar__burger} ${
          toggleMenu ? styles.menu__on : styles.menu__off
        }`}
        onClick={toggleMenuButton}
      >
        <p>{toggleMenu ? "Close" : "Menu"}</p>
        <span className={styles.burger_bar}></span>
      </button>
    </>
  );
}

export default Navbar;
