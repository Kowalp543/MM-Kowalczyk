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
            <div class="page-footer-2">
                <div class="page-footer-logo">
                    <img class="logo-footer" src="~@/assets/logo_stopka.png/">
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

.container-footer{
    width: 100vw;
    height: 670px;
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
    width: 191px;
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
}

.page-footer-nav-menu a{
    text-decoration: none;
    color: #C7BA9F;
    font-weight: 600;
    font-size: 12px;
}


</style>