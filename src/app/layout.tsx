import type { Metadata } from "next";
import "./globals.css";
import styles from "../styles/nav.module.css";


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
        <nav className={styles.nav} >General nav here</nav>
        {children}
      </body>
    </html>
  );
}


