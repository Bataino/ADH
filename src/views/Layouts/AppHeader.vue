<template>
    <ion-buttons slot="end">
            <a href="./messages">
                <img src="../../../public/assets/images/Message.png" class="header-img">
            </a>
    </ion-buttons>
    <ion-title>
        <b>
            {{ title }}
        </b>
    </ion-title>
    <ion-buttons slot="start">
        <a @click="openFirst">
            <img src="../../../public/assets/images/Doctor.png" class="header-img">
        </a>
    </ion-buttons>
</template>

<script>

import {menuController,IonButtons,IonTitle} from '@ionic/vue'

export default {
    name: 'AppHeader',
    props: ['title'],
    components: {
       IonButtons,
       IonTitle,
    },
    methods: {
        openFirst() {
            menuController.enable(true, 'first');
            menuController.open('first');
        },
    }
}
</script>

<style>
ion-title{
    font-size: 16px;
}
</style>
