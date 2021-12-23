<template>
<ion-page>
    <back-button defaultback="./home"></back-button>
    <ion-content class="ion-padding">
        <div class="center ion-padding">
                <h2>Choose Your Category</h2>
        </div>
        <div class="div">
            <a href="./signup">
                <ion-card>
                    <ion-card-header>
                        <img src="../../public/assets/images/Doctor.png" class="top-image">
                    </ion-card-header>
                    <ion-card-content>
                        Doctor
                    </ion-card-content>
                </ion-card>
            </a>
            <a href="./signup">
                <ion-card>
                    <ion-card-header>
                        <img src="../../public/assets/images/Patient.png" class="top-image">
                    </ion-card-header>
                    <ion-card-content>
                        Patient
                    </ion-card-content>
                </ion-card>
            </a>
        </div>
    </ion-content>
</ion-page>
</template>

<script>
import BackButton from './Layouts/BackButton.vue'

export default {
    name: 'Login',
    components: {
        BackButton
    }
};
</script>

<style scoped>
ion-button {
    min-height: 60px !important;
    font-size: 14px;
    border-radius: 10px !important;
    margin-top: 50px;
}

img {
    width: 100%;

}

ion-card {
    max-width: 180px;
    text-align: center;
}

.div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
}

ion-input {
    border-bottom: 1px solid Lightgray;
    min-height: 60px;
    margin-top: 10px;
}

.div {
    text-align: center;
}
</style>
