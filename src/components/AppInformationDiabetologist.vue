<template>
    <div class="container-information-D">
        <div class="page-information-D">
            <div class="header-box">
                <div class="page-information-D-header">
                    <p>DIABETOLOG</p>
                </div>
                <div class="page-information-D-border"></div>
            </div>
            <div class="label-box">
                <div class="page-information-D-label">
                    <div class="page-information-D-label-content">
                        <div class="page-information-D-label-info">
                            <div class="info-3"><span>Dr n.med. Mariusz Kowalczyk</span></div>
                            <p><span>Specjalista Chorób Wewnętrznych <br> i Diabetologii</span></p>
                            <p>Wieloletni asystent, wykładowca Kliniki<br>
                                Endokrynologii, Diabetologii<br>
                                i Chorób Metabolicznych Uniwersytetu<br>
                                Medycznego w Lublinie, starszy<br>
                                asystent, Z-ca Lekarza kierującego<br>
                                Oddziałem Endokrynologii w SPSK 4<br>
                                w Lublinie</p>
                        </div>
                        <div class="page-information-D-label-border-between"></div>
                        <div class="page-information-D-label-info-2">
                            <div class="page-information-D-label-info">
                                <div class="phone-3"><span><font-awesome-icon icon="phone" pull="left" :transform="{ rotate: 100 }"/></span>REJESTRACJA</div>
                                <p>tel. 604 421 820</p>
                            </div>
                            <div class="page-information-D-label-border-between-2"></div>
                            <div class="page-information-D-label-info">
                                <div class="timetable-2"><span><font-awesome-icon :icon="['far', 'clock']" /></span>GODZINY PRACY</div>
                                <p>Czw: 16:00-20:00</p>
                                <p>Sob: telefoniczne <br>uzgdnienie wizyty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-information-D-box">
                <div class="page-information-D-info">
                    <h2>CZŁONKOSTWO</h2>
                    <p>Wieloletni członek Polskiego Towarzystwa Diabetologicznego<br></p>
                    <h2>ZAKRES DZIAŁALNOŚCI</h2>
                    <p>W dziedzinie diabetologii  zajmuje się całokształtem problematyki <br>
                    cukrzycy typu 1 w tym terapią osobistą pompą insulinową a także <br>
                    cukrzycy typu 2 skojarzonej z otyłością z zastosowaniem innowacyjnych <br>
                    metod farmakoterapii, oraz diagnostyki i leczenia cukrzycy ciążowej.</p>
                    <h2>ZAINTERESOWANIA KLINICZNE</h2>
                    <ul>
                        <li>Nowoczesna terapia cukrzycy typu 1, w tym za pomocą osobistych pomp insulinowych.</li>
                        <li>Cukrzyca typu 2 – otyłość, insulinooporność -  innowacyjne metody farmakoterapii.</li>
                        <li>Patogeneza, diagnostyka i leczenie cukrzycy ciążowej i cukrzycy typu 1 w ciąży, w tym z wykorzystaniem osobistych pomp insulinowych, udział w programie leczenia kobiet ciężarnych z typem 1 cukrzycy osobistymi pompami insulinowymi we współpracy z WOŚP (Ośrodek uczestniczący w programie - SPSK4 Klinika Endokrynologii).</li>
                        <li>W dziedzinie  chorób wewnętrznych szczególne zainteresowanie diagnostyką i leczeniem chorób endokrynnych, w tym zaburzeń tyreologicznych.</li>
                    </ul>
                </div>
                <div>
                    <img class="page-information-D-photo" alt="Małgorzata Kowalczyk" src="~@/assets/D2.jpg/" >
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

.container-information-D{
    width: 80%;
    margin: 0 auto;
}

/* .page-information-D{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
} */

