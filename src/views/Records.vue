<template>
<base-layout>
    <template v-slot:header>
        <app-header title="Health Vitals"></app-header>
    </template>

    <template v-slot:content>
        <div class="ion-text-center century ion-padding ion-margin text12" v-if="!patient">
            <img src="../../public/assets/images/Email.png" class="img">
                <br>
            <ion-text class="berlin text14">
                Officer John Doie<br>
            </ion-text>
            Last updated: 10 days ago
        </div>

        <div class="ion-padding df alm ion-margin-top">
            <ion-label>Date:</ion-label>
            <ion-datetime display-format="MM/DD/YY" placeholder="Select Date"></ion-datetime>
        </div>

        <b class="ion-margin berlin">Patient's State</b>
        <ion-grid class="ion-text-start" style="padding-top:0px">
            <ion-row class="">
                <ion-col size="6">
                    <ion-item>
                        <ion-thumbnail>
                            <img src="../../public/assets/images/Email.png" class="">
                        </ion-thumbnail>
                        <ion-label>
                            <div class="df jcc alm">
                                <ion-text class="century">
                                    <b>John doo</b><br>
                                    I am good
                                </ion-text>
                            </div>
                        </ion-label>
                    </ion-item>
                </ion-col>
                <ion-col size="6">
                    <ion-item>
                        <ion-thumbnail>
                            <img src="../../public/assets/images/Email.png" class="">
                        </ion-thumbnail>
                        <ion-label>
                            <div class="df jcc alm">
                                <ion-text class="century">
                                    <b>John doo</b><br>
                                    I am good
                                </ion-text>
                            </div>
                        </ion-label>
                    </ion-item>
                </ion-col>
            </ion-row>
        </ion-grid>

        <b class="ion-margin berlin">Patient's State</b>
        <ion-grid class="ion-padding ion-text-start" style="padding-top:0px">
            <ion-row class="">
                <ion-col size="6">
                    <ion-item>
                        <ion-thumbnail>
                            <img src="../../public/assets/images/Email.png" class="">
                        </ion-thumbnail>
                        <ion-label>
                            <div class="df jcc alm">
                                <ion-text class="century">
                                    <b>John doo</b><br>
                                    I am good
                                </ion-text>
                            </div>
                        </ion-label>
                    </ion-item>
                </ion-col>
                <ion-col size="6">
                    <ion-item>
                        <ion-thumbnail>
                            <img src="../../public/assets/images/Email.png" class="">
                        </ion-thumbnail>
                        <ion-label>
                            <div class="df jcc alm">
                                <ion-text class="century">
                                    <b>John doo</b><br>
                                    I am good
                                </ion-text>
                            </div>
                        </ion-label>
                    </ion-item>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-button class="button ion-margin ion-text-capitalize berlin ion-text-danger" expand="full" color="light" href="./records/update">
            <ion-text color="danger">
                Update
            </ion-text>
        </ion-button>
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
// import Menu from './Layouts/Menu.vue';
import {
    IonGrid,
    IonCol,
    IonRow,
    IonLabel,
    IonDatetime,
    IonThumbnail,
    IonButton,
    IonText
} from '@ionic/vue';

export default {
    name: 'Records',
    components: {
        IonGrid,
        IonCol,
        IonRow,
        IonLabel,
        IonDatetime,
        IonThumbnail,
        IonButton,
        IonText,
        AppHeader,
        Footer,
        // Menu,
        BaseLayout,
    },
    data(){
        return{
            patient:false
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
.img{
    height: 100px;
    border-radius: 100%;
}
</style>
