<template>
  <div class="home text-center">
    <button @click="logout" class="btn btn-secondary">Logout</button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button v-if="!isStart" @click="getQuestion" class="btn btn-primary mt-4">
      Start
    </button>
    <div class="row justify-content-around">
      <div v-if="isStart" class="col-5">
        <Question :question="question.question"></Question>
        <div class="row justify-content-around mt-4">
          <div class="col">
            <Option index="0" :option="question.options[0]" huruf="A"></Option>
          </div>
          <div class="col">
            <Option index="1" :option="question.options[1]" huruf="B"></Option>
          </div>
        </div>
        <div class="row justify-content-around mt-4">
          <div class="col">
            <Option index="2" :option="question.options[2]" huruf="C"></Option>
          </div>
          <div class="col">
            <Option index="3" :option="question.options[3]" huruf="D"></Option>
          </div>
        </div>
      </div>

      <div class="col-4">
        <ListUser></ListUser>
      </div>
    </div>
  </div>
</template>

<script>
import Question from '../components/Question.vue';
import Option from '../components/Option.vue';
import ListUser from '../components/ListUser.vue';
export default {
  name: 'Home',
  components: {Question, Option, ListUser},
  data() {
    return {
      id: 1
    }
  },
  computed: {
    question() {
      return this.$store.state.question;
    },
    isStart() {
      return this.$store.state.isStart;
    }
  },
  methods: {
    getQuestion() {
        this.$socket.emit('getQuestion', {questionId: this.id});
        this.$socket.emit('start');
    },
    logout() {
      this.$socket.emit('logout', {
        username: localStorage.getItem('username')
      });
      localStorage.clear();
      this.$router.push('/login');
    }
  },
  created() {
  }
}
</script>
