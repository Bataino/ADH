<template>
<ion-page>
    <ion-content class="ion-padding">
        <ion-back-button default-href="./home" mode="md" class="ion-float-start"></ion-back-button>
        <div class="top-div ion-text-start century ion-padding">
            <h3 class="ion-padding-start">
                <b>
                    New Prescription
                </b>
            </h3>
        </div>
        <div class="ion-padding" style="padding-top:10vh;min-width:100%">
            <div class="ion-margin-top">
                <ion-input class="berlin button" placeholder="Name"></ion-input>
                <ion-input class="berlin button" placeholder="Start Date"></ion-input>
                <div class="df jcc berlin ion-padding-vertical">
                   <div class="day-selected" style="">
                       S
                   </div>
                   <div class="day-selected" >
                       M
                   </div>
                   <div class="day" >
                       T
                   </div>
                   <div class="day-selected" >
                       W
                   </div>
                   <div class="day-selected" >
                       T
                   </div>
                   <div class="day-selected" >
                       F
                   </div>
                   <div class="day-selected" >
                       S
                   </div>
                </div>
                <ion-button expand="full" class="button ion-text-capitalize berlin " color="danger">
                    <ion-text>
                        Update
                    </ion-text>
                </ion-button>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonInput,
    IonButton,
    IonText
} from '@ionic/vue';

export default {
    name: 'NewReminder',
    components: {
        IonInput,
        IonButton,
        IonText
    }
};
</script>

<style scoped>
img {
    padding: 10px;
}

ion-item {
    font-size: 12px;
    --border-color: white;

}

ion-button,
ion-input {
    width: 100% !important;
}

ion-button {
    margin-top: 25px;
}

ion-input {
    --background: rgb(243, 243, 243);
    --color: gray;
    margin-left: 2px;
    margin-bottom: 7px;
}

input {
    margin-top: 7px;
    padding-left: var(--padding-start);
    padding-right: var(--padding-end);
    padding-top: var(--padding-top);
    padding-bottom: var(--padding-bottom);
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    border: 0;
    outline: none;
    background: transparent;
}
.day, .day-selected{
    min-width: 30px;
    width: 30px;
    height: 30px;
    font-size:12px;
    border-radius:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:3px
}
.day-selected {
    background:green;
    color:white;
}
.day {
    background:lightgray;
    color:gray
}
</style>
