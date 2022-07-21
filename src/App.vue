<template>
  <TheNavbar/>
  <div class="container push-top">
     <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
export default {
  name: 'App',
  components: {
    TheNavbar,
}
}
</script>

<style>
@import "assets/style.css";
</style>
