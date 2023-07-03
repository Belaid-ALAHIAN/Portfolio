<script setup>
import Flicking from '@egjs/vue3-flicking'
import { Pagination } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/pagination.css'
import { onMounted, ref } from 'vue'

const plugins = [new Pagination({ type: 'scroll' })]

const flicking = ref()
</script>
<template>
  <div class="h-full flex flex-col sm:min-h-screen px-3 py-10 sm:px-6 mx-auto">
    <h1
      class="uppercase flex-none ont-Audiowide font-semibold text-2xl sm:text-5xl md:text-4xl text-center text-amber-500"
    >
      Noteworthy Projects I've Been Involved In
    </h1>
    <div class="mt-3 grow h-[80vh]">
      <div
        class="flex flex-col gap-4 h-full items-center justify-center text-center md:text-left md:flex-row md:gap-4 py-2 md:py-0"
      >
        <div class="h-96 w-full shadow-formShadow rounded-sm">
          <div class="h-1/2">
            <img class="h-full w-full" src="@/assets/images/moradio.png" alt="moradio" />
          </div>
          <div class="h-1/2 relative">
            <div class="p-4 text-center font-Montserrat font-light text-white">
              list of moroccan radio stations that are available online
            </div>

            <a
              href="https://moradios.netlify.app/"
              target="_blank"
              class="w-full py-4 bg-amber-500 text-white hover:bg-amber-600 text-center cursor-pointer shadow-formShadow rounded-sm absolute bottom-0 left-0"
            >
              <div class="font-bold uppercase">visite page</div></a
            >
          </div>
        </div>

        <div class="shadow-formShadow h-96 rounded-sm flex flex-col justify-between">
          <div class="overflow-hidden aspect-square">
            <Flicking
              ref="flicking"
              class="w-full h-full relative"
              :options="{
                align: { camera: '0%', panel: '0%' },
                horizontal: true,
                renderOnlyVisible: true,

                circular: true
              }"
              :plugins="plugins"
            >
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod401.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod402.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod403.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod404.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod405.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod406.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod407.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod408.png" alt="cod40" />
              </div>
              <div class="">
                <img class="h-full w-full" src="@/assets/images/cod409.png" alt="cod40" />
              </div>
              <template #viewport>
                <div class="flicking-pagination"></div>
              </template>
            </Flicking>
          </div>
          <div class="">
            <div class="p-4 text-center font-Montserrat font-light text-white">
              A platform for users to study and practice for their driver's license exams.
            </div>
          </div>
        </div>

        <div class="p-2 md:p-4 h-96 flex w-full shadow-formShadow rounded-sm"></div>
      </div>
    </div>
  </div>
</template>
