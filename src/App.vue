<template>
  <div id="app">
    <router-view></router-view>
    <maincpn></maincpn>
  </div>
</template>

<script>
import maincpn from "./components/content/maincpn.vue"


export default {
  name: 'App',
  components: {
      maincpn
  }
}
</script>

<style>

@import "./assets/css/base.css";

</style>