.header-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.label-box{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.page-information-D-header{
    margin-top: 25px;
}

.page-information-D-header p{
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 0px;
}

.page-information-D-border{
    background-color: #e4bc9b;
    height: 8px;
    width: 84px;
    margin-top: 10px;
}

.page-information-D-label{
    height: 250px;
    width: 100%;
    background-color: #e4bc9b;
    margin-top: 36px;
    -webkit-box-shadow: 0px 5px 20px -9px rgba(0,0,0,1);
    -moz-box-shadow: 0px 5px 20px -9px rgba(0,0,0,1);
    box-shadow: 0px 5px 20px -9px rgba(0,0,0,1);
    border-radius: 10px;
}

.page-information-D-label-content{
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.page-information-D-label-info-2{
    display: flex;
    justify-content: space-around;
    text-align: center;

}

.page-information-D-label-info{
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    text-align: start;
}

.info-3{
    margin-bottom: 4px;
}

.info-3 span{
    font-size: 22px;
    font-weight: 600;
}

.page-information-D-label-info p span{
    font-size: 18px;
    font-weight: 100;
}

.page-information-D-label-info p{
    font-size: 16px;
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 0px;
}

.phone-3{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 15px;
    position: relative;
    right: 26px;
}

.phone-3 span{
    font-size: 20px;
    position: relative;
    top: 2px;
    right: 5px;
}

.timetable-2{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    right: 23px;
    margin-bottom: 10px;

}

.timetable-2 span{
    font-size: 22px;
    position: relative;
    right: 10px;
}

.page-information-D-label-border-between{
    border-right: 3px dashed #fff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.page-information-D-label-border-between-2{
    margin-right: 30px;
}

.page-information-D-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.page-information-D-info{
    margin-top: 87px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.page-information-D-photo{
    height: 243px;
    margin-left: 15px;
    margin-top: 0px;
    border: 2px solid #C7BA9F;
    border-radius: 3px;
    -webkit-box-shadow: 0px 5px 18px -9px rgba(0,0,0,1);
    -moz-box-shadow: 0px 5px 18px -9px rgba(0,0,0,1);
    box-shadow: 0px 5px 18px -9px rgba(0,0,0,1);
}

.page-information-D-info h2{
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 10px;
    margin-top: 5px;
}

.page-information-D-info p{
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 30px;
}

.page-information-D-info li{
    list-style-type: none;
    margin-bottom: 10px;
    list-style-type: disc;
}

@media screen and (max-width: 400px){
    body{
        overflow-x: hidden;
    }
    .header-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .label-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-information-D{
        width: 90%;
    }
    .page-information-D-header p{
        font-size: 30px;
    }
    .page-information-D-border{
        height: 6px;
    }
    .page-information-D-label{
        height: 430px;
        width: 90%;
    }
    .page-information-D-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-D-label-info-2{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .page-information-D-label-border-between-2{
        border-top: 3px dashed #fff;
        margin-top: 25px;
        margin-right: 79px;
        margin-left: 79px;
    }
    .page-information-D-label-info{
        align-items: center;
    }
    .info-3 span{
        font-size: 18px;
    }
    .page-information-D-label-info p span{
        font-size: 14px;
    }
    .page-information-D-label-info p{
        font-size: 12px;
    }
    .phone-3{
        font-size: 14px;
        margin-bottom: 10px;
        position: relative;
        right: 0px;
    }
    .phone-3 span{
        font-size: 16px;
        position: relative;
        top: 0px;
        right: 0px;
    }
    .timetable-2{
        font-size: 14px;
        position: relative;
        right: 0px;
        margin-bottom: 10px;

    }
    .timetable-2 span{
        font-size: 18px;
        position: relative;
        right: 5px;
    }
    .page-information-D-label-border-between{
        border-top: 3px dashed #fff;
        margin-top: 25px;
        margin-bottom: 0px;
    }
    .page-information-D-info{
        margin-top: 67px;
    }
    .page-information-D-info h2{
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .page-information-D-info p{
        font-size: 12px;
    }
    .page-information-D-info li{
        font-size: 12px;
    }
}

@media screen and (max-width: 360px){
    .info-3 span{
        font-size: 14px;
    }
    .page-information-D-label-info p span{
        font-size: 12px;
    }
    .page-information-D-label-info p{
        font-size: 11px;
    }
    .page-information-D-label{
        height: 405px;
    }
    .page-information-D-info h2{
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: 5px;
    }
    .page-information-D-info p{
        font-size: 12px;
    }
    .page-information-D-info li{
        font-size: 12px;
    }
}

@media screen and (min-width: 401px) and (max-width: 504px){
    body{
        overflow-x: hidden;
    }
    .header-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .label-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-information-D{
        width: 90%;
    }
    .page-information-D-header p{
        font-size: 30px;
    }
    .page-information-D-border{
        height: 6px;
    }
    .page-information-D-label{
        height: 460px;
        width: 90%;
    }
    .page-information-D-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-D-label-info-2{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .page-information-D-label-border-between-2{
        border-top: 3px dashed #fff;
        margin-top: 25px;
        margin-right: 79px;
        margin-left: 79px;
    }
    .page-information-D-label-info{
        align-items: center;
    }
    .info-3 span{
        font-size: 20px;
    }
    .page-information-D-label-info p span{
        font-size: 16px;
    }
    .page-information-D-label-info p{
        font-size: 14px;
    }
    .phone-3{
        font-size: 16px;
        margin-bottom: 10px;
        position: relative;
        right: 0px;
    }
    .phone-3 span{
        font-size: 16px;
        position: relative;
        top: 0px;
        right: 0px;
    }
    .timetable-2{
        font-size: 16px;
        position: relative;
        right: 0px;
        margin-bottom: 10px;

    }
    .timetable-2 span{
        font-size: 18px;
        position: relative;
        right: 5px;
    }
    .page-information-D-label-border-between{
        border-top: 3px dashed #fff;
        margin-top: 25px;
        margin-bottom: 0px;
    }
    .page-information-D-info{
        margin-top: 67px;
    }
    .page-information-D-info h2{
        font-size: 16px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .page-information-D-info p{
        font-size: 14px;
    }
    .page-information-D-info li{
        font-size: 14px;
    }
}

@media screen and (min-width: 505px) and (max-width: 600px){
    .header-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .label-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-information-D{
        width: 90%;
    }
    .page-information-D-header p{
        font-size: 34px;
    }
    .page-information-D-border{
        height: 8px;
    }
    .page-information-D-label{
        height: 335px;
        width: 90%;
    }
    .page-information-D-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-D-label-info-2{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .page-information-D-label-border-between-2{
        border-right: 3px dashed #fff;
        margin-top: 30px;
        margin-bottom: 5px;
        margin-right: 20px;
        margin-left: 20px;
    }
    .page-information-D-label-info{
        align-items: center;
    }
    .info-3 span{
        font-size: 20px;
    }
    .page-information-D-label-info p span{
        font-size: 16px;
    }
    .page-information-D-label-info p{
        font-size: 14px;
    }
    .phone-3{
        font-size: 16px;
        margin-bottom: 10px;
        position: relative;
        right: 0px;
    }
    .phone-3 span{
        font-size: 16px;
        position: relative;
        top: 0px;
        right: 0px;
    }
    .timetable-2{
        font-size: 16px;
        position: relative;
        right: 0px;
        margin-bottom: 10px;

    }
    .timetable-2 span{
        font-size: 18px;
        position: relative;
        right: 5px;
    }
    .page-information-D-label-border-between{
        display: none;
    }
    .page-information-D-info{
        margin-top: 67px;
    }
    .page-information-D-info h2{
        font-size: 16px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .page-information-D-info p{
        font-size: 14px;
    }
    .page-information-D-info li{
        font-size: 14px;
    }
}

@media screen and (min-width: 601px) and (max-width: 1100px){
.header-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.label-box{
    display: flex;
    flex-direction: column;
    align-items: center;
}
    .container-information-D{
        width: 80%;
    }
    .page-information-D-header p{
        font-size: 34px;
    }
    .page-information-D-header{
        display: flex;
        align-items: flex-start;
    }
    .page-information-D-border{
        height: 8px;
    }
    .page-information-D-label{
        height: 370px;
        width: 80%;
    }
    .page-information-D-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-D-label-info-2{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .page-information-D-label-border-between-2{
        border-right: 3px dashed #fff;
        margin-top: 30px;
        margin-bottom: 5px;
        margin-right: 30px;
        margin-left: 30px;
    }
    .page-information-D-label-info{
        align-items: center;
    }
    .info-3 span{
        font-size: 22px;
    }
    .page-information-D-label-info p span{
        font-size: 18px;
    }
    .page-information-D-label-info p{
        font-size: 16px;
    }
    .phone-3{
        font-size: 18px;
        margin-bottom: 10px;
        position: relative;
        right: 0px;
    }
    .phone-3 span{
        font-size: 20px;
        position: relative;
        top: 0px;
        right: 0px;
    }
    .timetable-2{
        font-size: 18px;
        position: relative;
        right: 0px;
        margin-bottom: 10px;

    }
    .timetable-2 span{
        font-size: 20px;
        position: relative;
        right: 5px;
    }
    .page-information-D-label-border-between{
        display: none;
    }
    .page-information-D-info{
        margin-top: 67px;
    }
    .page-information-D-info h2{
        font-size: 18px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .page-information-D-info p{
        font-size: 16px;
    }
}

@media screen and (min-width: 600px) and (max-width: 700px){
    .page-information-D-label{
        width: 90%;
    }
}

@media screen and (min-width: 801px) and (max-width: 900px){
    .container-information-D{
        width: 70%;
    }
}

@media screen and (max-width: 1100px){
    .page-information-D-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-D-photo{
        height: 250px;
        margin-left: 0px;
        margin-top: 50px;
    }
}

@media screen and (min-width: 1151px) and (max-width: 1280px){
    .page-information-D-label-border-between-2{
        margin-right: 30px;
    }
}

@media screen and (min-width: 1281px) and (max-width: 1365px){
    .page-information-D-label-border-between-2{
        margin-right: 50px;
    }
}

@media screen and (min-width: 1366px) and (max-width: 1440px){
    .page-information-D-label-border-between-2{
        margin-right: 60px;
    }
}
@media screen and (min-width: 1441px){
    .page-information-D-label-border-between-2{
        margin-right: 80px;
    }
}


</style>