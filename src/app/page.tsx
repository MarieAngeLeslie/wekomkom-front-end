import styles from '../styles/page.module.css';
import CallToActionBtnWithBg from '../components/call-to-action-btn-with-bg/CallToActionBtnWithBg';
import CallToActionBtn from '../components/call-to-action-btn/CallToActionBtn';
import { PlayIcon, StaticDotIcon, SpecialDesignIcon, WekomkomIcon, PropulsorIcon, SmallUniverseIcon, ArrowIcon } from '../images/svg/svgIcon';
import AttractivePresentation from '../components/attractive-presentation/AttractivePresentation'
import PresentationUi from '../ui/presentation-ui/PresentationUi';
import CountAccomplishment from '../components/count-accomplishment/CountAccomplishment';
import AvailableOffer from '../components/available-offer-component/AvailableOffer';
import PubUI from '../components/pub-ui/PubUI';
import CustomTag from '../components/custom-tag/CustomTag';
import Benefit from '../components/benefit/Benefit';
import Achievement from '../components/achievement/Achievement';
import Partner from '../components/partner-component/Partner';
import PresentationWithFilligrane from '../components/presentation-with-filigrane/PresentationWithFilligrane';
import Image from 'next/image'
import CallToActionDiscoverBtn from '../ui/Call-to-action/CallToActionDiscoverBtn';
import partner1Img from '../../public/partner-logos/partner1.png'
import partner2Img from '../../public/partner-logos/partner2.png'
import partner3Img from '../../public/partner-logos/partner3.png'
import partner4Img from '../../public/partner-logos/partner4.png'
import partner5Img from '../../public/partner-logos/partner5.png'
import partner6Img from '../../public/partner-logos/partner6.png'


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

const achievements_3 = [
  {
    id: '1',
    number: 1532,
    title: 'Entreprises enregistrées',
  },
  {
    id: '2',
    number: 75,
    title: "Structures d’accompagnements",
  },
  {
    id: '3',
    number: 10,
    title: "Partenaires techniques et financiers",
  },
  {
    id: '4',
    number: 148,
    title: 'Offres crées',
  },
  {
    id: '5',
    number: 762,
    title: "Opportunités partagées",
  },
  {
    id: '6',
    number: 162,
    title: "Demandes d’accompagnement",
  }
];

const offers = [
  {
    id: '1',
    title: 'Création d’offres illimitées',
  },
  {
    id: '2',
    title: 'Publication de vos offres et opportunités',
  },
  {
    id: '3',
    title: 'Mise en place et gestion de votre équipe d’accompagnement',
  },
  {
    id: '4',
    title: 'Tracking et reporting de vos accompagnements',
  }
];


const partners = [
  {
    id: '1',
    img: partner1Img,
  },
  {
    id: '2',
    img: partner2Img,
  },
  {
    id: '3',
    img: partner3Img,
  },
  {
    id: '4',
    img: partner4Img,
  },
  {
    id: '5',
    img: partner5Img,
  },
  {
    id: '6',
    img: partner6Img,
  },

];

