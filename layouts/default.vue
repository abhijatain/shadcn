<script lang="ts" setup>
import {

Home,
LineChart,
PanelLeft,

Package,
Package2,
Search,
ShoppingCart,
Users2,
} from 'lucide-vue-next'
import DarkMode from '~/components/DarkMode.vue';
</script>

<template>
  <div class=" flex flex-row justify-between p-2 items-center max-w-[1900px] mx-auto">
    <div class="flex flex-row gap-4 items-center font-semibold">
      <Avatar>
        <AvatarImage src="https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_640.png" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 class="font-bold text-center text-3xl p-4 font-mono">
        NOSIDES
      </h1>
   
   
      <a class="hidden md:block">Home</a>
      <a class="hidden md:block">For You</a>
      <a class="hidden md:block">Local</a>
      <a class="hidden md:block">Stats</a>
    </div>
    <div class="md:hidden ">
      <DarkMode />
    </div>
  
  <div class="md:flex flex-row gap-4 hidden">
    <DarkMode />
    <div class="relative w-full max-w-sm items-center">
    <Input id="search" type="text" placeholder="Search..." class="pl-10" />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground" />
    </span>
  </div>
    <Button>Subscribe</Button>
    <Button variant="outline">Login</Button>
  </div>
  </div>
   <Separator />
   <ScrollArea >
   <div class=" flex flex-row p-2 mx-8 gap-4 justify-center">
      <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    <Badge variant="secondary">
      Secondary+
    </Badge>
    
    <Badge variant="secondary">
      Secondary+
    </Badge>
   </div>
   <ScrollBar orientation="horizontal" />
  </ScrollArea>
   <Separator />
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
  
  <div class="flex  flex-row  border-t-0 max-w-[1900px] mx-auto px-4">
    <div class="h-full md:w-[20%]  hidden md:block">
      <SidebarLeft2 />
    </div>
  
    <div class="md:w-[55%] flex flex-col  ">
     
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
    <div class="h-full md:w-[25%]  hidden md:block">
      <SidebarRight />
    </div>
    
  </div>
  <Footer />
</template>