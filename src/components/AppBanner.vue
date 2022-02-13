<template>
    <div class="page-banner">
        <div class="container-banner">
            <div class="slider-banner">
                <div class="slider">
                    <transition-group name="fade" tag="div">
                    <div v-for="index in [currentIndex]" :key="index">
                        <img class="photo" alt="slider zdjęć ukazujący gabinet" :src="currentImg" />
                    </div>
                    </transition-group>
                    <a class="prev" @click="prev" href="#">&#10094;&#10094; </a>
                    <a class="next" @click="next" href="#">&#10095;&#10095; </a>
                </div>
                <div class="label-banner">
                    <div class="label-content-baner">
                        <div class="label-info">
                            <div class="phone"><span><font-awesome-icon icon="phone" pull="left" :transform="{ rotate: 100 }"/></span>KONTAKT</div>
                            <a href="tel: +48604540510"><p>tel. 604 540 510</p></a>
                        </div>
                        <div class="label-banner-border-between"></div>
                        <div class="label-info">
                            <div class="clock"><span><font-awesome-icon :icon="['far', 'clock']" /></span>GODZINY PRACY</div>
                            <p>Sprawdź wybranego</p>
                            <p>lekarza</p>
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
  name: "Slider",
  data() {
    return {
      images: [
          require("@/assets/S1.webp"),
          require("@/assets/S2.webp"),
          require("@/assets/S3.webp"),
          require("@/assets/S4.webp"),
          require("@/assets/S5.webp"),
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};

</script>

<style>

* {
    box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
}

.container-banner{
    width: 100%;
    margin: 0 auto;
}

.slider-banner{
    width: 100%;
    height: 50vw;
    position: relative;
}

.photo{
    height: auto;
    width: 100%;
    position: relative;
}

.slider{
    width: 100%;
    height: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1.5s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
  z-index: 100;
}

.next {
  right: 0;
  border-radius: 10px 0 0 10px;
}

.prev {
  left: 0;
  border-radius: 0 10px 10px 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.label-banner{
    width: 75vw;
    height: 160px;
    position: absolute;
    top: 85%;
    left: 0;
    background-color: #fff;
    -webkit-box-shadow: 5px 5px 20px -15px #000000;
    box-shadow: 5px 5px 20px -15px #000000;
    border-radius: 0 10px 0 0;
    z-index: 100;
}

.label-content-baner{
    display: flex;
    text-align: center;
    justify-content: space-evenly;
}

.label-info{
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.label-info a{
  text-decoration: none;
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
    color:  #e4bc9b;
    margin-right: 10px;
}

.phone span{
    position: relative;
    top: 0px;
}


.label-info p{
    font-size: 16px;
    margin-bottom: 2px;
    margin-top: 2px;
    color: #000000;
    position: relative;
    z-index: +1;
}


.label-banner-border{
    width: 75vw;
    height: 8px;
    background-color: #e4bc9b;
    position: absolute;
    bottom: 0;
    left: 0;
}
.label-banner-border-between{
     border-right: 3px dashed #e4bc9b;
     margin-top: 35px;
     margin-bottom: 5px;
}


@media screen and (max-width: 424px){
  body{
    overflow-x: hidden;
  }
  .slider-banner{
    /* height: 66.6vw; */
    position: relative;
    z-index: -1;
  }

  .photo{
    /* height: 66.6vw; */
    position: relative;
    z-index: -1;
  }

  .prev, .next {
    display: none;
  }


  .label-banner{
    width: 100%;
    height: 80px;
    position: absolute;
    top: 90%;
    left: 0;
    z-index: 100;
  }
  .label-info{
    margin-top: 15px;
  }
   .label-info span{
    font-size: 10px;
    margin-right: 2px;
  }
  .label-info p{
    font-size: 8px;
  }

  .phone{
      font-size: 10px;
      position: relative;
      right: 1px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .clock{
      font-size: 10px;
      position: relative;
      right: 1px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .location{
      font-size: 10px;
      position: relative;
      right: 1px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .label-banner-border{
    width: 100%;
  }
  .label-banner-border-between{
    display: none;
  }
}


@media screen and (min-width: 425px) and (max-width: 480px){
  .slider-banner{
    /* height: 66.6vw; */
    position: relative;
    z-index: -1;
  }

  .photo{
    /* height: 66.6vw; */
    position: relative;
    z-index: -1;
  }

  .prev, .next {
    display: none;
  }


  .label-banner{
    width: 100%;
    height: 100px;
    position: absolute;
    top: 88%;
    left: 0;
  }
  .label-info{
    margin-top: 20px;
  }
   .label-info span{
    font-size: 12px;
    margin-right: 2px;
  }
  .label-info p{
    font-size: 10px;
  }
  .phone{
      font-size: 12px;
      position: relative;
      right: 18px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .clock{
      font-size: 12px;
      position: relative;
      right: 15px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .location{
      font-size: 12px;
      position: relative;
      right: 11px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .label-banner-border{
    width: 100%;
  }
  .label-banner-border-between{
   display: none;
  }

}

@media screen and (min-width: 481px) and (max-width: 600px){
  .slider-banner{
    /* height: 66.6vw; */
    position: relative;
    z-index: -1;
  }

  .photo{
    /* height: 66.6vw; */
    position: relative;
    z-index: -1;
  }

  .prev, .next {
    display: none;
  }


  .label-banner{
    width: 90%;
    height: 110px;
    position: absolute;
    top: 88%;
    left: 0;
  }
  .label-content-baner{
    margin-left: 15px;
  }
  .label-info{
    margin-top: 22px;
  }
   .label-info span{
    font-size: 14px;
    margin-right: 2px;
  }
  .label-info p{
    font-size: 12px;
  }
  .phone{
      font-size: 14px;
      position: relative;
      right: 18px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .clock{
      font-size: 14px;
      position: relative;
      right: 15px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .location{
      font-size: 14px;
      position: relative;
      right: 11px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .label-banner-border{
    width: 100%;
  }
  .label-banner-border-between{
    display: none;
  }
}


@media screen and (min-width: 601px) and (max-width: 769px){
  /* .slider-banner{
    height: 66.6vw;
  }

  .photo{
    height: 66.6vw;
  } */

  .label-banner{
    width: 85%;
    height: 130px;
    position: absolute;
    top: 86%;
    left: 0;
  }
  .label-info{
    margin-top: 30px;
    margin-left: 10px;
  }
   .label-info span{
    font-size: 16px;
    margin-right: 2px;
  }
  .label-info p{
    font-size: 12px;
  }
  .phone{
      font-size: 16px;
      position: relative;
      right: 18px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .clock{
      font-size: 16px;
      position: relative;
      right: 15px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .location{
      font-size: 16px;
      position: relative;
      right: 11px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .label-banner-border{
    width: 100%;
  }
}

@media screen and (min-width: 770px) and (max-width: 1000px){
  /* .slider-banner{
    height: 66.6vw;
  }

  .photo{
    height: 66.6vw;
  } */

  .label-banner{
    width: 80%;
    height: 140px;
    position: absolute;
    top: 85%;
    left: 0;
  }
  .label-info{
    margin-top: 32px;
    margin-left: 10px;
  }

   .label-info span{
    font-size: 18px;
    margin-right: 2px;
  }
  .label-info p{
    font-size: 14px;
  }
  .phone{
      font-size: 18px;
      position: relative;
      right: 18px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .clock{
      font-size: 18px;
      position: relative;
      right: 15px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .location{
      font-size: 18px;
      position: relative;
      right: 11px;
      margin-bottom: 10px;
      letter-spacing: 1px;
  }
  .label-banner-border{
    width: 100%;
  }
}
 /* @media screen and (min-width: 900px) and (max-width: 1100px){
  .slider-banner{
    height: 66vw;
  }

  .photo{
    height: 66vw;
  }
 } */





</style>