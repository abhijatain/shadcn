<template>
<aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav class="flex flex-col items-center gap-4 px-2 py-4">
        <a
          href="/"
          class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home class="h-5 w-5" />
                <span class="sr-only">Dashboard</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              Dashboard
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <ShoppingCart class="h-5 w-5" />
                <span class="sr-only">Orders</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              Orders
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package class="h-5 w-5" />
                <span class="sr-only">Products</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              Products
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 class="h-5 w-5" />
                <span class="sr-only">Customers</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              Customers
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart class="h-5 w-5" />
                <span class="sr-only">Analytics</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              Analytics
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DarkMode class=" h-5 w-5 " />
       
      </nav>
      <nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings class="h-5 w-5" />
                <span class="sr-only">Settings</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              Settings
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
</template>


<script setup lang="ts">
import {

  Home,
  LineChart,

 
  Package,
  Package2,

 
 
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-vue-next'

</script>