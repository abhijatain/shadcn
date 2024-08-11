<template>
    <div>
    
      <VisBulletLegend :items="legendItems" />
      <VisSingleContainer :height="400">
        <VisDonut
          :value="d => d.value"
          :data="chartData"
          :showEmptySegments="true"
          :padAngle="0.01"
          :arcWidth="100"
          :color="color"
          centralLabel="Label" 
          centralSubLabel="Long sub-label wraps onto the next line"
        />
      </VisSingleContainer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { VisSingleContainer, VisDonut, VisBulletLegend } from '@unovis/vue'
  
  const chartData = ref([
    { key: 'names', value: 1396 },
    { key: 'cool', value: 928 },
    { key: 'alphanumeric', value: 864 },
    
  ])
  
  const legendItems = chartData.value.map(item => ({
    name: item.key.charAt(0).toUpperCase() + item.key.slice(1)
  }))
  
  const colors = ['#141E46','#BAD7E9','#BB2525']
  
  const color = (d, i) => colors[i % colors.length]
  </script>
  
  