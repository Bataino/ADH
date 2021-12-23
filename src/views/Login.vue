<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-back-button default-href="./home" mode="md" class="ion-float-start" ></ion-back-button>
      <div class="top-div">
        <img src="../../public/assets/images/Record.png" class="top-image">
      </div>
      <div class="div">
        <h3>Welcome Back</h3>
      </div>
      <ion-list class="ion-padding berlin">
          <div class="">
            <ion-input placeholder="Username" class="berlin"></ion-input>
            <ion-input placeholder="***" type="password" class="berlin"></ion-input>
          </div>
        <ion-button size="large" expand="full" color="danger" class="ion- ion-text-capitalize" href="/dashboard">
          <ion-text class="berlin">
            Log in
          </ion-text>
        </ion-button>
    </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonBackButton} from '@ionic/vue'

export default {
  name: 'Login',
  components: {
    IonBackButton
  }
};
</script>

<style scoped>
ion-button{
  min-height:60px !important;
  font-size: 14px;
  border-radius: 10px !important;
  margin-top: 50px;
}
ion-input{
    border-bottom: 1px solid Lightgray;
    min-height: 60px;
    margin-top: 10px;
}
.div{
  text-align: center;
}

</style>