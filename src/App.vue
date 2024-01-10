<script>
//Importo axios
import axios from 'axios';

//Importo lo store
import { store } from './store';

//Importo i componenti figli
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {

  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template></template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
