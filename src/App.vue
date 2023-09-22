<template>
  <div>
   <router-view></router-view>
  </div>
</template>

<script>
import {mapMutations}from 'vuex'
  export default {
    created() {
      this.getInfo()
    },
    methods: {
      ...mapMutations(['getInfo'])
    }
   
  }
</script>

<style lang="less" scoped>

</style>