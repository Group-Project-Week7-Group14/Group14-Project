<template>
  <div id="home-page">
    <div class="player-list">
      <h3>Player List</h3>
      <hr />
      <ListUser></ListUser>
    </div>

    <div class="start" v-if="!isStart">
      <h1>What are you waiting for?</h1>
      <h3>Start game</h3>
      <br />
      <button
        class="btn-lg btn-outline-primary"
        id="startButton"
        style="width: 150px; border-radius: 20px"
        @click="getQuestion"
      >
        Start
      </button>
    </div>
    <div v-if="isStart" class="question-box">
      <div class="question">
        <Question :question="question.question"></Question>
      </div>
      <div class="options">
        <Option index="0" :option="question.options[0]" huruf="A"></Option>
        <Option index="1" :option="question.options[1]" huruf="B"></Option>
        <Option index="2" :option="question.options[2]" huruf="C"></Option>
        <Option index="3" :option="question.options[3]" huruf="D"></Option>
      </div>
    </div>

    <div class="exit">
      <button
        class="btn-lg btn-outline-danger"
        id="exitButton"
        style="width: 150px; border-radius: 20px"
        @click="logout"
      >
        Exit Game
      </button>
    </div>
  </div>
  <!-- <div class="home text-center">
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
  </div> -->
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

<style>
#home-page {
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background-image: linear-gradient(45deg, #ff75a0, #fce38a);
  display: flex;
}

.question-box {
  width: 40%;
  height: 50vh;
  margin-left: 200px;
  padding: 10px;
}

.player-list {
  text-align: center;
  margin-left: 20px;
  height: 400px;
  width: 22%;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  background-color: #defcf9;
}

.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px;
}

.card-lists {
  height: 40vh;
}
.card-lists {
  overflow: auto;
}

.start {
  text-align: center;
  margin-left: 250px;
  margin-top: 50px;
}

.exit {
  position: absolute;
  left: 7%;
  top: 77%;
}
</style>
