<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow>
  </van-nav-bar>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'NavBar',
  components: {
    'van-nav-bar': NavBar
  }
}
</script>
