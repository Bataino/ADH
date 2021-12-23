<template>
<ion-page>
    <ion-content>

        <ion-back-button default-href="/home" mode="md" class="ion-float-start"></ion-back-button>
        <div class="ion-padding top-div ion-text-start">
            <h3 class="berlin">Bromate</h3>
            <ion-text class="ion-margin-bottom century">Doctor Wales</ion-text>
        </div>

        <div class="img ion-padding ion-margin-vertical" style="position:relative">
            <img src="../../public/assets/images/Drug.png">
            <ion-button color="" style="position:absolute !important;top:40%;right:40%;opacity:.9;--background:gray">
                <ion-text color="light ion-text-capitalize">
                    Buy Now
                </ion-text>
            </ion-button>
        </div>
        <div class="df jcc ion-padding century" style="font-size:14px;">
            <ion-text>
                Morning: <b>2</b>
            </ion-text>
            <ion-text>
                Morning: <b>2</b>
            </ion-text>
            <ion-text>
                Morning: <b>2</b>
            </ion-text>
        </div>
        <div class="ion-padding">
            <h3 class="berlin">Doctor's Note</h3>
            <ion-text class="century">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                assumenda magni suscipi
                t? Unde quod dignissimos quae quia at
                inventore blanditiis animi consequuntur labore molestiae, ducimus
                dicta architecto, cumque facilis. Numquam.
            </ion-text>
        </div><br><br>
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonBackButton,
    IonPage,
    IonContent
} from '@ionic/vue'

export default {
    name: 'Login',
    components: {
        IonBackButton,
        IonPage,
        IonContent
    }
};
</script>

<style scoped>
ion-text {
    font-size: 13px;
}

.img {
    background-color: rgb(242, 242, 242) !important;
    text-align: center;
}

img {
    height: 300px;
}
</style>
