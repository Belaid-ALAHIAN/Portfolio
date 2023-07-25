<script setup>
import L from 'leaflet'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

const zoom = 10
</script>

<template>
  <div class="w-full h-[262px] rounded-3xl map">
    <l-map ref="map" v-model:zoom="zoom" :center="[33.8995749, -5.5205297, 18]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>
