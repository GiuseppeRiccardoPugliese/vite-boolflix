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
    getFilmCard() {

      let filmURL = store.apiCallMovie;

      //Se non e' vuoto l'input, mi compone l'url dell'api relativa alla richiesta del film dell'utente
      if (store.searchText !== '') {
        filmURL += `?${store.apiKey}&query=${store.searchText}`;

        //Chiamata axios per il film
        axios.get(filmURL)
          .then((res => {
            store.filmList = res.data.results;
          }))
          .catch((err => {
            console.log("Questi sono gli errori", err);
          }));
        // store.searchText = '';
      }
    }
  },
  created() {
    this.getFilmCard();
  }
}

</script>

<template>
  <!-- Header -->
  <AppHeader @search="getFilmCard" />

  <!-- Main -->
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
