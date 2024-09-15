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
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import logo from "../assets/logo.png";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState<boolean>(false);
  const [present, dismiss] = useIonLoading();

  const onLogin = async (event: any) => {
    event.preventDefault();
    console.log("am in your house");
    await present("Logging in....");
    setTimeout(async () => {
      setTimeout(async () => {
        await dismiss();
      }, 500);
    }, 2000);
    router.push("/app", "forward");
  };

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color="success">
              <IonButton>
                <IonBackButton defaultHref="/" />
              </IonButton>
              <IonTitle>Login Screen</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <img
                    src={logo}
                    alt="freecodecamp"
                    width={"70%"}
                    height={150}
                    style={{ margin: "1rem auto" }}
                  />
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
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
                        <IonButton
                          color="secondary"
                          routerLink="/register"
                          expand="full"
                        >
                          Create account{" "}
                          <IonIcon icon={personCircleOutline} slot="end" />{" "}
                        </IonButton>
                        <IonButton
                          onClick={seeIntroAgain}
                          fill="clear"
                          size="small"
                          color={"medium"}
                          type="button"
                          expand="block"
                          className="ion-margin-top"
                        >
                          Watch intro again
                          <IonIcon icon={personCircleOutline} slot="end" />
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
      )}
    </>
  );
};

export default Login;
