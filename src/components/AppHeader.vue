<template>
    <header class = "page-header">
        <div class="container">
            <router-link to="/"><img class="logo" width= "160" height= "94" alt="logo MMKowalczyk" src="~@/assets/logo.png/"></router-link>
            <div class="header-right">
                <div class="page-contact">
                    <p><font-awesome-icon icon="phone-volume" pull="left" :transform="{ rotate: -35 }"/>Rejestracja telefoniczna <span>604 540 510</span></p>
                </div>
                <nav class="page-nav">
                    <ul class ="page-nav-list">
                        <li><router-link to="/">STRONA GŁÓWNA</router-link></li>
                        <li><router-link to="okulista">OKULISTA</router-link></li>
                        <li><router-link to="diabetolog">DIABETOLOG</router-link></li>
                        <li><router-link to="kontakt">KONTAKT</router-link></li>
                    </ul>
                </nav>
                <nav class="phone-nav">
                    <button class="phone-nav-button">Menu</button>
                    <div class="phone-nav-menu">
                        <ul>
                            <li><router-link to="/">STRONA GŁÓWNA</router-link></li>
                            <li><router-link to="okulista">OKULISTA</router-link></li>
                            <li><router-link to="diabetolog">DIABETOLOG</router-link></li>
                            <li><router-link to="kontakt">KONTAKT</router-link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default
    {

    }

</script>

<style>
* {
    box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
}

.container{
    width: 80vw;
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
}

.phone-nav{
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
.phone-nav {
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
    height: 200px;
    width: 190px;
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
  height: 30px;
  background: #ffffff;
  flex-basis: 100%;
  margin-top: 15px;
  color: #000;
  border-radius: 5px;
  overflow: hidden;
text-decoration: none;
border: 2px solid #e4bc9b;
}

.phone-nav-menu ul li a{
  display: flex;
  padding: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  color: #000;
  text-decoration: none;
  box-sizing: border-box;
}

.phone-nav-menu ul li a:hover{
    color: #A0917A;
}

.phone-nav-button:focus ~ .phone-nav-menu, .phone-nav-menu:hover {
  transform: translateX(-200px);
}
}


@media screen and (min-width: 601px) and (max-width: 686px){
    .container{
        width: 100%;
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
        margin-left: 15px;
    }
    .page-nav-list a{
        font-size: 12px;
    }
}

@media screen and (min-width: 687px) and (max-width: 769px){
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
        margin-left: 20px;
    }
    .page-nav-list a{
        font-size: 12px;
    }
}

@media screen and (min-width: 770px) and (max-width: 800px){
    .container{
        width: 90%;
    }
}

@media screen and (min-width: 800px) and (max-width: 850px){
    .container{
        width: 85%;
    }
}







</style>