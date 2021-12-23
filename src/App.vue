<template>
  <ion-app>
    <ion-router-outlet />
        <Menu></Menu>
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Menu from './views/Layouts/Menu.vue';

export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  }
}
</script>