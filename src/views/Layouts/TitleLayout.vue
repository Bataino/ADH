<template>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" mode="md" ></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center ion-margin-end">{{ pagetitle }}</ion-title>
</template>

<script>
import { IonBackButton, IonButtons } from '@ionic/vue';

export default {
    name: 'TitleLayout',
    props: [ 'pagetitle' ],
    components: {
       IonBackButton,
       IonButtons
    }
}

</script>

<style scoped>

</style>