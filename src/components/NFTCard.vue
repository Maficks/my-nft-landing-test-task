<script setup>
defineProps(["nft"]);
</script>

<template>
  <div class="bg-gray-800 p-4 rounded-lg text-white">
    <div class="h-40 bg-gray-700 rounded-lg"></div>
    <h3 class="mt-4 text-lg">{{ nft.title }}</h3>
    <p class="text-gray-400">Price: {{ nft.price }}</p>
  </div>
</template>

<style scoped>

</style>