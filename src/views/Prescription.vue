<template>
<base-layout pagetitle="DashBoard">

    <template v-slot:header>
        <app-header title="DashBoard"></app-header>
    </template>

    <template v-slot:content id="">
        <br>
        <ion-select class="ion-margin" interface-options="Doctors" >
            <ion-select-option disabled>Select doctors</ion-select-option>
            <ion-select-option value="brown">Cardio</ion-select-option>
            <ion-select-option value="blonde">RPT</ion-select-option>
            <ion-select-option value="black">Diabete</ion-select-option>
            <ion-select-option value="red">Radiology</ion-select-option>
        </ion-select>
        <ion-list class="">
            <div class="df jcc alm ion-margin ion-text-capitalize ion-padding div2" href="/prescription/id">
                <div class="df alm">
                    <img src="../../public/assets/images/drug-i.png" class="header-img">
                    <ion-text class="Century">
                        <b>24 Bromdae</b><br>
                        <font style="font-size:10px" class="century gray">
                            Dr Wales
                        </font>
                    </ion-text>
                </div>

                <span class="ion-text-end">
                    <ion-text class="berlin">
                        2-1-2<br>
                    </ion-text>
                    <font style="font-size:10px" class="century gray">
                        3 days ago
                    </font>
                </span>
            </div>

            <div class="df jcc alm ion-margin ion-text-capitalize ion-padding div2">
                <div class="df alm">
                    <img src="../../public/assets/images/drug-i.png" class="header-img">
                    <ion-text class="Century">
                        <b>24 Bromdae</b><br>
                        <font style="font-size:10px" class="century gray">
                            Dr Wales
                        </font>
                    </ion-text>
                </div>

                <span class="ion-text-end">
                    <ion-text class="berlin">
                        2-1-2<br>
                    </ion-text>
                    <font style="font-size:10px" class="century gray">
                        3 days ago
                    </font>
                </span>
            </div>
        </ion-list>

    </template>
    <template v-slot:extras>
        <!-- <Menu></Menu> -->
        <Footer></Footer>
    </template>

</base-layout>
</template>

<script>
import BaseLayout from './Layouts/BaseLayout.vue';
import AppHeader from './Layouts/AppHeader.vue';
import Footer from './Layouts/Footer.vue';
// import Menu from './Layouts/Menu.vue';
import { IonSelect, IonSelectOption} from '@ionic/vue'

export default {
    name: 'Prescription',
    components: {
        AppHeader,
        BaseLayout,
        Footer,
        // Menu,
        IonSelect,
        IonSelectOption
    }
};
</script>

<style scoped>
.div {
    background: rgb(243, 239, 239);
    font-size: 14px;
    border-radius: 3px !important;
    max-height: 60px;
    margin-top: 2px !important;
    margin-bottom: 2px !important;
}

.div2 {
    background: rgb(243, 239, 239);
    font-size: 14px;
    border-radius: 3px !important;
    max-height: 60px;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}
</style>
