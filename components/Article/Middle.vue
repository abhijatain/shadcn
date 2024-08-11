<template>
    <div class="w-full">
        <div class="mt-4 flex flex-row justify-between mx-auto container">
            <h1 class="font-bold text-3xl">Political News</h1>
            <Button>Read More</Button>
        </div>
        <div class="mt-4 flex flex-col md:flex-row md:gap-6 max-w-[1400px] mx-auto">
            <div class="md:w-[50%] p-8  flex gap-4 flex-col md:border-r">
                <h1 class="font-bold text-xl">Latest Israel-Hamas Conflict News</h1>
                <img  src="https://cdn.statcdn.com/Infographic/images/normal/32725.jpeg" class=" object-cover border rounded-lg shadow md:h-[500px]"/>
                <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                <ProgressBar :value="85" color="#7A2048" lean="Right" text="Content right  85% " height="16"/>
                <h1 class="font-bold text-2xl">
                    Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny
                </h1>
            </div>
            
            <div class="md:w-[50%] p-8  flex flex-col justify-start md:gap-8 gap-4">
              
                <div class="flex gap-6"> 
                    <div class="w-[50%] flex flex-col gap-4">
                        <img  src="https://cdn.statcdn.com/Infographic/images/normal/32732.jpeg" class="border rounded-lg shadow"/>
                        <ProgressBar :value="85" color="#7A2048" lean="Right" text="Content right  85% " height="16"/>
                        
                        <h1 class=" ">
                            Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny
                        </h1>
                    </div>
                    <div class="w-[50%] flex flex-col gap-4"">
                        <img  src="https://cdn.statcdn.com/Infographic/images/normal/32694.jpeg" class="border rounded-lg shadow"/>
                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                
                        <h1 class=" ">
                            Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny
                        </h1>
                    </div>
                </div>
                <div class="md:flex flex-col gap-4 hidden"> 
                  

                    <div class="antialiased  w-full shadow rounded" >
                        <div class=" flex flex-col items-center justify-center">
                            <div class="flex flex-row rounded-lg overflow-hidden ">
                            <!--E11-->
                            <!-- <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>-->
                            <img class="h-[200px] w-[200px]  object-cover" src="https://cdn.statcdn.com/Infographic/images/normal/27391.jpeg" alt="Home in Countryside" />

                            <div class="px-3 ">
                            
                                <p class=" font-semibold text-lg  text-wrap">Boxer Lin Yu-ting wins gold, following Imane Khelif to conclude an Olympics filled with scrutiny</p>

                                <div class="flex gap-3 flex-col">

                        
                        <div class="flex gap-2 py-2 flex-col w-[280px] mb-6">
                        <ProgressBar :value="85" color="#1E2761" lean="Right" text="Content right  85% " height="16"/>
                                        <ProgressBar :value="65" color="#408EC6" lean="Center" text="Author views center  65% " height="16"/>
                        </div>

                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                                        
            </div>
        </div>
    </div>
</template>