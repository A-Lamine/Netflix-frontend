import React from "react";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import {useRouter} from "next/router";

const Headermenu = () => {
  const router = useRouter();
  return (
    <div className={styles.header__menu}>
      <nav>
        <ul>
          <li className={router.pathname=="/Home" ? styles.active : ""}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={router.pathname=="/Mo Profil" ? styles.active : ""}>
            <Link href="/Account">
              <a>Mon Profil</a>
            </Link>
          </li>
          <li className={router.pathname=="/contact" ? styles.active : ""}>
            <Link href="https://github.com/A-Lamine" >
              <a target="_blank">My Git</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Headermenu;
