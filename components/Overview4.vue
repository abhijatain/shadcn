<script setup>
import { FitMode, Sankey, SankeySubLabelPlacement, VerticalAlign } from '@unovis/ts'
import { VisSingleContainer, VisSankey } from '@unovis/vue'
import { sankeyData, root } from '../data/data.ts'
import { ref } from "vue"

const data = ref({ nodes: sankeyData.nodes, links: sankeyData.links })

function toggleGroup(n) {
  if (n.expandable) {
    if (n.expanded) {
      sankeyData.collapse(n)
    } else {
      sankeyData.expand(n)
    }
    data.value = ({ nodes: sankeyData.nodes, links: sankeyData.links })
  }
}

const callbacks = {
  linkColor: (d) => d.source.color ?? null,
  nodeCursor: (d) => d.expandable ? 'pointer' : null,
  nodeIcon: (d) => d.expandable ? (d.expanded ? '-' : '+') : '',
  subLabel: (d) => (d.depth === 0 || d.expanded)
    ? ''
    : `${((d.value / root.value) * 100).toFixed(1)}%`,
  events: {
    [Sankey.selectors.node]: {
      click: toggleGroup,
    },
  },
}
</script>

<template>
  <VisSingleContainer :data="data" height="min(60vh,75vw)">
    <VisSankey v-bind="callbacks" :labelFit="FitMode.Wrap" :labelForceWordBreak="false" :labelMaxWidth="150"
      :labelVerticalAlign="VerticalAlign.Middle" :nodePadding="20" :subLabelPlacement="SankeySubLabelPlacement.Inline" />
  </VisSingleContainer>
</template>
