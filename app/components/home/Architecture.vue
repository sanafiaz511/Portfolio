<template>
  <section id="architecture" class="py-24 px-6">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible="{ opacity: 1, y: 0 }"
    >
      <div class="max-w-6xl mx-auto text-center">

        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Application Architecture
        </h2>

        <p class="text-gray-400 mb-12 max-w-2xl mx-auto">
          Backend-focused architecture for scalable, secure, and maintainable web applications with modern authentication, APIs, and async processing.
        </p>

        <!-- Diagram Box -->
        <div class="border border-white/10 rounded-2xl p-8 bg-white/5 text-left font-mono text-sm">

          <p class="text-blue-400">Frontend Layer</p>
          <p class="ml-6">Vue.js • React.js • Blade Templates</p>

          <div class="my-2 text-gray-500">↓</div>

          <p class="text-blue-400">Authentication Layer</p>
          <p class="ml-6">Microsoft OAuth Login • Laravel Sanctum • Session Management</p>

          <div class="my-2 text-gray-500">↓</div>

          <p class="text-blue-400">Authorization Layer</p>
          <p class="ml-6">Role-based Access Control • Middleware • Attribute-based Access Control</p>

          <div class="my-2 text-gray-500">↓</div>

          <p class="text-blue-400">Backend Layer</p>
          <p class="ml-6">Laravel • CodeIgniter</p>

          <div class="my-2 text-gray-500">↓</div>

          <p class="text-blue-400">Business Logic Layer</p>
          <p class="ml-6">CRUD Operations • Validation • Role & Workflow Management</p>

          <div class="my-2 text-gray-500">↓</div>

          <p class="text-blue-400">Async Processing</p>
          <p class="ml-6">Laravel Queue Jobs • Background Tasks • Email & Notification Processing</p>

          <div class="my-2 text-gray-500">↓</div>

          <p class="text-blue-400">Database Layer</p>
          <p class="ml-6">MySQL • Eloquent ORM • Indexing • Query Optimization</p>

          <div class="my-2 text-gray-500">↓</div>

          <p class="text-blue-400">Integrations</p>
          <p class="ml-6">Stripe • Firebase Notifications • Third-party APIs</p>

        </div>

      </div>
    </div>
  </section>
</template>