<template>
    <div class="page-banner">
        <div class="container-banner">
            <div class="slider-banner">
                <img class="slider" src="~@/assets/slider.jpeg/">
                <div class="label-banner">
                    <div class="label-content-baner">
                        <div class="label-info">
                            <div class="phone"><span><font-awesome-icon icon="phone" pull="left" :transform="{ rotate: 100 }"/></span>KONTAKT</div>
                            <p>tel.604 540 510</p>
                        </div>
                        <div class="label-banner-border-between"></div>
                        <div class="label-info">
                            <div class="clock"><span><font-awesome-icon :icon="['far', 'clock']" /></span>GODZINY PRACY</div>
                            <p>Pn-Pt: 16:00-20:00</p>
                            <p>Sob: 12:00-16:00</p>
                        </div>
                        <div class="label-banner-border-between"></div>
                        <div class="label-info">
                            <div class="location"><span><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>ADRES</div>
                            <p>ul. Leszczyńskiego 25</p>
                            <p>20-069 Lublin</p>
                        </div>
                    </div>
                    <div class="label-banner-border"></div>
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

* {
    box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
}

.container-banner{
    width: 100vw;
    margin: 0 auto;
}

.slider-banner{
    width: 100vw;
    position: relative;
}

.slider{
    width: 98vw;
}

.label-banner{
    width: 75vw;
    height: 160px;
    position: absolute;
    top: 83%;
    left: 0;
    background-color: #fff;
    -webkit-box-shadow: 5px 5px 20px -15px #000000;
    box-shadow: 5px 5px 20px -15px #000000;
}

.label-content-baner{
    display: flex;
    text-align: center;
    justify-content: space-evenly;
}

.label-info{
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.phone{
    font-size: 20px;
    font-weight: 600;
    position: relative;
    right: 36px;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.clock{
    font-size: 20px;
    font-weight: 600;
    position: relative;
    right: 30px;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.location{
    font-size: 20px;
    font-weight: 600;
    position: relative;
    right: 25px;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.label-info span{
    font-size: 20px;
    color:  #C7BA9F;
    margin-right: 10px;
}

.phone span{
    position: relative;
    top: 5px;
}


.label-info p{
    font-size: 16px;
    margin-bottom: 2px;
    margin-top: 2px;
}

.label-banner-border{
    width: 75vw;
    height: 8px;
    background-color: #C7BA9F;
    position: absolute;
    bottom: 0;
    left: 0;
}
.label-banner-border-between{
     border-right: 3px dashed #C7BA9F;
     margin-top: 30px;
     margin-bottom: 5px;
}




</style>