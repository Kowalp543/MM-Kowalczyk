<template>
  <div id="app">
    <router-view />
    <router-view name="banner" />
    <router-view name="about" />
    <router-view name="specialty" />
    <router-view name="footer" />
    <router-view name="informationO"/>
    <router-view name="informationD"/>
    <router-view name="informationC"/>
    <router-view name="footer2"/>
  </div>
</template>

<script>


export default
{
  name: 'App',
}


</script>

<style>

</style>
