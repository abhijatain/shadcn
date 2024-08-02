<template>
    <div>
      <h3 class=" my-3">Political Leanings of Indian Newspapers and Channels</h3>
      <VisBulletLegend :items="chartLabels.map(d => ({ name: d.legend }))" class=" my-3" :color="color"/>
      <VisXYContainer :height="isSmallScreen ? 600 : 800" :yDirection="Direction.South" >
        <VisStackedBar :data="data" :x="x" :y="y" :color="color" :orientation="Orientation.Horizontal" />
        <VisTooltip :triggers="{ [StackedBar.selectors.bar]: tooltipTemplate }" />
        <VisAxis type="x" label="Coverage of each channel" />
        <VisAxis type="y" :tickTextWidth="isSmallScreen ? 75 : null" 
          :label="isSmallScreen ? null : 'Media Outlet'" :numTicks="data.length" :tickFormat="tickFormat" :style="{ 'grid': { 'stroke': 'none' } }"/>
      </VisXYContainer>
    </div>
  </template>
  
  <script setup>

  import { VisSingleContainer, VisDonut, VisBulletLegend, VisXYContainer, VisStackedBar, VisTooltip, VisAxis } from '@unovis/vue'
  import { FitMode, Direction, Orientation, StackedBar } from '@unovis/ts'
  
const labels = {
  left: 'Left-leaning',
  center: 'Center',
  right: 'Right-leaning',
}

const data = [
    { media: 'The Hindu', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'NDTV', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Indian Express', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Times of India', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Zee News', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Republic TV', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Hindustan Times', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'The Telegraph', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'ABP News', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'India Today', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Economic Times', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'CNN-News18', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'News18 India', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Aaj Tak', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Business Standard', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Mint', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'The Quint', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Deccan Chronicle', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Firstpost', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Scroll', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'DNA India', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'NewsX', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'The Print', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Free Press Journal', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'The Tribune', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'HuffPost India', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'The Wire', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Boom Live', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
    { media: 'Alt News', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
].map(d => ({
  ...d,
  left: d.left,
  center: d.center,
  right: d.right,
  total: d.left + d.center + d.right,
}))

const chartLabels = Object.entries(labels).map(([k, v], i) => ({
  key: k,
  legend: v,
  tooltip: (d) => [
    v.split(' ')[0],
    `<span style="color: var(--vis-color${i}); font-weight: 800">${d[k]}</span>`,
  ].join(': '),
}))

const isSmallScreen = window?.innerWidth < 768
const x = (d, i) => i
const y = chartLabels.map(i => (d) => d[i.key])
const tickFormat = (_, i) => data[i].media

const color = (d, i) => ['#035397', '#399918', '#E8630A'][i]

function tooltipTemplate(d) {
  const title = `<div style="color: #666; text-align: center">${d.media}</div>`
  const total = `Total: <b>${d.total}</b> of coverage</br>`
  const stats = chartLabels.map(l => l.tooltip(d)).join(' | ')
  return `
    <div style="font-size: 12px; background-color: white; border: 1px solid #ccc; border-radius: 8px; padding: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);color:black">
      ${title}${total}${stats}
    </div>
  `
}
  </script>
  
  <style scoped>
.vis-axis-grid {
  stroke: none;
}
</style>