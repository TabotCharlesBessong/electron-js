import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from "@ionic/react";
import React, { useState } from "react";

const List: React.FC = () => {
  const [users, setUsers] = useState<any []>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=15");
    const user = await data.json();
    return user;
  };

  useIonViewWillEnter(async () => {
    setLoading(true)
    const users = await getUsers()
    setUsers(users)
    setLoading(false)
  })
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButton slot="start">
            <IonMenuButton />
          </IonButton>
          <IonTitle>List Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default List;