export default function Home() {

  return (
    <>
      <header className={styles.header}>
        <div className={styles["first-side"]}>
          <div className={styles["first-block"]}>
            <AvailableOffer
              tagTitle={"Bon d'accompagnement"}
              mainImageSrc={"/offer-img.png"}
              title={"Définir son offre commercial"}
              description={"Objectifs : Attirer des clients potentiels. Convaincre les clients d'acheter vos produits"}
              price={"550 000 FCFA"}
            />

          </div>
          <div className={styles["second-block"]}>
            <CountAccomplishment number={45} desc={"Offres d’accompagnement"} />
          </div>
        </div>
        <div className={styles["main-side"]}>
          <div className={styles["first-part"]}>
            <h1 className={styles["title"]}>La plateforme qui vous aide à développer votre <span className={styles["special-title-style"]}>entreprise</span> </h1>
            <div className={styles["description-and-btn-block"]}>
              <p className={styles["description"]}>Bienvenue sur Wekomkom, votre carrefour de succès entrepreneurial.
                Trouvez les meilleures opportunités pour votre entreprise et connectez-vous
                avec des mentors, des investisseurs et des partenaires potentiels.</p>
              <div className={styles["btn-block"]}>
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
          <div className={styles["first-block"]}>
            <PubUI
              tagTitle={"Bon d'accompagnement"}
              mainImageSrc={"/pub-img.jpg"}
              title={"Trouvez l'Opportunité qui Boostera Votre Entreprise"}
              description={"Découvrez Comm'une Opportunité, la plateforme de mise en relation"}
            />
          </div>
          <div className={styles["second-block"]}>
            <CountAccomplishment number={1532} desc={"Entreprises enregistrées"} />
          </div>
        </div>
      </header>

      <div className={styles["vector-shape-block"]}>
      </div>

      <section className={styles["second-main-block"]}>
        <div className={styles["title-block"]}>
          <CustomTag tagTitle={"Entreprise"} tagTextColor={"#226ba2"} tagBgColor={"#d5f1fd"} />
          <h1>Lancer votre entreprise et bénéficier d’un écosystème de qualité. </h1>
        </div>
        <div className={styles["second-big-block"]}>
          <div className={styles["first-row"]}>
            <div className={styles["left-block"]}>
              <div className={styles["top-block"]}>
                <h1>Une vitrine attractive pour votre business !</h1>
                <SpecialDesignIcon />
              </div>
              <div className={styles["img-presentation-block"]}>
              </div>
            </div>
            <div className={styles["right-block"]}>
              <h1>Des opportunités inédites pour votre entreprise !</h1>
              {opportunities.map((opportunity) => (
                <div key={opportunity.id} style={{ marginBottom: 12, width: '22rem' }}>
                  <Benefit description={opportunity.title} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles["second-row"]}>
            <div className={styles["left-block"]}>
              <div className={styles["top-block"]}>
                <h1>Un écosystème diversifié vous offrant un cadre idéal.</h1>
              </div>
              <div className={styles["achievement-presentation-block"]}>
                <div className={styles["achievement-presentation-small-block"]}>
                  {achievements_1.map((achievement) => (<Achievement key={achievement.id} achievementNumber={achievement.number} desc={achievement.title} />))}
                </div>
                <div className={styles["achievement-presentation-small-block"]}>
                  {achievements_2.map((achievement) => (<Achievement key={achievement.id} achievementNumber={achievement.number} desc={achievement.title} />))}
                </div>
              </div>
            </div>
            <div className={styles["right-block"]}>
              <div className={styles["cluster-small-block-design"]}>
                <div className={styles["small-block-design"]}>
                  <PresentationWithFilligrane imageSrc={'/nice_img_1.png'} desc={'Etudiant, Professionnel'} alt={"Etudiant, Professionnel"} />
                </div>
                <div className={styles["small-block-design"]}>
                  <PresentationWithFilligrane imageSrc={'/nice_img_2.jpg'} desc={'Entreprise, Start-up, GIE'} alt={"Entreprise, Start-up, GIE"} />
                </div>
              </div>
              <div className={styles["right-one-main-block"]}>
                <PresentationWithFilligrane imageSrc={'/nice_img_3.png'} desc={'Porteur de projet'} alt={"Porteur de projet"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["last-block"]}>
          <div className={styles["icon1"]}>
            <WekomkomIcon />
          </div>
          <div className={styles["icon2"]}>
            <PropulsorIcon />
          </div>
          <div className={styles["icon3"]}>
            <SmallUniverseIcon />
          </div>
          <div className={`${styles["main-block"]} ${styles["borders-style"]}`}>
            <h1>Prêt à vous lancer ?</h1>
            <p>
              Créez votre entreprise maintenant et profitez de toutes
              les opportunités qu’offre WEKOMKOM
            </p>
            <div className={styles["btn-block"]}>
              <CallToActionBtnWithBg link={""} description="Créer votre entreprise maintenant" />
            </div>
          </div>

        </div>
      </section>

      <section className={styles["third-main-block"]}>
        <header>
          <CustomTag tagTitle={"Accessibilité"} tagTextColor={"#357d6a"} tagBgColor={"#a4f4e7"} />
          <h1 className={styles["title"]} >Une <span className={styles["special_title_style"]}>expérience</span> unique de l'écosystème entrepreneurial</h1>
        </header>
        <div className={styles["shop-block"]}>
          <div className={styles["first-side"]}>
            <Image
              src={'/nice_img_4.png'}
              fill={true}
              alt={"concree shop"}
            />
          </div>
          <div className={styles["second-side"]}>
            <h1>Boutique d'Accompagnement</h1>
            <p>La Boutique d'Accompagnement de Wekomkom est votre guichet unique pour accéder à une gamme complète de services et de ressources conçus pour propulser votre entreprise.</p>
            <div className={styles["shop-btn-block"]}>
              <CallToActionBtn link={""} description="Découvrir" icon={<ArrowIcon />} />
            </div>
            <div className={styles["static-dot"]}>
              <StaticDotIcon />
            </div>
          </div>
        </div>

      </section>

      <section className={styles["fourth-main-block"]}>
        <div className={styles["first-block"]}>
          <CustomTag tagTitle={"Structure d'accompagnement"} tagTextColor={"#333e49"} tagBgColor={"#f4c691"} />
          <h1>Digitalisez et promouvez vos offres d’accompagnement </h1>
          <p>Accédez à une vaste communauté de porteurs de projets, d'entreprises et de partenaires d'appui. Créez et gérez des offres de services
            sur mesure, et suivez vos prestations étape par étape en toute simplicité.</p>
        </div>
        <div className={`${styles["second-block"]}`}>
          <div className={`${styles["first-row"]}`}>
            <div className={`${styles["block-1"]} ${styles["borders-style"]}`}>
              <h1>Gestion simplifiée et partagée de votre structure</h1>
              {offers.map((opportunity) => (
                <div key={opportunity.id} style={{ marginBottom: 12, width: '22rem' }}>
                  <Benefit description={opportunity.title} />
                </div>
              ))}
            </div>
            <div className={`${styles["block-2"]} ${styles["borders-style"]}`}>
              <div className={styles["part-1"]}>
                <h1>Parmis les structures déjà présente sur Wekomkom</h1>
                <SpecialDesignIcon />
              </div>
              <div className={styles["part-2"]}>
                {partners.map((partner) => (
                  <Partner key={partner.id} imgSrc={partner.img} altInfo={"Impact HUB Dakar"} />
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles["second-row"]}`}>
            <div className={`${styles["block-1"]} ${styles["borders-style"]}`}>
              <h1>Votre Plateforme <span className={styles["design-wekomkom"]}>WEKOMKOM</span> c'est plus de : </h1>
              <div className={styles["achievement-block"]} >
                {achievements_3.map((achievement) => (<div className={styles["achievement-small-container"]}><Achievement key={achievement.id} achievementNumber={achievement.number} desc={achievement.title} /></div>))}
              </div>
            </div>
            <div className={`${styles["block-2"]} ${styles["borders-style"]}`}>
              <Image
                src="/work-together.png"
                width={270}
                height={250}
                alt="Picture of the author"
              />
              <div className={styles["create-botton-block"]}>
                <CallToActionDiscoverBtn link={""} description="Créer votre structure maintenant" icon={<ArrowIcon />} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />

    </>
  );
}
