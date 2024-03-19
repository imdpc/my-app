import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="for-my-header-page">Tab 1 hi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          className="main-container-for-card ion-padding ion-text-center
        "
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            itaque hic inventore, sit ducimus expedita cumque mollitia natus
            possimus explicabo debitis quisquam quia vel excepturi dolor
            doloremque rerum corporis! Laboriosam?
          </p>
        </div>
      </IonContent>
      {/* <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>{" "} */}
      <IonCard>
        <img
          alt="Silhouette of mountains"
          src="https://ionicframework.com/docs/img/demos/card-media.png"
        />
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
};

export default Tab1;
