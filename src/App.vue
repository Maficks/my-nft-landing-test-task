<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import NFTList from "./components/NFTList.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <Hero />
    <NFTList />
    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 1920px) {
  .app-container {
    transform: scale(1.1);
    transform-origin: top center;
  }
}
</style>
