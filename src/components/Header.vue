<template>
    <header class = "page-header">
        <div class="container">
            <router-link to="/">
                <a href="" class="page-logo">
                    <img class="logo" src="~@/assets/logo.png/">
                </a>
            </router-link>

            <!-- <v-menu offset-y>
                <v-btn flat slot="activator" color="black">
                    <v-icon left>&#8595;</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.router">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu> -->

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
            </div>
        </div>
    </header>
</template>

<script>
    export default
    {
    //     data() {
    //         return {
    //             drawer: false,
    //             links: [
    //                 {text: "Strona główna", router: '/'},
    //                 {text: "Okulista", router: '/'},
    //                 {text: "Diabetolog", router: '/'},
    //                 {text: "Kontakt", router: '/'},
    //             ]
    //         }
    //     }

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
    position:sticky;
}

.logo{
    width: 160px;
    height: 94px;
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
    color: #C7BA9F;
    margin-left: 10px;
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
    color: #A0917A;
}



@media screen and (min-width: 600px) and (max-width: 686px){
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