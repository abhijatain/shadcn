<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'Modi’s Financial Reforms and Their Impact on the Economy'



const articles2 = ref([
  
  {
    title: "Modi’s Financial Reforms and Their Impact on the Economy",
    source: 'The Guardian',
    date: 'May 19, 2024',
    topicLean: 70,
    authorLean: 85,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article reviews Modi’s financial reforms, highlighting their impact on the economy with a left-leaning perspective.',
    authorLeanReason: 'The author maintains a neutral stance but provides a critical perspective on the financial reforms.',
    replies: 230,
    views: '280K',
    topicColor: '#1E2761', // Left
    authorColor: '#408EC6', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi’s View on Modi’s Economic Reforms",
    source: 'The New Indian Express',
    date: 'May 20, 2024',
    topicLean: 75,
    authorLean: 90,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article covers Rahul Gandhi’s perspective on Modi’s economic reforms, reflecting left-leaning views.',
    authorLeanReason: 'The author provides a balanced view but highlights criticisms of the reforms.',
    replies: 160,
    views: '225K',
    topicColor: '#1E2761', // Left
    authorColor: '#408EC6', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Economic Policies Under Modi: A Comprehensive Review",
    source: 'Livemint',
    date: 'May 21, 2024',
    topicLean: 60,
    authorLean: 75,
    topicLeanText: 'Topic covers center views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article offers a comprehensive review of economic policies under Modi, with a center-leaning perspective.',
    authorLeanReason: 'The author presents a balanced view with a focus on the effectiveness of the policies.',
    replies: 210,
    views: '270K',
    topicColor: '#408EC6', // Light Green (Center)
    authorColor: '#408EC6', // Light Green (Center)
    topicLeanValue: 'center',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi’s View on Modi’s Economic Reforms",
    source: 'The New Indian Express',
    date: 'May 20, 2024',
    topicLean: 75,
    authorLean: 90,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article covers Rahul Gandhi’s perspective on Modi’s economic reforms, reflecting left-leaning views.',
    authorLeanReason: 'The author provides a balanced view but highlights criticisms of the reforms.',
    replies: 160,
    views: '225K',
    topicColor: '#1E2761', // Left
    authorColor: '#408EC6', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi’s   View on Modi’s Economic Reforms",
    source: 'The New Indian Express',
    date: 'May 20, 2024',
    topicLean: 75,
    authorLean: 90,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article covers Rahul Gandhi’s perspective on Modi’s economic reforms, reflecting left-leaning views.',
    authorLeanReason: 'The author provides a balanced view but highlights criticisms of the reforms.',
    replies: 160,
    views: '225K',
    topicColor: '#1E2761', // Left
    authorColor: '#408EC6', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
  {
    title: "Rahul Gandhi’s  View on Modi’s Economic Reforms",
    source: 'The New Indian Express',
    date: 'May 20, 2024',
    topicLean: 75,
    authorLean: 90,
    topicLeanText: 'Topic covers left views',
    authorLeanText: "Author views are center",
    topicLeanReason: 'The article covers Rahul Gandhi’s perspective on Modi’s economic reforms, reflecting left-leaning views.',
    authorLeanReason: 'The author provides a balanced view but highlights criticisms of the reforms.',
    replies: 160,
    views: '225K',
    topicColor: '#1E2761', // Left
    authorColor: '#408EC6', // Light Green (Center)
    topicLeanValue: 'left',
    authorLeanValue: 'center'
  },
]);
</script>

<template>
  <Accordion type="single" class="w-full text-start" collapsible :default-value="defaultValue">
    <AccordionItem v-for="item in articles2" :key="item.title" :value="item.title">
      <AccordionTrigger class="text-start">{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        <ArticleCard :article="item" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>