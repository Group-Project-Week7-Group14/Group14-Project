<template>
  <div id="home-page">
    <div class="player-list">
      <h3>Player List</h3>
      <hr>
      <div class="card-lists">
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
      </div>
    </div>

    <div class="start" v-if="condition_start">
      <h1>What are you waiting for?</h1>
      <h3>Start game</h3><br>
      <button class="btn-lg btn-outline-primary" id="startButton" style="width:150px; border-radius:20px" @click="showQuestion">Start</button>
    </div>
    <!-- <div class="row justify-content-center question-box">
      <div class="col-4">
        <Question></Question>
        <div class="row justify-content-around mt-4">
          <div class="col">
            <Option></Option>
          </div>
          <div class="col">
            <Option></Option>
          </div>
        </div>
        <div class="row justify-content-around mt-4">
          <div class="col">
            <Option></Option>
          </div>
          <div class="col">
            <Option></Option>
          </div>
        </div>
      </div>
    </div> -->
    <div v-if="condition" class="question-box">
      <div class="question">
         <Question></Question>
      </div>
      <div class="options">
         <Option></Option>
         <Option></Option>
         <Option></Option>
         <Option></Option>
      </div>
    </div>

    <div class="exit">
      <button class="btn-lg btn-outline-danger" id="exitButton" style="width:150px; border-radius:20px" @click="exitGame">Exit Game</button>
    </div>
  </div>
</template>

<script>
import Question from '../components/Question.vue';
import Option from '../components/Option.vue';
import PlayerCard from '../components/PlayerCard.vue';
export default {
  name: 'Home',
  data () {
    return {
      condition: false,
      condition_start: true
    }
  },
  components: {Question, Option, PlayerCard},
  methods: {
    showQuestion () {
      this.condition = true
      this.condition_start = false
      document.getElementById('exitButton').disabled = true
    },
    exitGame () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
#home-page {
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background-image: linear-gradient(45deg, #ff75a0, #fce38a);
  display: flex;
}

.question-box{
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
.card-lists{
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
  top: 77%
}
</style>
