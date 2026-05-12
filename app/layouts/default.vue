<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <Navbar />
    <main class="pt-24">
      <slot />
    </main>
  </div>
</template>