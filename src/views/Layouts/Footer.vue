<template>
<ion-tabs>
    <!-- <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange"> -->
    <!-- Tab bar -->
    <ion-tab-bar>
        <ion-tab-button tab="dahboard" href="/dashboard">
            <Icon icon="ion:home" />
        </ion-tab-button>
        <ion-tab-button tab="record" href="/records">
            <Icon icon="ion:receipt" />
        </ion-tab-button>
        <ion-tab-button tab="reminder" href="/reminders">
            <Icon icon="ion:alarm" />
        </ion-tab-button>
        <ion-tab-button tab="notification" href="/notifications">
            <Icon icon="ion:notifications" />
        </ion-tab-button>
    </ion-tab-bar>
</ion-tabs>
</template>

<script>
import {
    IonTabBar,
    IonTabButton
} from '@ionic/vue';
import {
    Icon
} from '@iconify/vue';

export default {
    name: 'Footer',
    props: ['home', 'reminder', 'health-vital', 'notifications'],
    components: {

        Icon,
        IonTabBar,
        IonTabButton,

    },
    methods: {
        afterTabChange: function () {
            console.log("happy");
        }
    },

}
</script>

<style scoped>
ion-tab-button {
    font-size: 20px;
    color: green;
}

ion-tab-button:hover {
    font-size: 20px;
    color: green;
}

.red {
    color: red;
}

Icon:hover {
    color: red !important;
}

ion-tab-button.tab-selected {
    color: red !important;
    --ion-color-base: red !important;
}

ion-tab-bar {
    --ion-color-primary: red;
}
</style>
