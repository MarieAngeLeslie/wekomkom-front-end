import styles from '../styles/page.module.css';
import CallToActionBtnWithBg from '../components/call-to-action-btn-with-bg/CallToActionBtnWithBg';
import CallToActionBtn from '../components/call-to-action-btn/CallToActionBtn';
import { PlayIcon, SpecialDesignIcon, WekomkomIcon, PropulsorIcon, SmallUniverseIcon } from '../images/svg/svgIcon';
import AttractivePresentation from '../components/attractive-presentation/AttractivePresentation'
import PresentationUi from '../ui/presentation-ui/PresentationUi';
import CountAccomplishment from '../components/count-accomplishment/CountAccomplishment';
import AvailableOffer from '../components/available-offer-component/AvailableOffer';
import PubUI from '../components/pub-ui/PubUI';
import CustomTag from '../components/custom-tag/CustomTag';
import Benefit from '../components/benefit/Benefit';
import Achievement from '../components/achievement/Achievement';
import PresentationWithFilligrane from '../components/presentation-with-filigrane/PresentationWithFilligrane';

const opportunities = [
  {
    id: '1',
    title: 'Bénéficier d’offres d’accompagnement',
  },
  {
    id: '2',
    title: 'Obtenir des bons d’accompagnement',
  },
  {
    id: '3',
    title: 'Rester informé.e des meilleures opportunités',
  },
  {
    id: '4',
    title: 'Trouver des investisseurs et des partenaires',
  },
  {
    id: '5',
    title: 'Développer votre réseau',
  },
];

const achievements_1 = [
  {
    id: '1',
    number: 1532,
    title: 'Entreprises enregistrées',
  },
  {
    id: '2',
    number: 200,
    title: 'Opportunités partagées',
  }
];

const achievements_2 = [
  {
    id: '1',
    number: 148,
    title: 'Offres crées',
  },
  {
    id: '2',
    number: 75,
    title: "Structures d'accompagnement",
  }
];

export default function Home() {

  return (
    <>
      <header className={styles.header}>
        <div className={styles["first-side"]}>
          <div className={styles["first-bloc"]}>
            <AvailableOffer
              tagTitle={"Bon d'accompagnement"}
              mainImageSrc={"/offer-img.png"}
              title={"Définir son offre commercial"}
              description={"Objectifs : Attirer des clients potentiels. Convaincre les clients d'acheter vos produits"}
              price={"550 000 FCFA"}
            />

          </div>
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
          <div className={styles["presentation"]}>
            <div className={styles["presentation_1"]}>
              <AttractivePresentation imageSrc={"/img1.png"} alt="Nice Pitch" />
            </div>
            <div className={styles["presentation_2"]}>
              <PresentationUi />
            </div>
            <div className={styles["presentation_3"]}>
              <AttractivePresentation imageSrc={"/img2.png"} alt="Nice Pitch" />
            </div>
          </div>
        </div>
        <div className={styles["third-side"]}>
          <div className={styles["first-bloc"]}>
            <PubUI
              tagTitle={"Bon d'accompagnement"}
              mainImageSrc={"/pub-img.jpg"}
              title={"Trouvez l'Opportunité qui Boostera Votre Entreprise"}
              description={"Découvrez Comm'une Opportunité, la plateforme de mise en relation"}
            />
          </div>
          <div className={styles["second-bloc"]}>
            <CountAccomplishment number={1532} desc={"Entreprises enregistrées"} />
          </div>
        </div>
      </header>
      <div className={styles["vector-shape-bloc"]}>
      </div>
      <section className={styles["second-main-block"]}>
        <div className={styles["title-bloc"]}>
          <CustomTag tagTitle={"Entreprise"} tagTextColor={"#226ba2"} tagBgColor={"#d5f1fd"} />
          <h1>Lancer votre entreprise et bénéficier d’un écosystème de qualité. </h1>
        </div>
        <div className={styles["second-big-bloc"]}>
          <div className={styles["first-row"]}>
            <div className={styles["left-bloc"]}>
              <div className={styles["top-bloc"]}>
                <h1>Une vitrine attractive pour votre business !</h1>
                <SpecialDesignIcon />
              </div>
              <div className={styles["img-presentation-bloc"]}>
              </div>
            </div>
            <div className={styles["right-bloc"]}>
              <h1>Des opportunités inédites pour votre entreprise !</h1>
              {opportunities.map((opportunity) => (
                <div key={opportunity.id} style={{ marginBottom: 12, width: '22rem' }}>
                  <Benefit description={opportunity.title} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles["second-row"]}>
            <div className={styles["left-bloc"]}>
              <div className={styles["top-bloc"]}>
                <h1>Un écosystème diversifié vous offrant un cadre idéal.</h1>

              </div>
              <div className={styles["achievement-presentation-bloc"]}>
                <div className={styles["achievement-presentation-small-bloc"]}>
                  {achievements_1.map((achievement) => (<Achievement key={achievement.id} achievementNumber={achievement.number} desc={achievement.title} />))}
                </div>
                <div className={styles["achievement-presentation-small-bloc"]}>
                  {achievements_2.map((achievement) => (<Achievement key={achievement.id} achievementNumber={achievement.number} desc={achievement.title} />))}
                </div>
              </div>
            </div>
            <div className={styles["right-bloc"]}>
              <div className={styles["cluster-small-bloc-design"]}>
                <div className={styles["small-bloc-design"]}>
                  <PresentationWithFilligrane imageSrc={'/nice_img_1.png'} desc={'Etudiant, Professionnel'} alt={"Etudiant, Professionnel"} />
                </div>
                <div className={styles["small-bloc-design"]}>
                  <PresentationWithFilligrane imageSrc={'/nice_img_2.jpg'} desc={'Entreprise, Start-up, GIE'} alt={"Entreprise, Start-up, GIE"} />
                </div>
              </div>
              <div className={styles["right-one-main-bloc"]}>
                <PresentationWithFilligrane imageSrc={'/nice_img_3.png'} desc={'Porteur de projet'} alt={"Porteur de projet"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["last-bloc"]}>
          <div className={styles["icon1"]}>
            <WekomkomIcon />
          </div>
          <div className={styles["icon2"]}>
            <PropulsorIcon />
          </div>
          <div className={styles["icon3"]}>
            <SmallUniverseIcon />
          </div>
          <div className={styles["main-bloc"]}>
            <h1>Prêt à vous lancer ?</h1>
            <p>
              Créez votre entreprise maintenant et profitez de toutes
              les opportunités qu’offre WEKOMKOM
            </p>
            <div className={styles["btn-bloc"]}>
              <CallToActionBtnWithBg link={""} description="Créer votre entreprise maintenant" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
