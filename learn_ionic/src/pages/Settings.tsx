import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabButton,
  IonTabs,
  IonToolbar
} from "@ionic/react";
import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import { Redirect, Route } from "react-router";
import { atCircle, triangle } from "ionicons/icons";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonTabs>
        <IonToolbar slot="bottom">
          <IonTabButton tab="tab1" href="/app/settings/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/app/settings/tab2">
            <IonIcon icon={atCircle} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
        </IonToolbar>
        <IonRouterOutlet>
          <Route path="/app/settings/tab1" component={Tab1} />
          <Route path="/app/settings/tab2" component={Tab2} />
          <Route exact path="/app/settings">
            <Redirect to="/app/settings/tab1" />
          </Route>
        </IonRouterOutlet>
      </IonTabs>
    </IonPage>
  );
};

export default Settings;
