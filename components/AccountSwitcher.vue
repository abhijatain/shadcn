<script setup>

import { cn } from '@/lib/utils'

const props = defineProps({
  isCollapsed: Boolean,
  accounts: Array
})

const selectedEmail = ref(props.accounts[0].email)
const selectedEmailData = computed(() => props.accounts.find(item => item.email === selectedEmail.value))
</script>


<template>
    <Select v-model="selectedEmail">
      <SelectTrigger
        aria-label="Select account"
        :class="cn(
          'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
          { 'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden': props.isCollapsed },
        )"
      >
       
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="account in props.accounts" :key="account.email" :value="account.email">
          <div class="flex items-center gap-3 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
           
            {{ account.email }}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  </template>
  