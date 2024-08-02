<template>
    <div>
      <h3>Most Common Password Categories</h3>
      <VisBulletLegend :items="legendItems" />
      <VisSingleContainer :height="400">
        <VisDonut
          :value="d => d.value"
          :data="chartData"
          :showEmptySegments="true"
          :padAngle="0.01"
          :arcWidth="100"
        />
      </VisSingleContainer>
    </div>
  </template>
  
  <script setup>

  import { VisSingleContainer, VisDonut, VisBulletLegend } from '@unovis/vue'
  
  const chartData = ref([
    { key: 'names', value: 1396 },
    { key: 'cool', value: 928 },
    { key: 'alphanumeric', value: 864 },
    { key: 'fluffy', value: 518 },
    { key: 'nerdy', value: 294 },
    { key: 'other', value: 916 },
  ])
  
  const legendItems = chartData.value.map(item => ({
    name: item.key.charAt(0).toUpperCase() + item.key.slice(1)
  }))
  </script>
  