<template>
<base-layout>
    <template v-slot:header>
        <title-layout pagetitle="BMI"></title-layout>
    </template>

    <template v-slot:content>
        <ion-graph></ion-graph>
        <div class="ion-padding">
            <div class="ion-margin-top ion-padding">
                <ion-input class="berlin button" placeholder="Input your BMI today"></ion-input>
                <ion-button expand="full" class="button ion-text-capitalize berlin" color="danger">
                    <ion-text>
                        Update
                    </ion-text>
                </ion-button>
            </div>
        </div>

    </template>

    <template v-slot:extras>
    </template>

</base-layout>
</template>

<script>
import BaseLayout from './Layouts/BaseLayout.vue';
import TitleLayout from './Layouts/TitleLayout.vue';
import IonGraph from './Layouts/IonGraph.vue';
import {
    IonInput,
    IonButton,
    IonText
} from '@ionic/vue';

export default {
    name: 'SingleNumericalRecord',
    components: {
        BaseLayout,
        TitleLayout,
        IonGraph,

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
ion-button,ion-input{
  width: 100% !important;
}
ion-input {
    --background: lightgray;
    --color: gray;
    margin-left:2px;
    margin-bottom:10px ;
}

div {
}
</style>
