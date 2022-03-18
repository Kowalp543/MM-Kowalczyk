<template>
    <header class = "page-header">
        <div class="container">
            <router-link to="/"><img class="logo" width= "160" height= "94" alt="logo MMKowalczyk" src="~@/assets/logo.webp"></router-link>
            <div class="header-right">
                <div class="page-contact">
                    <p><font-awesome-icon icon="phone-volume" pull="left" :transform="{ rotate: -35 }"/>Rejestracja telefoniczna <a href="tel: +48604540510"><span>+48 604 540 510</span></a></p>
                </div>
                <nav class="page-nav">
                    <ul class ="page-nav-list">
                        <li><router-link to="/">STRONA GŁÓWNA</router-link></li>
                        <li><router-link to="okulista">OKULISTA</router-link></li>
                        <li><router-link to="diabetolog">DIABETOLOG</router-link></li>
                        <li><router-link to="cennik">CENNIK</router-link></li>
                        <li><router-link to="kontakt">KONTAKT</router-link></li>
                    </ul>
                </nav>
                <!-- <nav class="phone-nav">
                    <button class="phone-nav-button">Menu</button>
                    <div class="phone-nav-menu">
                        <ul>
                            <li><router-link to="/">STRONA GŁÓWNA</router-link></li>
                            <li><router-link to="okulista">OKULISTA</router-link></li>
                            <li><router-link to="diabetolog">DIABETOLOG</router-link></li>
                            <li><router-link to="cennik">CENNIK</router-link></li>
                            <li><router-link to="kontakt">KONTAKT</router-link></li>
                        </ul>
                    </div>
                </nav> -->
                <Push :right=true :closeOnNavigation="true" class="push" :width="200"  :crossIcon="false" noOverlay>
                    <span><router-link to="/">STRONA GŁÓWNA</router-link></span>
                    <span><router-link to="okulista">OKULISTA</router-link></span>
                    <span><router-link to="diabetolog">DIABETOLOG</router-link></span>
                    <span><router-link to="cennik">CENNIK</router-link></span>
                    <span><router-link to="kontakt">KONTAKT</router-link></span>
                </Push>
            </div>
        </div>
    </header>
</template>

<script>
    import { Push } from 'vue-burger-menu'

    export default {
        components: {
            Push
        }
    }

</script>

<style>
* {
    box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

.container{
    width: 80%;
    margin: 0 auto;
}

.page-header .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 85px;
    position: sticky;
}

.logo{
    /* width: 160px;
    height: 94px; */
    aspect-ratio: attr(width) / attr(height);
}

.header-right{
    display: flex;
    flex-direction: column;
}

.page-contact {
    font-size: 14px;
    font-weight: 600;
    height: 30px;
    position: relative;
}

.page-contact p{
    margin-top: 5px;
    margin-bottom: 5px;
    float:right;
}

.page-contact span{
    color: #e4bc9b;
    margin-left: 10px;
    text-decoration: none;
}

.page-contact a{
    text-decoration: none;
}

/* .phone-nav{
    display: none;
} */

.push {
    display: none;
}

.page-nav{
    height: 30px;
}

.page-nav-list{
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
}

.page-nav-list li{
    list-style-type: none;
    margin-left: 20px;
}

.page-nav-list a{
    text-transform: uppercase;
    text-decoration: none;
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
}

.page-nav-list a:hover{
    color: #e4bc9b;
}

