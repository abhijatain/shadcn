<script setup>

import { cn } from '@/lib/utils'


const props = defineProps({
  isCollapsed: Boolean,
  links: Array
})
</script>

<template>
    <div
      :data-collapsed="props.isCollapsed"
      class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        <template v-for="(link, index) in props.links" :key="index">
          <Tooltip v-if="props.isCollapsed" :key="`1-${index}`" :delay-duration="0">
            <TooltipTrigger as-child>
              <a
                href="#"
                
              >
               
                <span class="sr-only">{{ link.title }}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" class="flex items-center gap-4">
              {{ link.title }}
              <span v-if="link.label" class="ml-auto text-muted-foreground">
                {{ link.label }}
              </span>
            </TooltipContent>
          </Tooltip>
  
          <a
            v-else
            :key="`2-${index}`"
            href="#"
           
          >
          
            {{ link.title }}
            <span
              v-if="link.label"
              :class="cn(
                'ml-auto',
                link.variant === 'default'
                  && 'text-background dark:text-white',
              )"
            >
              {{ link.label }}
            </span>
          </a>
        </template>
      </nav>
    </div>
  </template>
  