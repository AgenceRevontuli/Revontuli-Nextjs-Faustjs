import React from "react";
import styles from "scss/components/Header.module.scss";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";

function Header({ backgroundNav }) {
  return (
    <header className={styles.header}>
      <div
        className={
          backgroundNav ? `${styles.inner__header} ${styles.bg}` : styles.inner__header
        }
      >
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="http://headless.local/wp-content/uploads/2022/08/logo.svg"
              width="150"
              alt=""
            />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
