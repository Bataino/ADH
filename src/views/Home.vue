<template>
  <ion-page>
    <ion-content>
        <img src="../../public/assets/images/Angle.png" id="Angle">
      <div class="top-div">
        <img src="../../public/assets/images/Nosemask.png" class="top-image">
      </div>
      <div class="div berlin">
        <h3>Hello</h3>
        <i class="century">...Welcome to the Comm</i>
      </div>
      <ion-list class="ion-padding">
        <a href="/Login">
          <ion-button size="large" expand="full" color="danger" class="ion-margin ion-text-capitalize">
            <ion-text class="berlin">
              Log in
            </ion-text>
          </ion-button>
        </a>
          <ion-button size="large" href="/signup/category" expand="full" color="light" class="ion-margin ion-text-capitalize berlin">
            <ion-text color="danger">
              Sign Up
            </ion-text>
          </ion-button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
};
</script>

<style scoped>
ion-button{
  min-height:60px !important;
  font-size: 14px;
  border-radius: 10px !important;
}
.div{
  text-align: center;
}
#Angle{
  position: absolute;
  right: 0;
  width: 100px;
}
</style>