<template>
<base-layout>
    <template v-slot:header>
        <app-header title="Health Vitals"></app-header>
    </template>

    <template v-slot:content>

        <div class="df jcc ion-padding ion-margin-md">
            <div class="ion-padding ion-margin-top ion-margin-md red text14" style="border-radius:10px">
                <ion-text class="century">
                    Balance
                </ion-text>
                <br>
                <ion-text class="berlin" style="font-size:28px;color:white;">
                    500.00$
                </ion-text>
            </div>
            <div class="ion-padding ion-margin-top green text14" style="border-radius:10px">
                <ion-text class="century">
                    Balance
                </ion-text>
                <br>
                <ion-text class="berlin" style="font-size:28px;color:white;">
                    500.00$
                </ion-text>
            </div>
        </div>

        <br>
        <br>

        <b class="ion-margin berlin">Request a New Withdrawal</b>
        <div class="ion-padding">
            <ion-input class="berlin button" placeholder="Name"></ion-input>
            <div class="df jcc ion-margin-vertical">
                <ion-row class="card red" style="min-width:250px;width:100%">
                    <div class="green card century ion-padding" style="min-width:100%;color:white">
                        <b>
                            5553 344 4343 4434
                        </b>
                        <br><br><br><br>
                        27/22
                    </div>
                </ion-row>
                <div class="ion-padding card ion-margin-horizontal jcc alm berlin lgray ion-text-center" style="min-width:100px" sl="end">
                    <br>
                    <br>
                    Add
                </div>
            </div>
            <ion-button class="button ion-margin-top ion-text-capitalize berlin " expand="full" color="danger" href="./records/update">
                <ion-text color="light">
                    Update
                </ion-text>
            </ion-button>
        </div>
    </template>

    <template v-slot:extras>
        <!-- <Menu></Menu> -->
        <Footer></Footer>
    </template>

</base-layout>
</template>

<script>
import AppHeader from './Layouts/AppHeader.vue';
import BaseLayout from './Layouts/BaseLayout.vue';
import Footer from './Layouts/Footer.vue';
import {
    IonButton,
    IonText
} from '@ionic/vue';

export default {
    name: 'Withdrawal',
    components: {
        IonButton,
        IonText,
        AppHeader,
        Footer,
        BaseLayout,
    },
    data() {
        return {
            patient: false
        }
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

ion-input {
    --background: rgb(243, 243, 243);
    --color: gray;
    margin-left: 2px;
    margin-bottom: 7px;
}

.img {
    height: 100px;
    border-radius: 100%;
}

ion-row {
    white-space: nowrap;
    width: 50px;
    overflow-x: auto !important;
}

.card {
    height: 150px;
    border-radius: 10px;

}
</style>
