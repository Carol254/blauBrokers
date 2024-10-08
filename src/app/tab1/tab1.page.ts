import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonCard, IonText, IonCol, IonRow } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonText, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButton],
})
export class Tab1Page {
  constructor() {}
}
