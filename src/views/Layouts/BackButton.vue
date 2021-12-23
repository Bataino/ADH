<template>
    <ion-buttons slot="start">
       <ion-back-button default-href="./home" mode="md"></ion-back-button>
    </ion-buttons>
</template>

<script>
import {IonBackButton, IonToolbar,IonButtons} from '@ionic/vue'

export default{
    name:'BackButton',
    prop: ['defaultback'],
    compnents:{
        IonBackButton,
        IonToolbar,
        IonButtons
    }
}
</script>

<style scoped>
ion-header, ion-toolbar{
    all:unset;
}
ion-back-button{
    float: left;
    display: flex;
}
</style>