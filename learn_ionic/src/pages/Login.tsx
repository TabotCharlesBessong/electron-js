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
      }, 2000);
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
