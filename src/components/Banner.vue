<template>
    <div class="page-banner">
        <div class="container-banner">
            <div class="slider-banner">
                <div>
                    <transition-group name="fade" tag="div">
                    <div v-for="index in [currentIndex]" :key="index">
                        <img :src="currentImg" />
                    </div>
                    </transition-group>
                    <a class="prev" @click="prev" href="#">&#10094;&#10094; </a>
                    <a class="next" @click="next" href="#">&#10095;&#10095; </a>
                </div>
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
  name: "Slider",
  data() {
    return {
      images: [
          require("@/assets/slajd1.png"),
          require("@/assets/slajd2.png"),
          require("@/assets/slajd3.png")
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
      this.timer = setInterval(this.next, 4000);
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
    width: 100vw;
    margin: 0 auto;
}

.slider-banner{
    width: 100vw;
    height: 702px;
    position: relative;
}

.slider{
    width: 98vw;
}



.fade-enter-active, .fade-leave-active {
  transition: all 0.9s ease;
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

img {
  height:702px;
  width:100%
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
    top: 83%;
    left: 0;
    background-color: #fff;
    -webkit-box-shadow: 5px 5px 20px -15px #000000;
    box-shadow: 5px 5px 20px -15px #000000;
    border-radius: 0 10px 0 0;
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