import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonFab,IonFabButton,IonIcon,IonFabList,IonPopover,IonList,IonItem,IonModal,IonButtons, IonAvatar,IonImg,IonLabel,IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgIf } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { addIcons } from "ionicons";
import { search, add, closeOutline } from "ionicons/icons";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButton,IonFabButton,IonFab,IonIcon,IonFabList,IonPopover,IonList,IonItem,IonModal,IonButtons,IonImg,IonLabel,NgIf,IonInput],
})
export class Tab3Page {
  
  isModalOpen = false;
  constructor() {
      addIcons({search,add,closeOutline});}


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    console.log(isOpen ? 'open' : 'closed');
  }
}
