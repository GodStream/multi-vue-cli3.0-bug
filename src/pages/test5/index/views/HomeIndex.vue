<template>
  <div class="gj-container">
    <a href="/test5/list">test4/list</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList: [
        { imageUrl: require('@/assets/banner/banner005.png') },
        { imageUrl: require('@/assets/banner/banner1.png') },
        { imageUrl: require('@/assets/banner/banner009.png') },
        { imageUrl: require('@/assets/banner/banner100.png') }
      ],
      advertiseList: [],
      vehicleList: []
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  padding-bottom: 60px;

}
.home-card {
  margin-top: 10px;
  background-color: #ffffff;
  padding: 0 5px;
  &__header {
    padding-top: 10px;
  }
}
.card-image {
  width: 100%;
  // height: 180px;
  object-fit: cover;
  display: block;
}
.horizontal-list {
  padding: 20px 0;
}
</style>
