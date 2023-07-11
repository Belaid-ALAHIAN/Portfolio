<script setup>
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import WorkPage from '@/components/WorkPage.vue'
import EnvelopeIcon from '@/components/icons/EnvelopeIcon.vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container bg-neutral-800">
    <div class="w-full h-14 bg-neutral-800">
      <nav class="w-full flex items-center justify-between py-3">
        <ul class="flex justify-evenly text-amber-500 w-1/3">
          <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
            <a href="/">Home </a>
          </li>
          <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
            <a href="/about">About</a>
          </li>
          <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
            <a href="/work">Work</a>
          </li>
        </ul>
        <button
          type="button"
          class="inline-flex items-center rounded-full border border-transparent bg-amber-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
        >
          <EnvelopeIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          Contact Me
        </button>
      </nav>
    </div>
    <section class="bg-neutral-800">
      <HomePage />
      <AboutPage />
      <WorkPage />
    </section>
  </div>
</template>
