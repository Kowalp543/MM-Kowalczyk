<template>
    <div class="container-priceList">
        <div class="page-priceList">
            <div class="page-priceList-header">
                <p>CENNIK</p>
            </div>
            <div class="page-priceList-border"></div>
            <div class="page-priceList-boxList">
                <div class="doctor-box">
                    <div class="doctor">
                        <p>OKULISTA</p>
                    </div>
                    <div class="doctor-border"></div>
                </div>
                <div class="priceList-box">
                    <div class="priceList-name">
                        <p>Konsultacja okulistyczna u dzieci i dorosłych.</p>
                    </div>
                    <div class="priceList-price">
                        <p>250 zł</p>
                    </div>
                </div>
                <!-- <div class="priceList-border"></div>
                <div class="priceList-box">
                    <div class="priceList-name">
                        <p>Konsultacja okulistyczna u dzieci (druga) w celu zbadania refrakcji po atropinie lub do doboru okularów.</p>
                    </div>
                    <div class="priceList-price">
                        <p>150 zł</p>
                    </div>
                </div> -->
                <div class="priceList-border"></div>
                <div class="priceList-box">
                    <div class="priceList-name">
                        <p>Konsultacja okulistyczna u dzieci i dorosłych w dni wolne i święta.</p>
                    </div>
                    <div class="priceList-price">
                        <p>250 zł</p>
                    </div>
                </div>
                <div class="priceList-border"></div>
                 <div class="doctor-box-2">
                    <div class="doctor">
                        <p>DIABETOLOG</p>
                    </div>
                    <div class="doctor-border"></div>
                </div>
                <div class="priceList-box">
                    <div class="priceList-name">
                        <p>Konsultacja internistyczna, diabetologiczna, endokrynologiczna.</p>
                    </div>
                    <div class="priceList-price">
                        <p>250 zł</p>
                    </div>
                </div>
                <div class="priceList-border"></div>
                <div class="priceList-box">
                    <div class="priceList-name">
                        <p>Konsultacja internistyczna, diabetologiczna, endokrynologiczna w dni wolne i święta.</p>
                    </div>
                    <div class="priceList-price">
                        <p>250 zł</p>
                    </div>
                </div>
                <div class="priceList-border"></div>
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

.container-priceList{
    width: 80%;
    margin: 0 auto;
}

.page-priceList{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.page-priceList-header{
    margin-top: 25px;
}

.page-priceList-header p{
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 0px;
}

.page-priceList-border{
    height: 8px;
    width: 84px;
    background-color: #e4bc9b;
    margin-top: 10px;
}

.doctor-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18px;
}

.doctor-box-2{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    margin-bottom: 18px;
}

.doctor p{
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 0px;
}

.doctor-border{
    height: 5px;
    width: 64px;
    background-color: #e4bc9b;
    margin-top: 4px;
}

.priceList-border{
    height: 2px;
    width: 100%;
    background-color: #e4bc9b;
}

.page-priceList-boxList{
    margin-top: 36px;
    margin-bottom: 36px;
    width: 100%;
}

.priceList-box{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.priceList-name p{
    margin-top: 24px;
    margin-bottom: 4px;
}

.priceList-price p{
    margin-top: 24px;
    margin-bottom: 4px;
    margin-left: 64px;
    white-space:nowrap;
}


@media screen and (max-width: 480px){
    body{
        overflow-x: hidden;
    }

    .page-priceList-border{
        height: 6px;
    }

    .page-priceList-header p{
        font-size: 26px;
    }

    .doctor p{
        font-size: 18px;
    }

    .doctor-border{
        height: 4px;

    }

    .priceList-name p{
        font-size: 12px;
    }

    .priceList-price p{
        font-size: 12px;
        margin-left: 36px;
    }
}

@media screen and (min-width: 481px) and (max-width: 701px){
    .page-priceList-header p{
        font-size: 32px;
    }

    .doctor p{
        font-size: 20px;
    }

    .priceList-name p{
        font-size: 14px;
    }

    .priceList-price p{
        font-size: 14px;
        margin-left: 54px;
    }
}

</style>

