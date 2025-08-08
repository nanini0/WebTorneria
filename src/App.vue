
<script setup>

import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import ServicesView from './views/ServicesView.vue';
</script>

<template>
  <div>
    <NavBar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<style scoped></style>
