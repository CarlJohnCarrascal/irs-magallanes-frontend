<script setup>
import { RouterView } from 'vue-router'

import useAccount from './composables/account'

const { checkLoginStatus, isLogin } = useAccount();
//isLogin.value = true;

</script>

<template>
  <div class="">
      <RouterView />
  </div>
</template>

<style></style>
