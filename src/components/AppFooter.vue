<template>
    <div class="container-footer">
        <div class="page-footer">
            <div class="page-footer-header">
                <p>ZAPRASZAMY</p>
            </div>
            <div class="page-footer-names">
                <div class="name">
                    <p><span>MAŁGORZATA KOWALCZYK</span><br>Specjalista Chorób Oczu</p>
                </div>
                <div class="name">
                    <p><span>MARIUSZ KOWALCZYK</span><br>Specjalista Chorób Wewnętrznych<br> i Diabetologii</p>
                </div>
            </div>
            <div class="page-footer-border"></div>
            <div class="page-footer-1">
                <div class="page-footer-logo">
                    <img class="logo-footer" width="191" height="24" alt="logo MMKowalczyk" src="~@/assets/logo_stopka.webp">
                </div>
                <div class="page-footer-nav">
                    <div class="page-footer-nav-2">
                        <div class="page-footer-nav-contact">
                            <span>Adres</span>
                            <p>Gabinety lekarskie</p>
                            <p>ul. Leszczyńskiego 25</p>
                            <p>20-069 Lublin</p>
                        </div>
                        <div class="page-footer-nav-contact">
                            <span>Kontakt</span>
                            <p>tel. 604 540 510</p>
                        </div>
                        <div class="page-footer-nav-menu">
                            <ul>
                                <li><router-link to="/">Strona główna</router-link></li>
                                <li><router-link to="okulista">Okulista</router-link></li>
                                <li><router-link to="diabetolog">Diabetolog</router-link></li>
                                <li><router-link to="kontakt">Kontakt</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style>

*{
    box-sizing: border-box;
}

.container-footer{
    width: 100%;
    height: 650px;
    margin: 0 auto;
    background-color: #FAF8F6;
}

.page-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 118px;
}

.page-footer-header{
    margin-top: 73px;
}

.page-footer-header p{
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #C7BA9F;
}

.page-footer-names{
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    width: 80vw;
}

.name span{
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #C7BA9F;
}

.name p{
    font-size: 16px;
    color: #C7BA9F;
}

.page-footer-border{
    width: 80vw;
    height: 1px;
    background-color: #C7BA9F;
    margin-top: 70px;
}

.page-footer-logo{
    margin-top: 64px;
}

.logo-footer{
    /* width: 191px;
    height: 24px; */
    aspect-ratio: attr(width) / attr(height);
}

.page-footer-nav{
    width: 80vw;
    margin-top: 40px;
}

.page-footer-nav-2{
    width: 60%;
    display: flex;
    justify-content: space-between;
}

.page-footer-nav-contact span{
    font-size: 14px;
    font-weight: 600;
    color: #C7BA9F;
    margin-bottom: 6px;
}

.page-footer-nav-contact p{
    font-size: 12px;
    font-weight: 400;
    color: #C7BA9F;
    margin-top: 7px;
    margin-bottom: 7px;
}

.page-footer-nav-menu li{
    list-style-type: none;
    margin-bottom: 6px;
}

.page-footer-nav-menu a{
    text-decoration: none;
    color: #C7BA9F;
    font-weight: 600;
    font-size: 12px;
}

@media screen and (max-width: 320px){
    .container-footer{
        height: 500px;
    }
    .page-footer-names{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        width: 80vw;
    }
    .name span{
        font-size: 16px;
    }
    .name p{
        font-size: 12px;
    }
    .page-footer-header p{
        font-size: 14px;
    }
    .page-footer-header{
        margin-top: 20px;
    }
    .page-footer-border{
        margin-top: 40px;
    }
    .page-footer-nav{
        width: 90vw;
    }
    .page-footer-nav-2{
        width: 100%;
    }
    .page-footer-logo{
        margin-top: 54px;
    }
    .page-footer-nav-contact span{
    font-size: 12px;
    }

    .page-footer-nav-contact p{
        font-size: 10px;
    }
    .page-footer-nav-menu a{
        font-size: 10px;
    }
    .page-footer-nav-menu ul{
    padding: 0 0 0 20px;
    }
}

@media screen and (min-width: 321px) and (max-width: 380px){
    body{
        overflow-x: hidden;
    }
    .container-footer{
        height: 520px;
    }
    .page-footer-names{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        width: 85vw;
    }
    .name span{
        font-size: 18px;
    }
    .name p{
        font-size: 14px;
    }
    .page-footer-header p{
        font-size: 14px;
    }
    .page-footer-header{
        margin-top: 20px;
    }
    .page-footer-border{
        width: 85vw;

    }
    .page-footer-border{
        margin-top: 40px;
    }
    .page-footer-nav{
        width: 85vw;
    }
    .page-footer-nav-2{
        width: 100%;
    }
    .page-footer-logo{
        margin-top: 54px;
    }
    .page-footer-nav-contact span{
    font-size: 12px;
    }

    .page-footer-nav-contact p{
        font-size: 10px;
    }
    .page-footer-nav-menu a{
        font-size: 10px;
    }
    .page-footer-nav-menu ul{
    padding: 0 0 0 20px;
    }
}

@media screen and (min-width: 381px) and (max-width: 480px){
    .container-footer{
        height: 560px;
    }
    .page-footer-names{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        width: 85vw;
    }
    .name span{
        font-size: 20px;
    }
    .name p{
        font-size: 16px;
    }
    .page-footer-header p{
        font-size: 16px;
    }
    .page-footer-header{
        margin-top: 20px;
    }
    .page-footer-border{
        width: 85vw;

    }
    .page-footer-border{
        margin-top: 40px;
    }
    .page-footer-nav{
        width: 85vw;
    }
    .page-footer-nav-2{
        width: 100%;
    }
    .page-footer-logo{
        margin-top: 54px;
    }
    .page-footer-nav-menu ul{
    padding: 0 0 0 20px;
    }
}


@media screen and (min-width: 481px) and (max-width: 600px){
    .container-footer{
        height: 590px;
    }
    .page-footer-names{
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        width: 80vw;
    }
    .page-footer-header{
        margin-top: 20px;
    }
    .page-footer-border{
        margin-top: 40px;
    }
    .page-footer-nav-2{
        width: 100%;
    }
    .page-footer-logo{
        margin-top: 54px;
    }
    .page-footer-nav-menu ul{
    padding: 0 0 0 20px;
    }
}

@media screen and (min-width: 601px) and (max-width: 769px){
    .container-footer{
        height: 600px;
    }
    .page-footer-names{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        width: 80vw;
    }
    .page-footer-header{
        margin-top: 30px;
    }
    .page-footer-border{
        margin-top: 40px;
    }
    .page-footer-nav-2{
        width: 75%;
    }
    .page-footer-logo{
        margin-top: 54px;
    }
}

@media screen and (min-width: 770px) and (max-width: 850px){
    .page-footer-names{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        width: 80vw;
    }
    .container-footer{
        height: 690px;
    }
}


</style>