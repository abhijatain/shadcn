<script setup >


const data = [
  { name: 'Mon', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Tues', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500  },
  { name: 'Wed', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500  },
  { name: 'Thurs', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500, right: Math.floor(Math.random() * 2000) + 500  },
  { name: 'Fri', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500 , right: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Sat', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500 , right: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Sun', left: Math.floor(Math.random() * 2000) + 500, center: Math.floor(Math.random() * 2000) + 500 , right: Math.floor(Math.random() * 2000) + 500 },
]
const data2 = [
  { name: 'Left', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Center', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Right', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
]


</script>

<template>
  <BarChart
    index="name"
    :data="data"
    :categories="['left', 'center','right']"
    :colors="['#0C2D57','#FFB0B0','#FC6736']"
    :rounded-corners="4"
    :type="'stacked'"
  />


  
   

</template>