<template>
  <a-layout class="components-layout">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="components-logo" />
      <a-menu theme="dark" mode="vertical">
        <a-menu-item key="1" @click="showfirstPage">
          <a-icon type="user" />
          <span class="nav-text">主页</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore" /><span>设备配置</span></span>
        <a-menu-item key="2">
          WLAN配置
        </a-menu-item>
        <a-menu-item key="3">
          4G配置
        </a-menu-item>
        <a-menu-item key="4">
          WIFI配置
        </a-menu-item>
        <a-menu-item key="5">
          桥接路由配置
        </a-menu-item>
        <a-menu-item key="6">
          RS232配置
        </a-menu-item>
        <a-menu-item key="7">
          RS232配置
        </a-menu-item>
        <a-menu-item key="8">
          RS485配置
        </a-menu-item>
        <a-menu-item key="9">
          IO配置
        </a-menu-item>
        <a-menu-item key="10">
          上报配置
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="setting" /><span>采集设备配置</span></span>
        <a-menu-item key="11">
          Option 7
        </a-menu-item>
        <a-menu-item key="12">
          Option 8
        </a-menu-item>
        <a-menu-item key="13">
          Option 9
        </a-menu-item>
        <a-menu-item key=14>
          Option 10
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="setting" /><span>其他</span></span>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
      </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <router-view/>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    },
    showfirstPage () {
      this.$router.push({name: 'firstPageContent'})
    }
  }
}
</script>

<style>
.components-layout{
  height: 100vh;
  width: 100%;
}
.components-logo {
  height: 10vh;
  width: 75%;
  /* background:url(../assets/logo.png); */
  margin: 18px;
}
</style>
