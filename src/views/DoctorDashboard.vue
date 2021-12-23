<template>
<base-layout pagetitle="DashBoard">

    <template v-slot:header>
        <app-header title="DashBoard"></app-header>
    </template>

    <template v-slot:content>
        <br>
        <div class="ion-padding ion-text-center">
            <ion-searchbar animated placeholder="Search Patient" class="ion-text-start century"></ion-searchbar>
        </div>

        <ion-list class="ion-padding" lines="full">
            <ion-item>
                <ion-thumbnail>
                    <img src="../../public/assets/images/Email.png" class="">
                </ion-thumbnail>
                <ion-label>
                    <div class="df jcc alm">
                        <ion-text class="century">
                            <b class="berlin" style="font-size:14px">
                                John doo
                            </b><br>
                            I am good<br>
                            volt
                        </ion-text>
                        <Icon icon="entypo:dot-single" style="color:green;font-size:70px;" />
                        <div style="font-size:40px;" class="ion-text-danger">
                            <Icon icon="entypo:dots-three-vertical" style="color:green" />
                        </div>
                    </div>
                </ion-label>
            </ion-item>

        </ion-list>
    </template>

    <template v-slot:extras>
        <Footer></Footer>
    </template>

</base-layout>
</template>

<script>
import BaseLayout from './Layouts/BaseLayout.vue';
import AppHeader from './Layouts/AppHeader.vue';
import Footer from './Layouts/Footer.vue';

import {
    Icon
} from '@iconify/vue';

import {
    IonList,
    IonThumbnail,
    IonLabel,
    IonItem,
    IonSearchbar
} from '@ionic/vue'

export default {
    name: 'DoctorDashboard',
    components: {
        AppHeader,
        BaseLayout,
        Footer,
        IonList,
        IonThumbnail,
        IonLabel,
        IonItem,
        IonSearchbar,
        Icon
    }
};
</script>

<style scoped>
ion-item {
    --border-color: transparent;
    --background: rgb(232, 230, 230);
    font-size: 12px;
    border-radius: 5px;
}

img {
    border-radius: 100%;
    padding: 10px;
}
ion-searchbar{
    --box-shadow:none;
}
</style>
