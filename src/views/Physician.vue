<template>
<base-layout pagetitle="DashBoard">

    <template v-slot:header>
        <app-header title="DashBoard"></app-header>
    </template>

    <template v-slot:content id="">
        <br>
        <ion-select class="ion-margin" interface-options="Doctors">
            <ion-select-option disabled>Select dept</ion-select-option>
            <ion-select-option value="brown">Cardio</ion-select-option>
            <ion-select-option value="blonde">RPT</ion-select-option>
            <ion-select-option value="black">Diabete</ion-select-option>
            <ion-select-option value="red">Radiology</ion-select-option>
        </ion-select>
        <ion-list class="ion-padding" lines="full">
            <ion-item>
                <ion-thumbnail>
                    <img src="../../public/assets/images/Email.png" class="">
                </ion-thumbnail>
                <ion-label>
                    <div class="df jcc alm">
                        <ion-text class="century">
                            <b class="berlin" style="font-size:14px">
                                John doo
                            </b><br>
                            I am good<br>
                            volt
                        </ion-text>
                        <Icon icon="entypo:dot-single" style="color:green;font-size:70px;"/>
                        <div style="font-size:40px;" class="ion-text-danger">
                            <Icon icon="entypo:dots-three-vertical" style="color:green" />
                        </div>
                    </div>
                </ion-label>
            </ion-item>

        </ion-list>

    </template>
    <template v-slot:extras>
        <Footer></Footer>
    </template>

</base-layout>
</template>

<script>
import BaseLayout from './Layouts/BaseLayout.vue';
import AppHeader from './Layouts/AppHeader.vue';
import Footer from './Layouts/Footer.vue';

import {
    Icon
} from '@iconify/vue';

import {
    IonSelect,
    IonSelectOption
} from '@ionic/vue'

export default {
    name: 'Physician',
    components: {
        AppHeader,
        BaseLayout,
        Footer,
        Icon,
        IonSelect,
        IonSelectOption
    }
};
</script>

<style scoped>
ion-item {
    --border-color: transparent;
    --background: rgb(232, 230, 230);
    font-size: 12px;
    border-radius: 5px;
}

img {
    border-radius: 100%;
    padding:10px;
}
</style>
