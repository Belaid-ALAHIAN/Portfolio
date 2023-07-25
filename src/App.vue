<script setup>
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import WorkPage from '@/components/WorkPage.vue'
import EnvelopeIcon from '@/components/icons/EnvelopeIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import InIcon from '@/components/icons/InIcon.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen">
    <div class="w-full bg-neutral-800 border-b border-gray-801">
      <nav class="app-container w-full flex items-center justify-between py-2">
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
    <div class="app-container bg-neutral-800 relative">
      <section class="bg-neutral-800">
        <HomePage />
        <AboutPage class="pb-8" />
        <WorkPage />
        <div class="h-12 border-t border-gray-801 py-3">
          <p class="text-center text-amber-500">resume</p>
        </div>
      </section>
    </div>
    <div class="flex-cols gap-4 fixed bottom-0 left-20 z-50 px-1">
      <a href="https://github.com/Belaid-ALAHIAN"><GithubIcon /></a>

      <div class="flex justify-center p-1">
        <div class="h-3 w-px bg-amber-500"></div>
      </div>
      <a href="https://www.linkedin.com/in/belaid-alahian/"><InIcon /></a>

      <div class="flex justify-center p-1">
        <div class="h-20 w-px bg-amber-500"></div>
      </div>
    </div>
  </div>
</template>
