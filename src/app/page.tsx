import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["first-side"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis delectus fugit incidunt ipsa, perspiciatis, est autem at, nulla optio magni doloribus? Sequi quia pariatur dele
          niti tenetur iste eum, eligendi dolorem repudiandae.</div>
        <div className={styles["main-side"]}>
          <div className={styles["first-part"]}>
            <h1>La plateforme qui vous aide à développer votre entreprise</h1>
            <p>Bienvenue sur Wekomkom, votre carrefour de succès entrepreneurial.
              Trouvez les meilleures opportunités pour votre entreprise et connectez-vous
              avec des mentors, des investisseurs et des partenaires potentiels.</p>
          </div>
          <div className={styles["div"]}>
            <div className={styles["div1"]}>
            </div>
            <div className={styles["div2"]}></div>
            <div className={styles["div3"]}></div>
          </div>
        </div>
        <div className={styles["third-side"]}></div>
      </header>
    </>
  );
}
