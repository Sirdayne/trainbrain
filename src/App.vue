<template>
  <div id="app">
    <img style="display: none;" src="./assets/logo.png">
    <header-menu></header-menu>
    <router-view/>
  </div>
</template>

<script>

import headerMenu from '@/components/headerMenu'

export default {
  name: 'App',
  components: {
    headerMenu,
  }
}
</script>

<style>

</style>
