<script setup>
import GithubIcon from '@/components/icons/GithubIcon.vue'
import InIcon from '@/components/icons/InIcon.vue'
</script>
<template>
  <section class="h-screen bg-neutral-900">
    <div class="container flex items-center relative h-full">
      <div class="my-auto p-2">
        <h1 class="font-Audiowide font-semibold text-5xl text-white uppercase">
          I'm <span class="text-amber-500">belaid</span> Alahian
        </h1>
        <p class="font-Montserrat font-extralight text-white p-1">
          Frontend developer creating engaging web experiences,<br />
          with a focus on user-friendly interfaces and clean code.
        </p>
      </div>
      <div class="flex-cols gap-4 absolute bottom-0 p-1">
        <GithubIcon />
        <div class="flex justify-center p-1">
          <div class="h-3 w-px bg-amber-500"></div>
        </div>
        <InIcon />
        <div class="flex justify-center p-1">
          <div class="h-20 w-px bg-amber-500"></div>
        </div>
      </div>
      <div class=""></div>
    </div>
  </section>
</template>
