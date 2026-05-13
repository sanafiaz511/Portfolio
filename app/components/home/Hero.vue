<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="text-center max-w-4xl relative z-10"
    >
      <!-- Background Glow -->
      <div class="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
      <div class="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      <!-- Content -->
      <div class="text-center max-w-4xl relative z-10">

        <!-- Badge -->
        <p class="text-sm text-blue-400 mb-4 tracking-widest uppercase">
          Backend Developer • Laravel • CodeIgniter • Vue.js • React.js
        </p>

        <!-- Main Heading -->
        <h1 class="text-5xl md:text-6xl font-bold leading-tight">
          Software Engineer focused on backend systems, APIs, and clean architecture
        </h1>

        <!-- Sub text -->
        <p class="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
          Backend-focused Laravel Developer experienced in building scalable web applications 
          using PHP, Laravel, Vue.js, and MySQL, with strong expertise in RESTful API development,
          clean architecture, and performance optimization.
        </p>

        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap justify-center gap-3 mt-8 text-sm">
          <span class="px-3 py-1 border border-white/10 rounded-full">Laravel</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">CodeIgniter</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">PHP</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">MySQL</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">REST APIs</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">Vue.js</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">React.js</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">jQuery</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">Bootstrap</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">Git & GitHub</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">Bitbucket</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">Trello</span>
          <span class="px-3 py-1 border border-white/10 rounded-full">Postman</span>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 justify-center mt-10">

          <a href="#projects"
            class="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a href="/Sana_CV.pdf" download
            class="border border-white/20 px-6 py-3 rounded-xl hover:border-white/40 transition duration-300"
          >
            Download CV
          </a>

        </div>

      </div>

      </div>
  </section>
</template>