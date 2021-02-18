<template>
  <section>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.score }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.users;
        }
    }
}
</script>

<style>
</style>