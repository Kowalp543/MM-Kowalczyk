<template>
    <div class="container-information-O">
        <div class="page-information-O">
            <div class="page-information-O-header">
                <p>OKULISTA</p>
            </div>
            <div class="page-information-O-border"></div>
            <div class="page-information-O-label">
                <div class="page-information-O-label-content">
                    <div class="page-information-O-label-info">
                        <div class="info-2"><span>Lek. med. Małgorzata Kowalczyk</span></div>
                        <p><span>Specjalista Chorób Oczu</span></p>
                        <p>Starszy asystent Kliniki Okulistyki</p>
                        <p>Ogólnej w Lublinie</p>
                    </div>
                    <div class="page-information-O-label-border-between"></div>
                    <div class="page-information-O-label-info-2">
                        <div class="page-information-O-label-info">
                            <div class="phone-2"><span><font-awesome-icon icon="phone" pull="left" :transform="{ rotate: 100 }"/></span>REJESTRACJA</div>
                            <p>tel. 604 540 510</p>
                        </div>
                        <div class="page-information-O-label-border-between-2"></div>
                        <div class="page-information-O-label-info">
                            <div class="timetable"><span><font-awesome-icon :icon="['far', 'clock']" /></span>GODZINY PRACY</div>
                            <p>Pn-Pt: 16:00-20:00</p>
                            <p>Sob: 12:00-16:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-information-O-info">
                <h2>CZŁONKOSTWO</h2>
                <p>Polskie Towarzystwo Okulistyczne, Sekcja Dziecięca Polskiego Towarzystwa<br>
                Okulistycznego, World Society of Paediatric Ophthalmology and Strabismus</p>
                <h2>ZAINTERESOWANIA</h2>
                <p>okulistyka dziecięca z uwzględnieniem chorób rzadkich, operacje zeza u dzieci,<br>
                operacje zeza u dorosłych ze szwami regulowanymi</p>
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

.container-information-O{
    width: 80%;
    margin: 0 auto;
}

