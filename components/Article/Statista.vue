<template>

<div class="flex items-center justify-between">
                 <div class="space-y-1">
                   <h2 class="text-2xl font-semibold tracking-tight">
                     Stats News
                   </h2>
                   <p class="text-sm text-muted-foreground">
                     Top picks for you. Updated daily.
                   </p>
                 </div>
                 <Button class="mx-auto md:mx-0 mt-3  flex">Read More</Button>
               </div>
               <Separator class="my-4" />
               <div class="relative">
                 <ScrollArea class=" w-96 md:w-full whitespace-nowrap">
                   <div class="flex space-x-4 pb-4">
                    <img height="300"  width="300" src="https://cdn.statcdn.com/Infographic/images/normal/32694.jpeg"/>
                    <img height="300" width="300" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg"/>
                    <img height="300" width="300" src="https://cdn.statcdn.com/Infographic/images/normal/32732.jpeg"/>
                    <img height="300" width="300" src="https://cdn.statcdn.com/Infographic/images/normal/32725.jpeg"/>
                    
                </div>
                   <ScrollBar orientation="horizontal" />
                 </ScrollArea>
               </div>
               <Separator class="my-4" />
            
</template>