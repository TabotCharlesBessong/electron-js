import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import logo from "../../assets/logo.png";
import { logInOutline, personCircleOutline } from "ionicons/icons";

const Register: React.FC = () => {
  const router = useIonRouter();
  const onRegister = (event: any) => {
    event.preventDefault();
    console.log("am in your house");
    router.goBack()
  };

  return (
    <IonPage>
      <img
        src={logo}
        alt="freecodecamp"
        width={200}
        height={150}
        style={{ margin: "1rem auto" }}
      />
      <IonHeader>
        <IonToolbar color="success">
          <IonButton>
            <IonBackButton defaultHref="/" />
          </IonButton>
          <IonTitle>Register Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form action="" onSubmit={onRegister} >
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
                Create account <IonIcon icon={personCircleOutline} slot="end" />{" "}
              </IonButton>
              <IonButton color="secondary" routerLink="/" expand="full">
                Log in to your account
                <IonIcon icon={logInOutline} slot="end" />{" "}
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>footer</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;
