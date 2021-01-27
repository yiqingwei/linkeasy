<template>
  <div class="login-input">
    <img src="../assets/logo.png">
    <br />
    <br />
    <a-input ref="userNameInput" v-model="userName" style="width: 40%" placeholder="请输入用户名">
      <a-icon slot="prefix" type="user" />
    </a-input>
    <br />
    <br />
    <a-input  ref="passWordInput" v-model="passWord" style="width: 40%" placeholder="请输入密码">
      <a-icon slot="prefix" type="lock" />
    </a-input>
    <br />
    <br />
    <a-button type="primary" ref="confirm" @click="confirm">
      确 定
    </a-button>
    <a-button @click="emitEmpty">
      重 置
    </a-button>
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
  position: relative;
  top: 250px;
  left: 20%;
  width: 60%;
  height: 150px;
}
</style>
