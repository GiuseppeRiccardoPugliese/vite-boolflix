<script>
//Importo axios
import axios from 'axios';

//Importo lo store
import { store } from './store';

//Importo i componenti figli
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppCard,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilmCard() {

      axios.get()
        .then((res => {

        }))
        .catch((err => {
          console.log("Questi sono gli errori", err);
        }));
    }
  },
  created() {

  }
}

</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
