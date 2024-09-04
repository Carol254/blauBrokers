import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { add, colorPalette, document, globe } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonModal, IonButtons, IonButton, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonFab, IonIcon, IonFabButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonFabButton, IonIcon, IonFab, IonLabel, IonImg, IonAvatar, IonItem, IonList, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonModal]
})
export class Tab4Page {

  @ViewChild('modal',{static:false }) modal!:IonModal;

  constructor() { 
    addIcons({});
  }

  ionViewWillLeave(){
    if(this.modal && this.modal.isOpen){
      this.modal.dismiss();
    }
  }


}
