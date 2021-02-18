<template>
  <section>
    <div id="question">{{ question }}</div>
  </section>
</template>

<script>
export default {
  props: ['question']
}
</script>

<style>
#question {
  width: 100%;
  height: 10vh;
  background-color: rgb(32, 4, 58);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
</style>