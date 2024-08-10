<script setup>

import { Orientation, Scale, TopoJSONMap } from '@unovis/ts'
import { WorldMapTopoJSON } from '@unovis/ts/maps'
import { VisSingleContainer, VisTopoJSONMap, VisTooltip, VisAxis, VisXYContainer, VisStackedBar } from '@unovis/vue'
import { palette, data, ageRange, yearRange } from '../data/map'

const mapData = { areas: data }
const range = yearRange[1] - yearRange[0]

// Scale functions
const yearScale = Scale.scaleLinear()
  .domain(yearRange)
  .rangeRound([0, range])

const colorScale = Scale.scaleSequential(palette).domain(ageRange)

const year = ref(2024)

// Accessor functions
const color = (_, i) => colorScale(i)
const getExpectancy = (d) => d.age[yearScale(Number(year.value))]
const areaColor = (y) => (d) => colorScale(d.age[yearScale(y)])

const tooltipTriggers = {
  [TopoJSONMap.selectors.feature]: d => `${d.properties.name}: ${d.data ? getExpectancy(d.data) : 'no data'}`,
}


</script>

<template>
  <div class="topojson-map p-2">
    <!-- year slider -->
    <header class='year-slider'>
      <h2 class="mb-2">Press Freedom by Country, <em>{{ year }}</em></h2>
      <input type="range" v-model="year" :min="yearRange[0]" :max="yearRange[1]" />
    </header>
    <!-- topojson map -->
    <VisSingleContainer :data="mapData"  :duration="0" class="h-[250px] md:h-[400px] border  rounded-lg md:m-4">
      <VisTopoJSONMap :topojson="WorldMapTopoJSON" :areaColor="areaColor(Number(year))"  />
      <VisTooltip :triggers="tooltipTriggers" />
    </VisSingleContainer>
    <!-- gradient legend-->
    
  </div>
</template>

<style>
.topojson-map,
.year-slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.year-slider {
  width: max-content;
  position: relative;
  margin-bottom: 20px;
}

.year-slider h2 {
  font-weight: 500;
}

.year-slider input {
  width: 75%;
}

.year-slider>input::before {
  position: absolute;
  content: attr(min);
  left: 0;
}

.year-slider>input::after {
  position: absolute;
  content: attr(max);
  right: 0;
}
</style>
