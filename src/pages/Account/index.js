import React, { useEffect, useState } from 'react'
import Header from '../../components/header/HeaderConecte'
import styles from './index.module.scss'
import Link from 'next/link'




function Index() {

  const [email, setEmail] = useState(null)
  const [forfait, setForfait] = useState(null)
  /* const email = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('token')).email.toString() : null */
  /* const forfait = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('token')).subscription : null */


  useEffect(() => setEmail(JSON.parse(localStorage.getItem('token')).email), [])
  useEffect(() => setForfait(JSON.parse(localStorage.getItem('token')).subscription), [])

  return (
    <div>
      <Header />

      <div className={styles.panel}>
        <div className={styles.tableau}>
          <div className={styles.premier}>
            <div className={styles.h1}>Compte</div>
            <div className={styles.h3}>
              Membre depuis Février 2022
            </div>
          </div>

          <div className={styles.deuxieme}>
            {/* //row 1 colonne 1 */}
            <div className={styles.abonnementpanel}>
              <div className={styles.h2}>
                Abonnement et facturation
              </div>
              <button className={styles.btn}>
                Annuler l&apos;abonnement
              </button>
            </div>
            {/* // colonne 2 de row 1 */}
            <div className={styles.panelinfo}>

              {/* //row 1 de colonne 2 de row1 1 */}
              < div className={styles.r1c2r1}>
                <div className={styles.rr1c2r1}>
                  <div className={styles.h3}>
                    {email}
                  </div>
                  <div className={styles.lien}>
                    <Link href='/Account/email'>
                      <a>
                        Modifier l&apos;adresse e-mail
                      </a>
                    </Link>
                  </div>
                </div>



                <div className={styles.rr1c2r1}>
                  <div className={styles.h3}>
                    Mot de passe : *********
                  </div>
                  <div className={styles.lien}>
                    <Link href='/Account/password'>
                      <a>
                        Modifier le mot de passe
                      </a>
                    </Link>
                  </div>
                </div>



                <div className={styles.rr1c2r1}>
                  <div className={styles.h3}>
                    telephone : 0123456789
                  </div>
                  <div className={styles.lien}>
                    <a href='#'>
                      Modifier le numero de telephone
                    </a>
                  </div>
                </div>
              </div>

              {/* row 2 de colonne 2 de row1 */}
              <div className={styles.r2c2r1}>
                <div className={styles.c1r2c2r1}>
                  <div className={styles.h3}>
                    Visa : ***************876
                  </div>
                  <div className={styles.h3}>
                    Prochiane Facturation : 12 mars 2022.
                  </div>
                </div>


                <div className={styles.c2r2c2r1}>
                  <div className={styles.lien}>
                    <a href='#'>
                      Gerer les informations de paiement
                    </a>
                  </div>
                  <div className={styles.lien}>
                    <a href='#'>
                      Ajouter un mode de paiement secondaire
                    </a>
                  </div>
                  <div className={styles.lien}>
                    <a href='#'>
                      Détails de facturation
                    </a>
                  </div>
                  <div className={styles.lien}>
                    <a href='#'>
                      Modifier le jour de la facturation
                    </a>
                  </div>
                </div>
              </div>
              {/* panel carte cadeaux */}
              <div className={styles.cadeaux}>
                <div className={styles.lien}><a href='#'>Utiliser une carte cadeaux ou un code de promotion</a></div>
                <div className={styles.lien}><a href='#'>Où acheter des cartess cadeaux ?</a></div>
              </div>


            </div>
          </div>

          <div className={styles.troisieme}>
            <div className={styles.h2}>
              D'etails du forfait
            </div>
            <div className={styles.troisieme_deux}>
              <div className={styles.h3}>{forfait}</div>
              <div className={styles.lien}><a href='#'>Changer le forfait</a></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index