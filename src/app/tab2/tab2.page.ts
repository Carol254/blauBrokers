import { Component, ViewChild, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonFab,IonFabButton,IonIcon, IonModal, IonSearchbar, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonButton,IonFabList,IonPopover } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonImg, IonAvatar, IonItem, IonList, IonSearchbar, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonFab,IonFabButton,IonIcon,IonFabList,IonPopover]
})
export class Tab2Page  {

  @ViewChild('modal',{static:false }) modal!:IonModal;

  constructor() { }

  ionViewWillLeave(){
    if(this.modal && this.modal.isOpen){
      this.modal.dismiss();
    }
  }

}
