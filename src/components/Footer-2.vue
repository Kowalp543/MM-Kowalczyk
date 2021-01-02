<template>
    <div class="container-footer-2">
        <div class="page-footer-2">
            <div class="page-footer-2-border"></div>
            <div class="page-footer-2-1">
                <div class="page-footer-2-logo">
                    <img class="logo-footer-2" src="~@/assets/logo_stopka.png/">
                </div>
                <div class="page-footer-2-nav">
                    <div class="page-footer-2-nav-2">
                        <div class="page-footer-2-nav-contact">
                            <span>Adres</span>
                            <p>Gabinety lekarskie</p>
                            <p>ul. Leszczyńskiego 25</p>
                            <p>20-069 Lublin</p>
                        </div>
                        <div class="page-footer-2-nav-contact">
                            <span>Kontakt</span>
                            <p>tel. 604 540 510</p>
                        </div>
                        <div class="page-footer-2-nav-menu">
                            <ul>
                                <li><a href="">Strona główna</a></li>
                                <li><a href="">Okulista</a></li>
                                <li><a href="">Diabetolog</a></li>
                                <li><a href="">Kontakt</a></li>
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

.container-footer-2{
    width: 100vw;
    height: 372px;
    margin: 0 auto;
    background-color: #FAF8F6;
}

.page-footer-2{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 118px;
}

.page-footer-2-border{
    width: 80vw;
    height: 1px;
    background-color: #C7BA9F;
    margin-top: 32px;
}

.page-footer-2-logo{
    margin-top: 64px;
}

.logo-footer-2{
    width: 191px;
}

.page-footer-2-nav{
    width: 80vw;
    margin-top: 40px;
}

.page-footer-2-nav-2{
    width: 60%;
    display: flex;
    justify-content: space-between;
}

.page-footer-2-nav-contact span{
    font-size: 14px;
    font-weight: 600;
    color: #C7BA9F;
    margin-bottom: 6px;
}

.page-footer-2-nav-contact p{
    font-size: 12px;
    font-weight: 400;
    color: #C7BA9F;
    margin-top: 7px;
    margin-bottom: 7px;
}

.page-footer-2-nav-menu li{
    list-style-type: none;
}

.page-footer-2-nav-menu a{
    text-decoration: none;
    color: #C7BA9F;
    font-weight: 600;
    font-size: 12px;
}


</style>