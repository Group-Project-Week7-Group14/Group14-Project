<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="row justify-content-center">
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
    </div>
  </div>
</template>

<script>
import Question from '../components/Question.vue';
import Option from '../components/Option.vue';
export default {
  name: 'Home',
  components: {Question, Option}
}
</script>
