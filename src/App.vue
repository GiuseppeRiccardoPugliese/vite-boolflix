<script>
//Importo axios
import axios from 'axios';

//Importo lo store
import { store } from './store';

//Importo i componenti figli
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilmAndSeries() {

      //Dichiaro le mie variabili
      let filmURL = store.apiCallMovie;
      let seriesURL = store.apiCallSeries;

      //Se non e' vuoto l'input, mi compone l'url dell'api relativa alla richiesta del film dell'utente
      if (store.searchText !== '') {

        //Compongo il mio URL
        filmURL += `?${store.apiKey}&query=${store.searchText}`;
        seriesURL += `?${store.apiKey}&query=${store.searchText}`;

        //Chiamata axios per il FILM
        axios.get(filmURL)
          .then((res => {
            store.filmList = res.data.results;
            console.log(store.filmList);
          }))
          .catch((err => {
            console.log("Questi sono gli errori", err);
          }));

        //Chiamata axios per le SERIE TV
        axios.get(seriesURL)
          .then((res => {
            store.seriesList = res.data.results;
          }))
          .catch((err => {
            console.log("Questi sono gli errori", err);
          }));

        //RESET (input)
        store.searchText = '';
      }
    },
  },
}

</script>

<template>
  <!-- Header -->
  <AppHeader @search="getFilmAndSeries" />

  <div class="container">

    <!-- Main -->
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
