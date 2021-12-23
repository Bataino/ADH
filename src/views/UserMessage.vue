<template>
    <base-layout>
        <template v-slot:header>
            <ion-buttons slot="start">
                <ion-back-button default-href="/home" mode="md"></ion-back-button>
            </ion-buttons>
            <ion-buttons slot="end" class="ion-padding-end">
                <Icon icon="ion:notifications" style=""></Icon>
            </ion-buttons>
                <ion-buttons style="padding-left:5px;">
                    <ion-thumbnail>
                        <img src="../../public/assets/images/Doctor.png" class="" style="padding:10px">
                    </ion-thumbnail>
                    <ion-label class="century" style="font-size:12px;">
                       <b>
                           John Doe
                        </b> 
                    </ion-label>
                </ion-buttons>
        </template>

        <template v-slot:content>
            <div style="" class="container ion-margin-top">
                <div style="" class="inner">
                <ion-list style="overflow-y:scroll;bottom:0px">
                    <ion-item > 
                            <div class="ion-padding green" style="">
                                    <ion-text class="text-wrap">
                                        Hello bossbossbossbossbossbossboss
                                    </ion-text>   
                                    <div class="ion-text-end ion-float-end msg-info ion-align-item-center">
                                         11: 40 
                                        <Icon icon="ion:notifications" style="margin-top:10px !important" />
                                    </div>
                            </div>
                    </ion-item>
                    <ion-item > 
                            <div class="ion-padding grey" slot="end">
                                    <ion-text class="text-wrap">
                                        Hello bossbossbossbossbossbossboss
                                    </ion-text> <br>
                                    <div class="ion-padding-top">
                                        <button class="twin-button" style="background:green">
                                            <ion-text color="light berlin">
                                                Accept
                                            </ion-text>
                                        </button>
                                        <button class="twin-button" style="background:red">
                                            <ion-text class="berlin" color="light">
                                                Reject
                                            </ion-text>
                                        </button>
                                    </div>  
                                    <div class="ion-text-end ion-float-end msg-info ion-align-item-center">
                                         11: 40 
                                        <Icon icon="ion:notifications" style="margin-top:10px !important" />
                                    </div>
                            </div>
                    </ion-item>
                     <ion-item > 
                            <div class="ion-padding grey" slot="end">
                                    <ion-text class="text-wrap">
                                        Hello bossbossbossbossbossbossboss
                                    </ion-text> <br>
                                        <button class="buy-button ion-margin-top" style="">
                                            <ion-text class="berlin" color="light">
                                                Buy Now
                                            </ion-text>
                                        </button>
                                    <div class="ion-text-end ion-float-end msg-info ion-align-items-center">
                                         11: 40 
                                        <Icon icon="ion:notifications" style="margin-top:35px !important" />
                                    </div>
                            </div>
                    </ion-item>
                    <ion-item class="ion-text-end" >
                            <div class="ion-padding red ion-text-start " slot="end">
                                    <ion-text class="text-wrap">
                                        Hello boss
                                        bossbossbossbossbossboss
                                    </ion-text>   
                                    <div class="ion-text-end ion-float-end msg-info">
                                        11: 40
                                    </div>
                            </div>
                        </ion-item>
                </ion-list>
                </div>
            </div>
        </template>

        <template v-slot:extras>
            <ion-footer>
                <div class="df alm ion-padding-end">
                    <input placeholder="Message..." class="berlin" style=""/>
                         <button>
                            <Icon icon="ion:notifications" class=""></Icon>
                        </button>
                        <button>
                            <Icon icon="ion:notifications" class=""></Icon>
                        </button>
                       
                </div>
            </ion-footer>
        </template>

    </base-layout>
</template>

<script>
import BaseLayout from './Layouts/BaseLayout.vue';

import { Icon } from '@iconify/vue';
import { IonList,IonText,IonLabel,IonButtons,IonThumbnail,IonBackButton} from '@ionic/vue';

export default{
  name: 'UserMessage',
  components: {
    IonList,
    BaseLayout,
    IonBackButton,
    IonText,
    Icon,
    IonLabel,
    IonButtons,
    IonThumbnail
  }
};
</script>

<style scoped>
.red, .green, .grey{
    width: fit-content;
    font-size: 13px !important;
    min-width: 150px !important;
    margin-top: 20px;
    max-width: 80% !important;
}
ion-item{
    --border-color:transparent;
}
.green{
    background-color: green !important;
    border-radius: 5px 15px 15px 5px !important;
    color:white;
}
.red{
    background-color: red !important;
    border-radius: 15px 5px 5px 15px !important;
    color:black;
}
.grey{
    background-color: lightgray !important;
    border-radius: 15px 5px 5px 15px !important;
    color:black;
}
.span{
    width:100%;
    bottom:0;
    position: fixed;
    padding: 5px 2px;
}
input{
    width:100%;
    height:70px;
    border:none;
    padding-left: 15px;
    margin-right:2px;
}
.df button:active{
    background: rgb(243, 243, 243);
    border-radius: 100%;

}
.df button{
    color:lightgray !important;
    padding:10px;
    margin:1px !important;
    font-size: 20px !important;
    height: 60px;
    background: none;
    border: none;
}
.df{
    border-top:1px solid lightgray;
}
.msg-info{
    font-size:9px !important;
    color:black;
    padding:2px 0px;
    margin-left:10px;
}
ion-button{
    background-color: transparent !important;
    border: none !important;
}
.twin-button{
    padding:10px 20px;
    margin: 3px;
    border-radius: 3px;
}
.buy-button{
    padding:10px 20px;
    border-radius: 3px;
    background:green;
    margin-left:auto !important;
}
.container{
  height: 100%;
  position: relative;
}
.inner{
  height: 100%;
  display: flex;
  flex: column;
  flex-direction: column;
  /* overflow-y: scroll; */
  justify-content: flex-end;
}
.full-height{
  position: absolute;
  left: 0;
  width: 20%;
  top: 0;
  height: 100%;
}
</style>