.page-information-O{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.page-information-O-header{
    margin-top: 25px;
}

.page-information-O-header p{
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 0px;
}

.page-information-O-border{
    background-color: #C7BA9F;
    height: 8px;
    width: 84px;
    margin-top: 10px;
}

.page-information-O-label{
    height: 140px;
    width: 100%;
    background-color: #C7BA9F;
    margin-top: 36px;
    -webkit-box-shadow: 5px 5px 20px -15px #000000;
    box-shadow: 5px 5px 20px -15px #000000;
}

.page-information-O-label-content{
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.page-information-O-label-info-2{
    display: flex;
    justify-content: space-around;
    text-align: center;

}

.page-information-O-label-info{
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
}

.info-2{
    margin-bottom: 4px;
}

.info-2 span{
    font-size: 20px;
    font-weight: 600;
}

.page-information-O-label-info p span{
    font-size: 18px;
    font-weight: 100;
}

.page-information-O-label-info p{
    font-size: 16px;
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 0px;
}

.phone-2{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 15px;
    position: relative;
    right: 26px;
}

.phone-2 span{
    font-size: 20px;
    position: relative;
    top: 2px;
    right: 5px;
}

.timetable{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    right: 23px;
    margin-bottom: 10px;

}

.timetable span{
    font-size: 22px;
    position: relative;
    right: 10px;
}

.page-information-O-label-border-between{
    border-right: 3px dashed #fff;
    margin-top: 30px;
    margin-bottom: 30px;
}

.page-information-O-label-border-between-2{
    margin-right: 30px;
}

.page-information-O-info{
    margin-top: 87px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.page-information-O-info h2{
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 10px;
    margin-top: 5px;
}

.page-information-O-info p{
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 30px;
}

@media screen and (max-width: 480px){
    .page-information-O{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-information-O{
        width: 90%;
    }
    .page-information-O-header p{
        font-size: 30px;
    }
    .page-information-O-border{
        height: 6px;
    }
    .page-information-O-label{
        height: 370px;
        width: 90%;
    }
    .page-information-O-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-O-label-info-2{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .page-information-O-label-border-between-2{
        border-top: 3px dashed #fff;
        margin-top: 25px;
        margin-right: 79px;
        margin-left: 79px;
    }
    .page-information-O-label-info{
        align-items: center;
    }
    .info-2 span{
        font-size: 18px;
    }
    .page-information-O-label-info p span{
        font-size: 16px;
    }
    .page-information-O-label-info p{
        font-size: 14px;
    }
    .phone-2{
        font-size: 16px;
        margin-bottom: 10px;
        position: relative;
        right: 0px;
    }
    .phone-2 span{
        font-size: 16px;
        position: relative;
        top: 0px;
        right: 0px;
    }
    .timetable{
        font-size: 16px;
        position: relative;
        right: 0px;
        margin-bottom: 10px;

    }
    .timetable span{
        font-size: 18px;
        position: relative;
        right: 5px;
    }
    .page-information-O-label-border-between{
        border-top: 3px dashed #fff;
        margin-top: 25px;
        margin-bottom: 0px;
    }
    .page-information-O-info{
        margin-top: 67px;
    }
    .page-information-O-info h2{
        font-size: 16px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .page-information-O-info p{
        font-size: 14px;
    }
}

@media screen and (min-width: 383px) and (max-width: 480px){
    .page-information-O-label{
        height: 350px;
    }
}

@media screen and (min-width: 481px) and (max-width: 600px){
   .page-information-O{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-information-O{
        width: 90%;
    }
    .page-information-O-header p{
        font-size: 34px;
    }
    .page-information-O-border{
        height: 8px;
    }
    .page-information-O-label{
        height: 230px;
        width: 90%;
    }
    .page-information-O-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-O-label-info-2{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .page-information-O-label-border-between-2{
        border-right: 3px dashed #fff;
        margin-top: 30px;
        margin-bottom: 5px;
        margin-right: 30px;
        margin-left: 30px;
    }
    .page-information-O-label-info{
        align-items: center;
    }
    .info-2 span{
        font-size: 18px;
    }
    .page-information-O-label-info p span{
        font-size: 16px;
    }
    .page-information-O-label-info p{
        font-size: 14px;
    }
    .phone-2{
        font-size: 16px;
        margin-bottom: 10px;
        position: relative;
        right: 0px;
    }
    .phone-2 span{
        font-size: 16px;
        position: relative;
        top: 0px;
        right: 0px;
    }
    .timetable{
        font-size: 16px;
        position: relative;
        right: 0px;
        margin-bottom: 10px;

    }
    .timetable span{
        font-size: 18px;
        position: relative;
        right: 5px;
    }
    .page-information-O-label-border-between{
        display: none;
    }
    .page-information-O-info{
        margin-top: 67px;
    }
    .page-information-O-info h2{
        font-size: 16px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .page-information-O-info p{
        font-size: 14px;
    }
}

@media screen and (min-width: 601px) and (max-width: 1024px){
   .page-information-O{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .container-information-O{
        width: 80%;
    }
    .page-information-O-header p{
        font-size: 34px;
    }
    .page-information-O-border{
        height: 8px;
    }
    .page-information-O-label{
        height: 240px;
        width: 90%;
    }
    .page-information-O-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-information-O-label-info-2{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .page-information-O-label-border-between-2{
        border-right: 3px dashed #fff;
        margin-top: 30px;
        margin-bottom: 5px;
        margin-right: 30px;
        margin-left: 30px;
    }
    .page-information-O-label-info{
        align-items: center;
    }
    .info-2 span{
        font-size: 20px;
    }
    .page-information-O-label-info p span{
        font-size: 18px;
    }
    .page-information-O-label-info p{
        font-size: 16px;
    }
    .phone-2{
        font-size: 18px;
        margin-bottom: 10px;
        position: relative;
        right: 0px;
    }
    .phone-2 span{
        font-size: 20px;
        position: relative;
        top: 0px;
        right: 0px;
    }
    .timetable{
        font-size: 18px;
        position: relative;
        right: 0px;
        margin-bottom: 10px;

    }
    .timetable span{
        font-size: 20px;
        position: relative;
        right: 5px;
    }
    .page-information-O-label-border-between{
        display: none;
    }
    .page-information-O-info{
        margin-top: 67px;
    }
    .page-information-O-info h2{
        font-size: 18px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .page-information-O-info p{
        font-size: 16px;
    }
}

@media screen and (min-width: 801px) and (max-width: 900px){
    .container-information-O{
        width: 70%;
    }
}

@media screen and (min-width: 901px) and (max-width: 1024px){
    .container-information-O{
        width: 80%;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1150px){
    .page-information-O-label-border-between-2{
        margin-right: 10px;
    }
    .timetable{
        position: relative;
        right: 15px;
    }
}

@media screen and (min-width: 1151px) and (max-width: 1280px){
    .page-information-O-label-border-between-2{
        margin-right: 30px;
    }
}

@media screen and (min-width: 1281px) and (max-width: 1365px){
    .page-information-O-label-border-between-2{
        margin-right: 50px;
    }
}

@media screen and (min-width: 1366px) and (max-width: 1440px){
    .page-information-O-label-border-between-2{
        margin-right: 60px;
    }
}
@media screen and (min-width: 1441px){
    .page-information-O-label-border-between-2{
        margin-right: 80px;
    }
}

</style>