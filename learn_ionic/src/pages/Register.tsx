import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import logo from "../assets/logo.png";
import { logInOutline, personCircleOutline } from "ionicons/icons";

const Register: React.FC = () => {
  const router = useIonRouter();
  const onRegister = (event: any) => {
    event.preventDefault();
    console.log("am in your house");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButton>
            <IonBackButton defaultHref="/" />
          </IonButton>
          <IonTitle>Register Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <img
                src={logo}
                alt="freecodecamp"
                width={"70%"}
                height={100}
                style={{ margin: "1rem auto" }}
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form action="" onSubmit={onRegister}>
                    <IonInput
                      label="Email"
                      type="email"
                      placeholder="charles@gmail.com"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>
                    <IonInput
                      className="ion-margin-top"
                      label="Password"
                      type="password"
                      placeholder="************"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>
                    <IonInput
                      className="ion-margin-top ion-margin-bottom"
                      label="Confirm Password"
                      type="password"
                      placeholder="************"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>
                    <IonButton expand="full" type="submit">
                      Create account{" "}
                      <IonIcon icon={personCircleOutline} slot="end" />{" "}
                    </IonButton>
                    <IonButton color="secondary" routerLink="/" expand="full">
                      Log in to your account
                      <IonIcon icon={logInOutline} slot="end" />{" "}
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>footer</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;
