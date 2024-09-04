import type { Metadata } from "next";
import "./globals.css";
import styles from "../styles/nav.module.css";
import Image from 'next/image'
import Link from 'next/link'
import { MsgIcon, BellIcon, BottomChevronIcon } from '../images/svg/svgIcon'

export const metadata: Metadata = {
  title: "wekomkom",
  description: "La plateforme qui vous aide à développer votre entreprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <nav className={styles.nav} >
          <div className={styles["first-side"]}>
            <Image
              src={"/logo.png"}
              alt="Picture of the author"
              width={168}
              height={70}
            />
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/opportunities">Opportunités</Link>
              </li>
              <li>
                <Link href="/boutique">Boutique</Link>
              </li>
            </ul>
          </div>
          <div className={styles["second-side"]}>
            <MsgIcon />
            <BellIcon />
            <div className={styles["profil-bloc"]} >
              <Image
                src={'/happy-woman-profil.jpg'}
                alt="Picture of the author"
                sizes="300px"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className={styles["bottom-chevron"]}>
                <BottomChevronIcon />
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}


