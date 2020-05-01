<template>
  <section>
    <movie-header />
    <films-grid />
    <film-detail v-if="selectedFilm" :film="selectedFilm"/>
  </section>
</template>

<script>
import FilmsGrid from '@/components/FilmsGrid';
import MovieHeader from '@/components/MovieHeader';
import FilmDetail from '@/components/FilmDetail';
import {eventBus} from '@/main.js'

export default {
  name: 'app',
  data() {
    return {
      selectedFilm: null,
    }
  },
  mounted() {
    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
    })
  },
  components: {
    'films-grid': FilmsGrid,
    'movie-header': MovieHeader,
    'film-detail': FilmDetail,
  }
}
</script>

<style>

body {
  font-family: 'Source Serif Pro', serif;

  background-color: #E1E5F2;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  color: #1F7A8C;
}

h1, h2, h3 {
  color: #022B3A;
  font-family: 'Skranji', cursive;
}
</style>
