import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonModal, IonButtons, IonButton, IonList, IonItem, IonAvatar, IonImg, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonAvatar, IonItem, IonList, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonModal]
})
export class Tab4Page {

  @ViewChild('modal',{static:false }) modal!:IonModal;

  constructor() { }

  ionViewWillLeave(){
    if(this.modal && this.modal.isOpen){
      this.modal.dismiss();
    }
  }


}
