<template>
<ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="">

          <div class="df alm ion-padding">
              <ion-thumbnail>
                <img src="../../../public/assets/images/Doctor.png" class=""/>
              </ion-thumbnail>
              <div class="ion-padding">
                <ion-label class="century ion-padding-end ion-text-wrap ion-text-sm" style="font-size:80%;">
                  <b>John dahhoe</b>
                  <br>
                  Jolaoshobatmat.ntlr@gmail.com
                </ion-label>
              </div>
          </div>

      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list class="ion-no-padding century" no-padding>

          <ion-item lines="full">Physicians</ion-item>
          <ion-item lines="full">Prescription</ion-item>
          <ion-item lines="full">About</ion-item>
          <ion-item lines="full">Settings</ion-item>
          <ion-item lines="full">Logout</ion-item>
       
      </ion-list>
    </ion-content>
    <ion-footer class="century ion-padding ion-text-center ion-text-sm ion-no-border" style="font-size:12px">
      (C) Techiehealth ng
    </ion-footer>
     <ion-router-outlet id="main"></ion-router-outlet>
  </ion-menu>


</template>

<script>

import { IonHeader,IonContent,IonToolbar,IonMenu,IonList,IonItem,IonTitle,IonRouterOutlet,IonThumbnail,IonImg} from '@ionic/vue';


export default {
    name:'Menu',
    compnents:{
        IonHeader,
        IonContent,
        IonToolbar,
        IonMenu,
        IonList,
        IonItem,
        IonTitle,
        IonRouterOutlet,
        IonImg,
        IonThumbnail
    },
}
</script>

<style scoped>
img{
  min-width: 50px !important;
}
ion-item{

  --padding-top: 10px !important;
  --padding-bottom: 10px !important;
  
  --background-hover:Lightgray !important;
  --border-color:white;
}
ion-item:hover {
  --background: Lightgray !important;
}
ion-item:active{
  --background:Lightgray !important;
}
ion-label{
  
}

</style>