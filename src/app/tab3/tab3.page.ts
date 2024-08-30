import { Component } from '@angular/core';
import {  IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonFab,IonFabButton,IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButton,IonFabButton,IonFab,IonIcon],
})
export class Tab3Page {
  constructor() {}
}
