<script setup>
import MapLocation from '@/components/MapLocation.vue'
import twiter from './icons/twiter.vue'
import linkedin from './icons/linkedin.vue'
import github from './icons/github.vue'
</script>
<template>
  <div>
    <div class="h-full px-3 items-center sm:min-h-screen py-3 pb-8 sm:px-6">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :visible-once="{ opacity: 1 }"
        :delay="1000"
        class="items-center px-20 sm:px-2 mx-auto pb-5"
      >
        <div class="w-full h-full p-2 sm:p-3 sm:pl-0">
          <div class="px-8 py-4 md:px-2">
            <h1
              class="uppercase ont-Audiowide font-semibold text-2xl xsm:text-base md:text-4xl md:text-center text-white"
            >
              Get in touch
            </h1>

            <p class="text-gray-300 text-justify w-1/2 font-Montserrat p-3 md:w-full">
              Reach out for networking, collaboration, or speaking opportunities. Share ideas,
              provide feedback, or just say hello. Let's connect and explore the possibilities
              together.
            </p>
          </div>
        </div>
      </div>
      <div class="rounded-3xl h-full sm:rounded-t-none sm:h-[62.5%]">
        <div class="h-1/2 w-full sm:w-full sm:h-full relative">
          <MapLocation class="h-[100%] z-0" />
          <div
            v-motion
            :initial="{ y: -175 }"
            :visible="{ y: 0 }"
            :delay="1000"
            class="p-2 flex flex-col w-80 absolute sm:relative sm:top-0 sm:left-0 sm:w-full sm:p-1 -top-8 left-[9%] z-[100] bg-gray-801 shadow-formShadow rounded-bl-3xl rounded-br-3xl"
          >
            <div class="w-full">
              <div class="h-full sm:h-full sm:px-1 px-6 py-3 flex flex-col justify-center">
                <div class="flex flex-col">
                  <div class="flex justify-center">
                    <div class="rounded-lg aspect-square">
                      <img class="h-36 rounded-lg" src="@/assets/images/pic.png" alt="" />
                    </div>
                  </div>
                  <div class="text-gray-300 text-center font-bold text-sm py-2">
                    <div class="flex flex-col gap-1">
                      <p>alahian.belaid@gmail.com</p>
                      <p>Base in Meknes,Morocco</p>
                      <p>+212773284140</p>
                    </div>
                    <div class="flex justify-center gap-2 my-4">
                      <a href="https://github.com/Belaid-ALAHIAN"><github class="h-6 w-6" /></a>
                      <a href="https://www.linkedin.com/in/belaid-alahian/"
                        ><linkedin class="h-6 w-6"
                      /></a>
                      <twiter class="h-6 w-6" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="text-center mt-4 rounded-full font-bold border border-transparent bg-amber-500 px-3 py-2 text-sm leading-4 text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
