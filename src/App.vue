<script setup>
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import WorkPage from '@/components/WorkPage.vue'
import EnvelopeIcon from '@/components/icons/EnvelopeIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import InIcon from '@/components/icons/InIcon.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import { RouterLink, RouterView } from 'vue-router'
import Loading from 'vue-loading-overlay'

import { ref, onMounted } from 'vue'

let isLoading = ref(true)
const fullPage = ref(true)

let navigation = ref(false)
const showNavigation = function () {
  navigation.value = true
}
const hideNavigation = function () {
  navigation.value = false
}

const isMenuOpen = ref(false)
const scrolling = function (pos) {
  window.scrollTo(0, pos)
}
const nav = ref(null)
//const navShild = ref(null)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 700)
  window.addEventListener('scroll', () => {
    let curr = window.pageYOffset

    if (curr >= 40) {
      nav.value.classList.add('scrolled')
      //navShild.value.classList.add('navshild')
    } else if (curr < 10) {
      nav.value.classList.remove('scrolled')
      //navShild.value.classList.remove('navshild')
    }
  })
})
</script>

<template>
  <div class="h-screen">
    <loading
      v-model:active="isLoading"
      :opacity="1"
      :background-color="'#262626'"
      :color="'#F59E0B'"
      :z-index="99999"
      :is-full-page="fullPage"
    />
    <div class="bg-neutral-800">
      <div
        ref="nav"
        class="w-full px-0 bg-neutral-800 border-b border-gray-801 sticky top-0 z-[9999]"
      >
        <nav class="app-container sm:pl-5 w-full flex items-center justify-between py-2">
          <ul class="md:hidden flex justify-evenly text-amber-500 w-1/3">
            <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
              <a @click="scrolling(0)" href="#home">Home </a>
            </li>
            <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
              <a @click="scrolling(632)" href="#about">About</a>
            </li>
            <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
              <a @click="scrolling(1070)" href="#work">Work</a>
            </li>
          </ul>
          <div
            class="w-full h-full z-[9999] top-[58px] md:block md:fixed bg-slate-50 bg-opacity-50"
            v-if="navigation"
          >
            <div
              class="fixed bg-white-100 w-[96px] z-[9999] transition-all h-full bg-neutral-800"
              :class="[navigation ? 'left-0' : '-left-240']"
            >
              <div class="px-5 border-b border-border-100 h-full">
                <ul class="flex h-1/2 flex-col justify-evenly text-amber-500">
                  <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
                    <a @click="scrolling(0)" href="#home">Home </a>
                  </li>
                  <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
                    <a @click="scrolling(632)" href="#about">About</a>
                  </li>
                  <li class="text-amber-500 hover:text-amber-600 focus:text-amber-700">
                    <a @click="scrolling(1070)" href="#work">Work</a>
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="navigation" class="fixed inset-0 z-40" @click="hideNavigation" />
          </div>
          <div class="hidden md:block w-5 h-5 mr-4 cursor-pointer" @click="showNavigation">
            <p class="w-full h-full text-white"><menu-icon class="w-full h-full" /></p>
          </div>
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
        <HomePage id="#home" />

        <AboutPage id="#about" class="pb-8" />
        <WorkPage id="#work" />
        <div class="h-12 border-t border-gray-801 py-3">
          <p class="text-center text-amber-500">resume</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-cols gap-4 fixed bottom-0 left-10 md:left-8 sm:left-2 z-[9999] px-1">
    <a href="https://github.com/Belaid-ALAHIAN"><GithubIcon /></a>

    <div class="flex justify-center p-1">
      <div class="h-3 w-px bg-amber-500"></div>
    </div>
    <a href="https://www.linkedin.com/in/belaid-alahian/"><InIcon /></a>

    <div class="flex justify-center p-1">
      <div class="h-20 w-px bg-amber-500"></div>
    </div>
  </div>
</template>
