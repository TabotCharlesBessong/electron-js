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
import { logInOutline, personCircleOutline } from "ionicons/icons";
import logo from "../../assets/logo.png"

const Login: React.FC = () => {
  const router = useIonRouter()
  const onLogin = (event: any) => {
    event.preventDefault();
    console.log("am in your house");
    router.push("/register")
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
          <IonTitle>Login Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form action="" onSubmit={onLogin}>
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
              <IonButton type="submit" expand="full">
                Login <IonIcon icon={logInOutline} slot="end" />{" "}
              </IonButton>
              <IonButton color="secondary" routerLink="/register" expand="full">
                Create account <IonIcon icon={personCircleOutline} slot="end" />{" "}
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

export default Login;
