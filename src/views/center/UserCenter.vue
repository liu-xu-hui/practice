<template>
  <div v-if="info">
    <LayoutContent>
      <template #head>
        <span>最近参与的话题</span>
      </template>
      <div v-if="info.recent_replies.length">
        <TopicItem
          v-bind="item"
          v-for="item in info.recent_replies"
          :key="item.id"
        />
      </div>
    </LayoutContent>
  </div>
</template>

<script>
import { getUserInfo } from "../../api";
import TopicItem from "../../components/TopicItem.vue";
export default {
  components: { TopicItem },

  data() {
    return {
      info: null,
    };
  },
  watch: {
    "$route.params.loginname": {
      async handler(val) {
        const res = await getUserInfo(val);
        this.info = res.data;
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>