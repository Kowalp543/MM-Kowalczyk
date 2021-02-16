<template>
    <div class="container-information-C">
        <div class="page-information-C">
            <div class="page-information-C-header">
                <p>KONTAKT</p>
            </div>
            <div class="page-information-C-border"></div>
            <div class="page-information-C-label">
                <div class="page-information-C-label-content">
                    <div class="label-element">
                        <div class="location-2"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></div>
                        <h2>ADRES</h2>
                        <p>Gabinety Lekarskie</p>
                        <p>ul. Leszczyńskiego 25</p>
                        <p>20-069 Lublin</p>
                    </div>
                    <div class="label-element">
                        <div class="clock-2"><font-awesome-icon :icon="['far', 'clock']" /></div>
                        <h2>GODZINY PRACY</h2>
                        <p>Pn-Pt: 16:00-20:00</p>
                        <p>Sob: 12:00-16:00</p>
                    </div>
                    <div class="label-element">
                        <div class="phone-4"><font-awesome-icon icon="phone" :transform="{ rotate: 100 }"/></div>
                        <h2>KONTAKT</h2>
                        <p>tel. 000 000 000</p>
                    </div>
                </div>
            </div>
            <div class="page-information-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.7345748455587!2d22.54161747866655!3d51.251505817199394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722570171deb341%3A0x20e8df717b8e2017!2sStanis%C5%82awa%20Leszczy%C5%84skiego%2025%2C%2020-068%20Lublin!5e0!3m2!1spl!2spl!4v1610194548186!5m2!1spl!2spl" width="1080" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style>

.container-information-C{
    width: 80vw;
    margin: 0 auto;
}

.page-information-C{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.page-information-C-header{
    margin-top: 25px;
}

.page-information-C-header p{
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 0px;
}

.page-information-C-border{
    height: 8px;
    width: 84px;
    background-color: #C7BA9F;
    margin-top: 10px;
}

.page-information-C-label{
    width: 80vw;
    margin-top: 42px;
}

.page-information-C-label-content{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
}

.label-element{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.label-element h2{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 12px;
    margin-bottom: 4px;
}

.label-element p{
    font-size: 18px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 8px;
}

.location-2{
    color: #C7BA9F;
    font-size: 23px;
}

.clock-2{
    color: #C7BA9F;
    font-size: 23px;
}

.phone-4{
    color: #C7BA9F;
    font-size: 20px;
}

@media screen and (max-width: 480px){
    body{
        overflow-x: hidden;
    }
    .page-information-C-header p{
        font-size: 25px;
    }
    .page-information-C-border{
        height: 6px;
    }
    .page-information-C-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .label-element{
        margin-top: 30px;
    }
    .page-information-map{
        display: none;
    }
}

@media screen and (min-width: 481px) and (max-width: 701px){
    .page-information-C-header p{
        font-size: 34px;
    }
    .page-information-C-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .label-element{
        margin-top: 30px;
    }
    .page-information-map{
        display: none;
    }
}

</style>