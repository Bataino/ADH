<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home" mode="md"></ion-back-button>
                </ion-buttons>
                <ion-title>
                    Messages
                </ion-title>
            </ion-toolbar>
                
        </ion-header>
        <ion-content class="">
            <ion-list lines="full">
                <ion-item href="/message/id">
                    <ion-thumbnail>
                        <img src="../../public/assets/images/Email.png" class="ion-padding">
                    </ion-thumbnail>
                    <ion-label>
                        <div class="df jcc alm">
                            <ion-text class="century">
                                <b>John doo</b><br>
                                <ion-text style="font-size:12px">
                                    I'm good
                                </ion-text>
                            </ion-text>
                            <span class="ion-text-end century">
                                <ion-badge color="danger" >99</ion-badge><br>
                                <ion-text style="font-size:12px">2 mins</ion-text>
                            </span>
                        </div>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-thumbnail>
                        <img src="../../public/assets/images/Email.png" class="ion-padding">
                    </ion-thumbnail>
                    <ion-label>
                        <div class="df jcc alm">
                            <ion-text class="century">
                                <b>John doo</b><br>
                                <ion-text style="font-size:12px">
                                    I'm good
                                </ion-text>
                            </ion-text>
                            <span class="ion-text-end century">
                                <ion-badge color="danger">99</ion-badge><br>
                                <ion-text style="font-size:12px">2 min ago</ion-text>
                            </span>
                            
                        </div>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage,IonHeader,IonContent,IonTitle, IonList, IonItem, IonText, IonBackButton,IonToolbar,IonBadge} from '@ionic/vue';
// import { Icon } from '@iconify/vue';

export default {
  name: 'Message',
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonList,
    IonItem,
    IonText,
    IonBackButton,
    IonToolbar,
    IonBadge
    // Icon
  }
};
</script>

<style scoped>
ion-item{
    --border-color:white;
  --margin-top: 3px !important;
  --margin-bottom: 5px !important;
  
}
img{
    padding:7px;
    border-radius: 100%;
}
ion-text{
    font-size: 14px;
}
div{
    padding-top:10px;
    padding-bottom:10px;
    border-bottom:1px solid lightgray;
}
</style>