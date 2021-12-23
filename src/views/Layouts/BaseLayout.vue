<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
          <slot name="header"/>
        </ion-toolbar>
    </ion-header>

    <ion-content >
      <slot name="content"/>
    </ion-content>

    <slot name="extras"/>

  </ion-page>
</template>

<script>
import { IonPage,IonHeader,IonContent,IonToolbar} from '@ionic/vue';

export default {
    name: 'BaseLayout',
    props: [ 'h-visible'],
    components: {
       IonPage,
       IonHeader,
       IonContent,
       IonToolbar,
    }
}

</script>

<style scoped>


</style>