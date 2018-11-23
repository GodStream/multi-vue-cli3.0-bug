<template>
  <div id="app">
    <nav-bar></nav-bar>
    <home-index></home-index>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import HomeIndex from './views/HomeIndex'
export default {
  components: {
    HomeIndex,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.search-left {
  display: flex;
  align-items: center;
}
</style>
