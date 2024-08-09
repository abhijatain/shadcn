<script lang="ts" setup>
import {

Home,
LineChart,
PanelLeft,

Package,
Package2,



Settings,
ShoppingCart,
Users2,
} from 'lucide-vue-next'
</script>

<template>
   
  <div class="flex  flex-row  border-t-0">
    <div class="h-full">
      <SidebarLeft />
    </div>
    
    <div class="md:w-[70%] flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
      <h1 class="font-bold text-center text-4xl p-4 font-mono">
    NOSIDES
  </h1>
  <Breadcrumb class="flex flex-row hidden">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <a href="/">Dashboard</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Article</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
  </Breadcrumb>
      <header class="w-full fixed bottom-0 left-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button size="icon" variant="outline" class="sm:hidden">
              <PanelLeft class="h-5 w-5" />
              <span class="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="sm:max-w-xs">
            <nav class="grid gap-6 text-lg font-medium">
              <a
                href="#"
                class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
                <span class="sr-only">Acme Inc</span>
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Home class="h-5 w-5" />
                Dashboard
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <ShoppingCart class="h-5 w-5" />
                Orders
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-foreground"
              >
                <Package class="h-5 w-5" />
                Products
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Users2 class="h-5 w-5" />
                Customers
              </a>
              <a
                href="#"
                class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <LineChart class="h-5 w-5" />
                Settings
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        
       <div class="flex flex-row justify-around w-full md:hidden">
        <Home class="h-5 w-5 " />
        <Newspaper class="h-5 w-5" />
     
        <Search class=" h-5 w-5 " />
        <DarkMode class=" h-5 w-5 " />
       </div>
        
       
      </header>
      <Separator class="mb-4 md:hidden" />
      <main class="mb-16 md:mb-0">
        
        <slot  />
      </main>
    </div>
    <div class="h-full md:w-[15%] lg:w-[30%] hidden md:block">
      <SidebarRight />
    </div>
    
  </div>
</template>