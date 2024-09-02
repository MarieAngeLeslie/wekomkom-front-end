import styles from '../styles/page.module.css';
import CallToActionBtnWithBg from '../components/call-to-action-btn-with-bg/CallToActionBtnWithBg';
import CallToActionBtn from '../components/call-to-action-btn/CallToActionBtn';
import { PlayIcon } from '../images/svg/svgIcon';
import AttractivePresentation from '../components/attractive-presentation/AttractivePresentation'
import PresentationUi from '../ui/presentation-ui/PresentationUi';
import CountAccomplishment from '../components/count-accomplishment/CountAccomplishment';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["first-side"]}>
          <div className={styles["first-bloc"]}></div>
          <div className={styles["second-bloc"]}>
            <CountAccomplishment number={45} desc={"Offres d’accompagnement"} />
          </div>
        </div>
        <div className={styles["main-side"]}>
          <div className={styles["first-part"]}>
            <h1 className={styles["title"]}>La plateforme qui vous aide à développer votre <span className={styles["special-title-style"]}>entreprise</span> </h1>
            <div className={styles["description-and-btn-bloc"]}>
              <p className={styles["description"]}>Bienvenue sur Wekomkom, votre carrefour de succès entrepreneurial.
                Trouvez les meilleures opportunités pour votre entreprise et connectez-vous
                avec des mentors, des investisseurs et des partenaires potentiels.</p>
              <div className={styles["btn-bloc"]}>
                <CallToActionBtnWithBg link={""} description="Trouver une opportunité" />
                <CallToActionBtn link={""} description="Découvrir en vidéo" icon={<PlayIcon />} />
              </div>
            </div>
          </div>
          <div className={styles["div"]}>
            <div className={styles["div1"]}>
              <AttractivePresentation imageSrc={"/img1.png"} alt="Nice Pitch" />
            </div>
            <div className={styles["div2"]}>
              <PresentationUi />
            </div>
            <div className={styles["div3"]}>
              <AttractivePresentation imageSrc={"/img2.png"} alt="Nice Pitch" />
            </div>
          </div>
        </div>
        <div className={styles["third-side"]}></div>
      </header>
    </>
  );
}
