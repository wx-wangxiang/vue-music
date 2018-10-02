<template>
  <div>
    推荐页面
  </div>
</template>

<script>
  import { getRecommend } from 'api/recommend';

  export default {
    created() {
      this._getRecommend();
    },
    methods: {
      _getRecommend() {
        getRecommend();
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>