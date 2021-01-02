<template>
    <div class="container-information-D">
        <div class="page-information-D">
            <div class="page-information-D-header">
                <p>DIABETOLOG</p>
            </div>
            <div class="page-information-D-border"></div>
            <div class="page-information-D-label">
                <div class="page-information-D-label-content">
                    <div class="page-information-D-label-info">
                        <div class="info-3"><span>Dr n.med. Mariusz Kowalczyk</span></div>
                        <p><span>Specjalista Chorób Wewnętrznych i Diabetologii</span></p>
                        <p>Wieloletni asystent, wykładowca Kliniki<br>
                            Endokrynologii Uniwersytety<br>
                            Medycznego w Lublinie, starszy<br>
                            asystent, Z-ca Lekarza kierującego<br>
                            Oddziałem Endokrynologii w SPSK 4<br>
                            w Lublinie, wieloletni członek Polskiego<br>
                            Towarzystwa Diabetologicznego</p>
                    </div>
                    <div class="page-information-D-label-border-between"></div>
                    <div class="page-information-D-label-info">
                        <div class="phone-3"><span><font-awesome-icon icon="phone" pull="left" :transform="{ rotate: 100 }"/></span>REJESTRACJA</div>
                        <p>tel. 000 000 000</p>
                    </div>
                    <div class="page-information-D-label-border-between"></div>
                    <div class="page-information-D-label-info">
                        <div class="timetable-2"><span><font-awesome-icon :icon="['far', 'clock']" /></span>GODZINY PRACY</div>
                        <p>Czw: 16:00-20:00</p>
                        <p>Sob: termin wizyty możliwy<br>
                            po telefonicznym uzgodnieniu</p>
                    </div>
                </div>
            </div>
            <div class="page-information-D-info">
                <h2>CZŁONKOSTWO</h2>
                <!-- <p>Polskie Towarzystwo Okulistyczne, Sekcja Dziecięca Polskiego Towarzystwa<br>
                Okulistycznego, World Society of Paediatric Ophthalmology and Strabismus</p> -->
                <h2>ZAINTERESOWANIA</h2>
                <!-- <p>okulistyka dziecięca z uwzględnieniem chorób rzadkich, operacje zeza u dzieci,<br>
                operacje zeza u dorosłych ze szwami regulowanymi</p> -->
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
    width: 80vw;
    margin: 0 auto;
}

.page-information-D{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    background-color: #C7BA9F;
    height: 8px;
    width: 84px;
    margin-top: 10px;
}

.page-information-D-label{
    height: 306px;
    width: 80vw;
    background-color: #C7BA9F;
    margin-top: 36px;
    -webkit-box-shadow: 5px 5px 20px -15px #000000;
    box-shadow: 5px 5px 20px -15px #000000;
}

.page-information-D-label-content{
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
    font-size: 18px;
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
    top: 5px;
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
    margin-top: 35px;
    margin-bottom: 35px;
}

.page-information-D-info{
    margin-top: 87px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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



</style>