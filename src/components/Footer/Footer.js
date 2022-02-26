import React from 'react';
import styles from "./Footer.module.scss";
import Separator from "../separator" 


const Footer = () => {
  return (
    <div>
    <Separator />
    <div className={styles.FooterWrapper}>
      <div className={styles.FooterTitle}>Des questions ? Appelez le <a className={styles.a} href='#'>(+33) 0805-543-063</a></div>
      <div className={styles.FooterRow}>
        <div className={styles.FooterColumn}>
          <div className={styles.FooterLink}><a href='#'>FAQ</a></div>
          <div className={styles.FooterLink}><a href='#'>Relations Investisseurs</a></div>
          <div className={styles.FooterLink}><a href='#'>Modes de lecture</a></div>
          <div className={styles.FooterLink}><a href='#'>Mentions légales</a></div>
          <div className={styles.FooterLink}><a href='#'>Seulement sur Netflix</a></div>
        </div>
        <div className={styles.FooterColumn}>
          <div className={styles.FooterLink}><a href='#'>Centre d&apos;aide</a></div>
          <div className={styles.FooterLink}><a href='#'>Recrutement</a></div>
          <div className={styles.FooterLink}><a href='#'>Conditions d&apos;utilisation</a></div>
          <div className={styles.FooterLink}><a href='#'>Nous contacter</a></div>
        </div>
        <div className={styles.FooterColumn}>
          <div className={styles.FooterLink}><a href='#'>Compte</a></div>
          <div className={styles.FooterLink}><a href='#'>Utiliser des cartes cadeaux</a></div>
          <div className={styles.FooterLink}><a href='#'>Confidentialité</a></div>
          <div className={styles.FooterLink}><a href='#'>Test de vitesse</a></div>
        </div>
        <div className={styles.FooterColumn}>
          <div className={styles.FooterLink}><a href='#'>Presse</a></div>
          <div className={styles.FooterLink}><a href='#'>Acheter des cartes cadeaux</a></div>
          <div className={styles.FooterLink}><a href='#'>Préférences de cookies</a></div>
          <div className={styles.FooterLink}><a href='#'>Informations légaless</a></div>

        </div>
      </div>
      <span className={styles.FooterLink}>Netflix France</span>
    </div>
    </div>
  );
}

export default Footer;