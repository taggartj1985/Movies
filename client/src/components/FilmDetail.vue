<template lang="html">
  <div>
   <h3>{{film.title}}</h3>
   <p>Director: {{film.crew.director}}</p>
   <p>Writer: {{film.crew.writer}}</p>
   <p>Plot: {{film.plot}}</p>
 </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
</style>