@media screen and (max-width: 600px){
body{
    overflow-x: hidden;
}
.container{
    width: 100%;
}
.page-nav{
    display: none;
}
.page-contact{
    display: none;
}
/* .phone-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  height: 20px;
}

.phone-nav-button {
    border-radius: 5px;
    border: 2px solid #e4bc9b;
    color: #000;
    background: #FAF8F6;
    -webkit-box-shadow: 0px 5px 15px -10px rgba(0,0,0,1);
    -moz-box-shadow: 0px 5px 15px -10px rgba(0,0,0,1);
    box-shadow: 0px 5px 15px -10px rgba(0,0,0,1);
}

.phone-nav-menu {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    height: 175px;
    width: 151px;
    top: 57px;
    right: -200px;
    padding: 0;
    background: #FAF8F6;
    transition: 0.5s transform ease-in-out;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 15px -9px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 15px -9px rgba(0,0,0,1);
    box-shadow: 0px 0px 15px -9px rgba(0,0,0,1);
    border: 2px solid #C7BA9F;
    z-index: 100;
}

.phone-nav-menu ul {
    position: absolute;
    display: flex;
    height: calc(100% - 20px);
    flex-wrap: wrap;
    margin: 0 10px;
    padding: 0;
    list-style-type: none;
    align-content: flex-start
}

.phone-nav-menu ul li {
    display: flex;
    list-style-type: none;
    height: 20px;
    background: #ffffff;
    flex-basis: 100%;
    margin-top: 12px;
    color: #000;
    border-radius: 5px;
    overflow: hidden;
    text-decoration: none;
    border: 2px solid #e4bc9b;
}

.phone-nav-menu ul li a{
    display: flex;
    padding: 5px;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #ffffff;
    color: #000;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 12px;
}

.phone-nav-menu ul li a:hover{
    color: #A0917A;
}

.phone-nav-button:focus ~ .phone-nav-menu, .phone-nav-menu:hover {
  transform: translateX(-200px);
}
} */

.push{
    display: flex;
}

 .bm-burger-button {
      top: 31px;
      cursor: pointer;
      height: 22px;
      width: 30px;
    }
    .bm-burger-bars {
        background-color: #e4bc9b;
        border-radius: 30px;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    /* .cross-style {
      position: absolute;
      top: 12px;
      right: 10px;
      cursor: pointer;
    }
    .bm-cross {
      background: #000;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    } */
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: #FAF8F6; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list span{
      margin-right: 20px;
      font-size: 14px;
      font-weight: 700;
    }
    .bm-item-list a {
      display: flex;
      text-decoration: none;
      color: #C7BA9F;
      letter-spacing: 1px;
    }
}


@media screen and (min-width: 601px) and (max-width: 677px){
    .container{
        width: 98%;
    }
    .logo{
        width: 150px;
        height: 88px;
    }
    .page-contact{
        font-size: 12px;
    }
    .page-nav-list li{
        list-style-type: none;
        margin-left: 12px;
    }
    .page-nav-list a{
        font-size: 10px;
    }
}

@media screen and (min-width: 678px) and (max-width: 731px){
    .container{
        width: 96%;
    }
    .logo{
        width: 150px;
        height: 88px;
    }
    .page-contact{
        font-size: 12px;
    }
    .page-nav-list li{
        list-style-type: none;
        margin-left: 12px;
    }
    .page-nav-list a{
        font-size: 12px;
    }
}

@media screen and (min-width: 732px) and (max-width: 769px){
    .container{
        width: 90%;
    }
    .logo{
        width: 150px;
        height: 88px;
    }
    .page-contact{
        font-size: 12px;
    }
    .page-nav-list li{
        list-style-type: none;
        margin-left: 14px;
    }
    .page-nav-list a{
        font-size: 12px;
    }
}

@media screen and (min-width: 770px) and (max-width: 800px){
    .container{
        width: 90%;
    }
    .page-nav-list li{
        list-style-type: none;
        margin-left: 16px;
    }
    .page-nav-list a{
        font-size: 12px;
    }
}

@media screen and (min-width: 801px) and (max-width: 850px){
    .container{
        width: 90%;
    }
    .page-nav-list li{
        list-style-type: none;
        margin-left: 14px;
    }
    .page-nav-list a{
        font-size: 14px;
    }
}

@media screen and (min-width: 817px) and (max-width: 925px){
    .container{
        width: 90%;
    }
    .page-nav-list li{
        list-style-type: none;
        margin-left: 16px;
    }
    .page-nav-list a{
        font-size: 14px;
    }
}







</style>