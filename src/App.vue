<script setup>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import AboutIcon from '@/components/icons/AboutIcon.vue'
import CodeIcon from '@/components/icons/CodeIcon.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="w-full h-14 top-0 sm:w-16 sm:h-screen fixed bg-neutral-900 z-10">
      <ul class="hidden h-full px-4 w-full sm:flex flex-col justify-center gap-2">
        <li>
          <router-link to="/"
            ><HomeIcon class="stroke-white cursor-pointer hover:stroke-amber-500" />
          </router-link>
        </li>
        <li>
          <router-link to="/about"
            ><AboutIcon class="stroke-white cursor-pointer hover:stroke-amber-500"
          /></router-link>
        </li>
        <li>
          <router-link to="/work"
            ><CodeIcon class="stroke-white cursor-pointer hover:stroke-amber-500"
          /></router-link>
        </li>
      </ul>
      <ul class="h-full w-full py-2 flex justify-center gap-2 sm:hidden">
        <li>
          <router-link to="/"
            ><HomeIcon class="stroke-white cursor-pointer hover:stroke-amber-500" />
          </router-link>
        </li>
        <li>
          <router-link to="/about"
            ><AboutIcon class="stroke-white cursor-pointer hover:stroke-amber-500"
          /></router-link>
        </li>
        <li>
          <router-link to="/work"
            ><CodeIcon class="stroke-white cursor-pointer hover:stroke-amber-500"
          /></router-link>
        </li>
      </ul>
    </div>
    <section class="mt-14 sm:mt-0 sm:h-screen bg-neutral-800 sm:ml-16">
      <router-view></router-view>
    </section>
  </div>
</template>
