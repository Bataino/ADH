<template>
<doctor-dashboard v-if="!patient"></doctor-dashboard>
<base-layout pagetitle="DashBoard" v-if="patient">

    <template v-slot:header>
        <app-header title="DashBoard"></app-header>
    </template>

    <template v-slot:content>
        <br><br>
        <ion-text class="century ion-padding">
            How have you been? {{patient}}
        </ion-text>
        <br>
        <ion-button size="large" expand="full" color="light" class="ion-margin button ion-text-capitalize" href="./records">
            <ion-text class="berlin" color="danger">
                Update Your Vitals
            </ion-text>
        </ion-button>
        <br>

        <ion-text class="berlin ion-padding">
            Upcoming Reminder
        </ion-text>
        <a href="./reminders">
            <ion-list class="ion-margin-top ion-margin-bottom">
                <div class="df jcc alm ion-margin ion-text-capitalize ion-padding div">
                    <img src="../../public/assets/images/Email.png" class="header-img">
                    <ion-text class="Century">
                        Natrixiam
                    </ion-text>
                    <ion-text class="berlin">
                        Next 2 hours
                    </ion-text>
                </div>
                <div class="df jcc alm ion-margin ion-text-capitalize ion-padding div">
                    <img src="../../public/assets/images/Email.png" class="header-img">
                    <ion-text class="Century">
                        Natrixiam
                    </ion-text>
                    <ion-text class="berlin">
                        Next 2 hours
                    </ion-text>
                </div>
                <div class="df jcc alm ion-margin ion-text-capitalize ion-padding div">
                    <img src="../../public/assets/images/Email.png" class="header-img">
                    <ion-text class="Century">
                        Natrixiam
                    </ion-text>
                    <ion-text class="berlin">
                        Next 2 hours
                    </ion-text>
                </div>
            </ion-list>
        </a>

        <br>
        <ion-text class="berlin ion-padding">
            Recent Prescription
        </ion-text>
        <ion-list class="ion-margin-top ion-margin-bottom" href="./prescription">
            <div class="df jcc alm ion-margin ion-text-capitalize ion-padding div2" href="./prescription/id">
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
        <Footer></Footer>
    </template>

</base-layout>
</template>

<script>
import BaseLayout from './Layouts/BaseLayout.vue';
import AppHeader from './Layouts/AppHeader.vue';
import Footer from './Layouts/Footer.vue';
import DoctorDashboard from './DoctorDashboard.vue';
import {} from '@ionic/vue'

export default {
    name: 'Dashboard',
    components: {
        AppHeader,
        BaseLayout,
        Footer,
        DoctorDashboard
    },
    data(){
        return{
            // patient:"patient"
        };
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
