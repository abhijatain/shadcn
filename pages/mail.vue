<script " setup>

import { accounts, mails } from '../data/mails'
</script>

<template>

  <div class=" flex-col flex">
    <Mail
      :accounts="accounts"
      :mails="mails"
      :nav-collapsed-size="4"
    />
  </div>
</template>