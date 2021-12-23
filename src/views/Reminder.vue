<template>
    <base-layout>
        <template v-slot:header>
            <app-header title="Reminders"></app-header>
        </template>

        <template v-slot:content>
            <ion-button class="button ion-margin ion-text-capitalize berlin ion-text-danger" expand="full" color="danger" href="./reminder/new">
               <ion-text color="light">
                    Create New Reminder
                </ion-text> 
            </ion-button>

            <ion-searchbar animated placeholder="" class="ion-margin"></ion-searchbar>

             <ion-list class="ion-no-padding century" no-padding>

                <ion-item lines="full" class="" >
                        <div class="ion-padding century">
                            <b class="berlin" style="font-size:28px;">11:20</b><br>
                            Natriam 2mg
                        </div>
                        <div slot="end" class="ion-padding century df alm">
                           <ion-toggle class="ion-padding-end"></ion-toggle>
                            <Icon  icon="fluent:delete-48-filled" />
                        </div>
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

import { Icon } from '@iconify/vue';
// import Menu from './Layouts/Menu.vue';
import { IonList,IonButton,IonText,IonItem ,IonToggle,IonSearchbar} from '@ionic/vue';

export default{
  name: 'Reminder',
  components: {
    IonList,
    IonItem,
    IonButton,
    IonText,
    IonToggle,
    IonSearchbar,
    Icon,
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
Icon{
    font-size: 20px !important;
}
ion-button{
    margin-top: 50px !important;
}
ion-toggle{
    --background: Lightgray;
    --handle-background: gray;
    --background-checked: Lightgray;
    --handle-background-checked: green;
}
ion-searchbar{
    width:50%;
    --border-radius:12px;
    --box-shadow:none;
    --background:lightgray;
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