<script setup>
  import Navbar from '~/components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white relative">
    
    <!-- Background Grid -->
     <div class="fixed inset-0 opacity-[0.05] pointer-events-none">
      <div class="grid-bg"></div>
    </div>

    <Navbar />

    <main class="pt-24 relative z-10">
      <slot />
    </main>

  </div>
</template>