<template>
    <base-layout>
        <template v-slot:header>
            <app-header title="Reminders"></app-header>
        </template>

        <template v-slot:content>
            <ion-button class="ion-margin ion-text-capitalize berlin ion-text-danger" expand="full" color="light">
               <ion-text color="danger">
                   Mark All as Read
                </ion-text> 
            </ion-button>

             <ion-list class="ion-no-padding century" no-padding>
                <ion-item lines="full" c4lass="" >
                       <ion-thumbnail>
                           <img src="../../public/assets/images/Doctor.png" />
                       </ion-thumbnail>
                       <ion-label class="">
                           <ion-text class="century ion-text-wrap">
                               Lorem Ipsum dolor amet takade fattre domo
                           </ion-text>
                       </ion-label>
                </ion-item>
            </ion-list>

        </template>

        <template v-slot:extras>
             <!-- <Menu></Menu> -->
            <Footer></Footer>
        </template>

    </base-layout>
</template>

<script>
import AppHeader from './Layouts/AppHeader.vue';
import BaseLayout from './Layouts/BaseLayout.vue';
import Footer from './Layouts/Footer.vue';

// import Menu from './Layouts/Menu.vue';
// import { IonList,IonButton,IonItem ,IonThumbnail,IonText} from '@ionic/vue';

export default{
  name: 'Notification',
  components: {
    // IonList,
    // IonItem,
    // IonButton,
    // IonThumbnail,
    // IonText,
    AppHeader,
    Footer,
    // Menu,
    BaseLayout,
  }
};
</script>

<style scoped>
img{
    padding:10px;
}
ion-item{
    font-size: 12px !important;
}
ion-button{
    max-height: 30px !important;
    --box-shadow:none;
}
ion-toggle{
    --background: Lightgray;
    --handle-background: gray;
    --background-checked: Lightgray;
    --handle-background-checked: green;
}
ion-searchbar{
    width:88%;
    --border-radius:12px;
    font-size: 10px;
}
svg{
    font-size: 20px !important;
    color: gray;
}
input{
    font-size:12px !important;
}
</style>