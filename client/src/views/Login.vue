<template>
  <div id="login-page">
    <div class="login-box align-items-center">
      <img src="../assets/quiz-logo.webp" alt="" width="100px" />
      <form>
        <h2>Welcome</h2>
        <p>Please Enter Your Username Below</p>
        <input v-model="username" type="text" class="form-control" /><br />
        <button class="btn btn-primary" @click="login">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  sockets: {
    connect () {
      console.log('connected')
    }
  },
  methods: {
    login () {
      localStorage.setItem('username', this.username)
      this.$socket.emit('username', { username: this.username })
      this.$router.push('/');
    }
  }
}
</script> 

<style scoped>
#login-page {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(45deg, #328f8a, #08ac4b);
  padding-top: 140px;
}

.login-box {
  text-align: center;
  background-color: #eaffd0;
  width: 22%;
  height: 60vh;
  margin: auto;
  border-radius: 8%;
  padding: 30px 50px;
}
</style>