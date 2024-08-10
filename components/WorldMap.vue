<script setup>

import { Orientation, Scale, TopoJSONMap } from '@unovis/ts'
import { WorldMapTopoJSON } from '@unovis/ts/maps'
import { VisSingleContainer, VisTopoJSONMap, VisTooltip, VisAxis, VisXYContainer, VisStackedBar } from '@unovis/vue'
import { palette, data, ageRange, yearRange } from '../data/map'
import * as d3 from 'd3';

const mapData = { areas: data }
const range = yearRange[1] - yearRange[0]

// Scale functions
const yearScale = Scale.scaleLinear()
  .domain(yearRange)
  .rangeRound([0, range])

// Custom Color Scale based on categories
const colorScale = d3.scaleThreshold()
  .domain([40, 55, 70, 85, 100])  // Thresholds for categories
  .range(['#83000B', '#FF3022', '#FFB035', '#8eb0d6', '#005f9a', '#cccccc']);  // Colors for categories

const year = ref(2024)

// Accessor functions
const getExpectancy = (d) => d.age[yearScale(Number(year.value))]
const areaColor = (y) => (d) => {
  const score = d.age[yearScale(y)];
  return score !== undefined ? colorScale(score) : '#ccc';  // Use a default color (e.g., gray) if no data
};

const tooltipTriggers = {
  [TopoJSONMap.selectors.feature]: d => {
    const countryName = d.properties.name;
    const score = d.data ? getExpectancy(d.data) : 'No data';
   
    
    return `
      <div class="text-white bg-black rounded-lg p-2">
        <div class="tooltip-header">${countryName}</div>
        <div class="tooltip-body">
          <p><strong>Score:</strong> ${score} </p>
         
        </div>
      </div>
    `;
  }
}


</script>

<template>
  <div class="topojson-map p-2">
    <h2 class="mb-2">Press Freedom by Country, <em>{{ year }}</em></h2>
    <div class="flex flex-row items-center gap-12 justify-center w-full m-2 mb-4">
      <header class='year-slider'>
        <div class="relative w-full">
        <input type="range" v-model="year" :min="yearRange[0]" :max="yearRange[1]" class="w-[40px]" />
        <div class="absolute w-full flex justify-between text-xs px-1">
          <span>{{ yearRange[0] }}</span>
          <span>{{ yearRange[1] }}</span>
        </div>
      </div>
      </header>
      <DropdownMenu>
        <DropdownMenuTrigger><Button variant="outline" class="h-8">View Legend</Button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <div class="legend">
            <div class="legend-item"><span class="legend-color" style="background-color: #005f9a;"></span>Good: 85–100 points</div>
            <div class="legend-item"><span class="legend-color" style="background-color: #8eb0d6;"></span>Satisfactory: 70–85 points</div>
            <div class="legend-item"><span class="legend-color" style="background-color: #FFB035;"></span>Problematic: 55–70 points</div>
            <div class="legend-item"><span class="legend-color" style="background-color: #FF3022;"></span>Difficult: 40–55 points</div>
            <div class="legend-item"><span class="legend-color" style="background-color: #83000B;"></span>Very serious: <40 points</div>
            <div class="legend-item"><span class="legend-color" style="background-color: #cccccc;"></span>Not classified</div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      
    
     </div>
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
  
}

.year-slider h2 {
  font-weight: 500;
}

.year-slider input {
  width: 240px;
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
.legend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.legend-color {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 2px;
}
</style>
