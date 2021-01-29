<template>
<div id="components-layout-demo-basic">
  <a-layout>
      <a-layout-header>
      </a-layout-header>
      <a-layout-content>
        <div class="login-input">
          <span class='login-text'>用户名</span>
          <a-input ref="userNameInput" v-model="userName" style="width: 30%" placeholder="请输入用户名">
            <a-icon slot="prefix" type="user" />
          </a-input>
          <br/>
          <br/>
          <span class='login-text'>密&nbsp;&nbsp;&nbsp;码</span>
          <a-input  ref="passWordInput" v-model="passWord" style="width: 30%" placeholder="请输入密码">
            <a-icon slot="prefix" type="lock" />
          </a-input>
          <br/>
          <br/>
          <a-space size='large'>
            <a-button type="primary" ref="confirm" @click="confirm">
              登入
            </a-button>
            <a-button @click="emitEmpty">
              重置
            </a-button>
          </a-space>
        </div>
      </a-layout-content>
      <a-layout-footer>
      </a-layout-footer>
  </a-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    confirm () {
      this.$router.push({name: 'firstPage'})
    },
    emitEmpty () {
      this.$refs.userNameInput.focus()
      this.userName = ''
      this.passWord = ''
    }
  }
}

</script>
<style scoped>
.login-input{
  text-align: center;
  margin-left:20%;
  margin-top:15vh;
  width: 60%;
  height: 150px;
}
.login-text{
  font-weight: 600;
  font-size: 16px;
}
#components-layout-demo-basic {
  padding: 0;
  margin: 0;
  height: 100vh;
}
#components-layout-demo-basic .ant-layout-header{
  padding: 0;
  margin: 0;
  background: url(../assets/login-header.png);
  height: 25vh;
}
#components-layout-demo-basic .ant-layout-content{
  padding: 0;
  margin: 0;
  background: url(../assets/login-content.jpg);
  height: 45vh;
}
#components-layout-demo-basic .ant-layout-footer {
  background: url(../assets/login-footer.png);
  padding: 0;
  margin: 0;
  height: 30vh;
}

</style>
