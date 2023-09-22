<template>
  <div>
    <header class="home">
      <div class="inner">
        <div class="logos">
          <router-link to="/">
            <div class="logo">
              <img src="../../assets/logo.png" alt="" />
            </div>
          </router-link>
        </div>
        <div>
          <span>{{ userInfo.username }}</span>
          <el-button @click="logout" type="info">退出</el-button>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    logout() {
      window.localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  background-color: #444;
  .inner {
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    .logos {
      flex-grow: 1;
      .logo {
        color: aqua;
        font-size: 24px;
        user-select: none;
        margin-top: 10px;
      }
    }
  }
}

main {
  width: 1200px;
  margin: 20px auto;
}
</style>