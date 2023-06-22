<script setup>
import HomeIcon from './icons/HomeIcon.vue'
import AboutIcon from './icons/AboutIcon.vue'
import CodeIcon from './icons/CodeIcon.vue'
</script>
<template>
  <div class="w-16 h-screen fixed bg-neutral-900">
    <ul class="h-full px-4 w-full flex flex-col justify-center gap-2">
      <li>
        <HomeIcon class="stroke-white cursor-pointer hover:stroke-amber-500" />
      </li>
      <li><AboutIcon class="stroke-white cursor-pointer hover:stroke-amber-500" /></li>
      <li><CodeIcon class="stroke-white cursor-pointer hover:stroke-amber-500" /></li>
    </ul>
  </div>
</template>
