import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonFab,IonFabButton,IonIcon,IonFabList,IonPopover,IonList,IonItem,IonModal,IonButtons, IonAvatar,IonImg,IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgIf } from '@angular/common';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButton,IonFabButton,IonFab,IonIcon,IonFabList,IonPopover,IonList,IonItem,IonModal,IonButtons,IonImg,IonLabel,NgIf],
})
export class Tab3Page {
  
  isModalOpen = false;
  constructor() {}


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    console.log(isOpen ? 'open' : 'closed');
  }
}
