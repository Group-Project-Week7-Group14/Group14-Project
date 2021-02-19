<template>
  <section>
    <div @click="answer" class="my-2" id="option">
      {{ huruf }}. {{ option }}
    </div>
  </section>
</template>

<script>
export default {
  props: ['option', 'huruf', 'index'],
  methods: {
    answer() {
      let id = Number(this.$store.state.question.id)
      this.$socket.emit('answer', {
        questionId: id,
        username: localStorage.getItem('username'),
        index: Number(this.index)
      });
    }
  }
}
</script>

<style>
#option {
  width: 250px;
  background-color: rgb(32, 4, 58);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 10px;
  cursor: pointer;
  transition: 0.2s;
}

#option:hover {
  background-color: rgb(89, 66, 110);
}
</style>