<script setup>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import AboutIcon from '@/components/icons/AboutIcon.vue'
import CodeIcon from '@/components/icons/CodeIcon.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="w-16 h-screen fixed bg-neutral-900">
      <ul class="h-full px-4 w-full flex flex-col justify-center gap-2">
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
    <section class="h-screen bg-neutral-800 ml-16"><router-view></router-view></section>
  </div>
</template>
