<script setup>
import NFTCard from "./NFTCard.vue";

const nfts = [
  { id: 1, title: "Sun-Gloss", price: "1.5 ETH" },
  { id: 2, title: "Moon-Glow", price: "2.1 ETH" },
  { id: 3, title: "Star-Light", price: "0.9 ETH" },
  { id: 4, title: "Galaxy-Vibe", price: "3.2 ETH" }
];
</script>

<template>
  <section class="nft-list w-full max-w-[1440px] mx-auto p-10">
    <h2 class="text-3xl text-white">Weekly - Top NFT</h2>
    <div class="grid grid-cols-4 gap-6 mt-6">
      <NFTCard v-for="nft in nfts" :key="nft.id" :nft="nft" />
    </div>
  </section>
</template>

<style scoped>

</style>