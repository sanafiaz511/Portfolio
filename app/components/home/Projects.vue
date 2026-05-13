<template>
  <section id="projects" class="py-24 px-6">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible="{ opacity: 1, y: 0 }"
    >
      <div class="max-w-6xl mx-auto">

        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Production Level Projects
        </h2>

        <!-- Grid -->
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 50
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 700
            }
          }"
         class="grid md:grid-cols-2 gap-8">

          <!-- Project 1 -->
          <div class="glass-card hover-card spotlight-card rounded-2xl p-6">
            <h3 class="text-xl font-semibold mb-2">
              CNext – Multi-Tenant ERP System
            </h3>

            <p class="text-gray-400 text-sm mb-4">
              A scalable enterprise ERP platform built in Laravel for managing companies,
              employees, external organizations, and complete workforce operations with
              automation and reporting.
            </p>

            <div class="text-sm text-gray-300 space-y-1">
              <p>• Multi-company & multi-tenant architecture</p>
              <p>• Employee & external organization management</p>
              <p>• Attendance system with work schedules & reports</p>
              <p>• Working hours, remote hours & leave tracking</p>
              <p>• Ticketing system for internal/external support</p>
              <p>• Microsoft login integration (SSO)</p>
              <p>• Attribute-based access control (ABAC)</p>
              <p>• Income & expense management system</p>
              <p>• Bank transaction import (multiple banks)</p>
              <p>• Linking transactions with income & expenses</p>
              <p>• Automated financial & HR reporting</p>
              <p>• Email notifications & database notifications</p>
              <p>• Queue-based job processing system</p>
            </div>

            <div class="flex gap-3 mt-4 text-xs flex-wrap">
              <span class="px-2 py-1 border border-white/10 rounded">Laravel</span>
              <span class="px-2 py-1 border border-white/10 rounded">MySQL</span>
              <span class="px-2 py-1 border border-white/10 rounded">Queues</span>
              <span class="px-2 py-1 border border-white/10 rounded">SSO (Microsoft)</span>
              <span class="px-2 py-1 border border-white/10 rounded">ABAC</span>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="glass-card hover-card spotlight-card rounded-2xl p-6">
            <h3 class="text-xl font-semibold mb-2">
              Olivetti – Project Financial & Operations Management System
            </h3>

            <p class="text-gray-400 text-sm mb-4">
              A structured project management system designed to handle OPEX, CAPEX, and
              standard projects with advanced financial tracking, reporting, and dynamic
              data visualization in tabular format.
            </p>

            <div class="text-sm text-gray-300 space-y-1">
              <p>• OPEX, CAPEX & standard project categorization</p>
              <p>• Hands-on dynamic table-based project management</p>
              <p>• Monthly tracking with formula-driven calculations</p>
              <p>• Conditional formatting (cell-based color highlighting)</p>
              <p>• Editable values with real-time view updates</p>
              <p>• Advanced filtering & data segmentation</p>
              <p>• Database snapshot generation for reporting</p>
              <p>• Structured financial & operational reports</p>
            </div>

            <div class="flex gap-3 mt-4 text-xs flex-wrap">
              <span class="px-2 py-1 border border-white/10 rounded">Laravel</span>
              <span class="px-2 py-1 border border-white/10 rounded">MySQL</span>
              <span class="px-2 py-1 border border-white/10 rounded">Data Tables</span>
              <span class="px-2 py-1 border border-white/10 rounded">Reporting System</span>
            </div>
          </div>

          <div class="glass-card hover-card spotlight-card rounded-2xl p-6">
            <h3 class="text-xl font-semibold mb-2">
              Interapptive – Multi-Service Web Platform
            </h3>

            <p class="text-gray-400 text-sm mb-4">
              A multi-service web application built to manage digital products, stores,
              posts, and banners within a unified system. Designed for scalable content
              and service management with a modern SPA-like experience.
            </p>

            <div class="text-sm text-gray-300 space-y-1">
              <p>• Multi-service platform (products, stores, posts & banners)</p>
              <p>• Dynamic product & store management system</p>
              <p>• Content management for posts and marketing banners</p>
              <p>• Responsive admin and user-facing interface</p>
              <p>• Single Page Application experience with Inertia.js</p>
              <p>• RESTful backend architecture with Laravel</p>
              <p>• Component-based frontend using Vue.js</p>
            </div>

            <div class="flex gap-3 mt-4 text-xs flex-wrap">
              <span class="px-2 py-1 border border-white/10 rounded">Laravel</span>
              <span class="px-2 py-1 border border-white/10 rounded">Vue.js</span>
              <span class="px-2 py-1 border border-white/10 rounded">Inertia.js</span>
              <span class="px-2 py-1 border border-white/10 rounded">MySQL</span>
            </div>
          </div>

          <div class="glass-card hover-card spotlight-card rounded-2xl p-6">
            <h3 class="text-xl font-semibold mb-2">
              Hyperlook – Multi-Level Organizational & Stock Management System
            </h3>

            <p class="text-gray-400 text-sm mb-4">
              A Laravel-based enterprise system designed to manage complex organizational hierarchies,
              stock tracking, and financial operations across multiple company levels including mother,
              child, and independent (orphan) companies.
            </p>

            <div class="text-sm text-gray-300 space-y-1">
              <p>• Multi-level organizational structure (mother, child & orphan companies)</p>
              <p>• General stock & company-specific stock management</p>
              <p>• Product association with companies and stock entities</p>
              <p>• Payment handling linked with companies and transactions</p>
              <p>• Company lead management system</p>
              <p>• Automated company-wise financial statements</p>
              <p>• Complete inventory & financial tracking system</p>
              <p>• RESTful API development for system integration</p>
            </div>

            <div class="flex gap-3 mt-4 text-xs flex-wrap">
              <span class="px-2 py-1 border border-white/10 rounded">Laravel</span>
              <span class="px-2 py-1 border border-white/10 rounded">REST API</span>
              <span class="px-2 py-1 border border-white/10 rounded">MySQL</span>
              <span class="px-2 py-1 border border-white/10 rounded">Inventory System</span>
              <span class="px-2 py-1 border border-white/10 rounded">ERP Logic</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>