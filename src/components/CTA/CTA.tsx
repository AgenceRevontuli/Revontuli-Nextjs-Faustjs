import React from "react";
import Link from "next/link";
import styles from "./CTA.module.scss";

interface props {
  text?: string;
  link?: string;
}

export default function CTA({ text, link }) {
  return (
    <div className={styles.cta__brut}>
      <Link href={`/${link}`}>
        <a>
          {text}

          <div className={styles.cta__ico}>
            <img
              src="http://headless.local/wp-content/uploads/2022/08/arrow.svg"
              alt=""
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
