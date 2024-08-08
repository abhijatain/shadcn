<script setup>

const props = defineProps({
  accounts: { type: Array, default: () => [] },
  mails: { type: Array, default: () => [] },
  defaultLayout: { type: Array, default: () => [265, 440, 655] },
  defaultCollapsed: { type: Boolean, default: false },
  navCollapsedSize: { type: Number, default: 0 }
})

const selectedMail = ref(props.mails[0].id)
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

const filteredMailList = computed(() => {
  let output = []
  const searchValue = debouncedSearch.value?.trim()
  if (!searchValue) {
    output = props.mails
  } else {
    output = props.mails.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
    })
  }
  return output
})

const selectedMailData = computed(() => props.mails.find(item => item.id === selectedMail.value))

</script>

<template>
    <TooltipProvider :delay-duration="0">
      <ResizablePanelGroup
        id="resize-panel-group-1"
        direction="horizontal"
        class="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]" :min-size="30">
            <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div class="relative">
                  <Input v-model="searchValue" placeholder="Search" class="pl-8" />
                </div>
              </form>
            </div>
            <div value="all" class="m-0">
              <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" />
            </div>
        </ResizablePanel>
       
        <ResizablePanel id="resize-panel-3" :default-size="defaultLayout[2]">
          <MailDisplay :mail="selectedMailData" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
</template>
  