<script setup>
import SideBar from './SideBar.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import InIcon from '@/components/icons/InIcon.vue'
import HeroSvg from './HeroSvg.vue'
</script>
<template>
  <div>
    <SideBar />
    <section class="h-screen bg-neutral-800 ml-16">
      <div class="container flex items-center gap-28 relative h-full">
        <div class="my-auto p-2">
          <h1 class="font-Audiowide font-semibold text-5xl text-white uppercase">
            I'm <span class="text-amber-500">belaid</span> Alahian
          </h1>
          <p class="font-Montserrat font-extralight text-white p-1">
            Frontend developer creating engaging web experiences,<br />
            with a focus on user-friendly interfaces and clean code.
          </p>
        </div>
        <div class="h-3/4">
          <HeroSvg />
        </div>
        <div class="flex-cols gap-4 absolute bottom-0 px-1">
          <GithubIcon />
          <div class="flex justify-center p-1">
            <div class="h-3 w-px bg-amber-500"></div>
          </div>
          <InIcon />
          <div class="flex justify-center">
            <div class="h-20 w-px bg-amber-500"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
