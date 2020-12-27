<template>
  <div class = "app">
    <Header/>
    <Banner/>
    <About/>
    <Specialty/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Specialty from '@/components/Specialty.vue';
import Footer from '@/components/Footer.vue';

export default
{
  name: 'App',
  components:
  {
    Header,
    Banner,
    About,
    Specialty,
    Footer,
  }

}


</script>

<style>

</style>
