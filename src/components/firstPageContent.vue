<template>
  <a-layout>
    <a-layout-header :style="{ background: '#EFEFEF', padding:'0 10px', height:'7vh'}" >
      <span class="FPC-header-text">主页</span>
    </a-layout-header>
    <a-layout-content>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '90vh'}">
        <a-row>
          <a-col :span='4'>
            <div :style="{backgroundColor: '#56E67E', height:'5vh', width:'100%'}"/>
          </a-col>
          <a-col :span='1'>
          </a-col>
          <a-col :span='4'>
            <div :style="{backgroundColor: '#56E67E', height: 8 + 'px', width:'100%'}" class="oui-line">
              <div class="oui-line-active" :style="{height: 8 + 'px'}"/>
            </div>
          </a-col>
          <a-col :span='1'>
          </a-col>
          <a-col :span='4'>
            <div :style="{backgroundColor: '#56E67E', height: 8 + 'px', width:'100%'}"/>
          </a-col>
          <a-col :span='1'>
          </a-col>
          <a-col :span='4'>
            <div :style="{backgroundColor: '#56E67E', height: 8 + 'px', width:'100%'}" class="oui-line">
              <div class="oui-line-active" :style="{height: 8 + 'px'}"/>
            </div>
          </a-col>
          <a-col :span='1'>
          </a-col>
          <a-col :span='4'>
            <div :style="{backgroundColor: '#56E67E', height: 8 + 'px', width:'100%'}"/>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{textAlign: 'center', height: '3vh'}">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  data () {
  },
  computed: {
  },
  methods: {
  }
}

</script>
<style scoped>
.FPC-header-text{
  font-size: 20px;
  font-weight: 600;
}
.oui-line{
  text-align: center;
  margin: auto 10px auto;
}
.oui-line-active {
    position: relative;
    width: 10px;
    height: 5px;
    background: #09f;
    border-radius: 10px;
    animation: oui-line-active 4s ease-in-out infinite;
}
@keyframes oui-line-active {
    0% {
      left: 0;
    }
    50% {
      left: calc(100% - 10px);
    }
    100% {
      left: 0;
    }
  }

</style>
