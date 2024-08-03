<script setup>
import { VisXYContainer, VisAxis, VisArea, VisXYLabels } from '@unovis/vue'
import { data, formats, getLabels } from '../data/data.ts'

const labels = getLabels(data)

const x = (d) => d.year
const y = formats.map(g => (d) => d[g])
const labelProps = {
  x: (d) => labels[d.year] ? d.year : undefined,
  y: (d) => labels[d.year]?.value,
  label: (d) => labels[d.year]?.label,
  backgroundColor: (d) => labels[d.year]?.color ?? 'none',
}
</script>

<template>
  <VisXYContainer :data="data" :height="500">
    <VisXYLabels v-bind="labelProps" clusterBackgroundColor="none" :clusterLabel="() => ''" />
    <VisArea :x="x" :y="y" />
    <VisAxis type='x' label='Year' :numTicks="10" :gridLine="false" :domainLine="false" />
    <VisAxis type='y' label='Revenue (USD, billions)' :numTicks="10" />
  </VisXYContainer>
</template>

