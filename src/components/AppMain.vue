<script>
//Importo lo store
import { store } from '../store';

//Importo la card contente i film e le serie tv
import AppCard from './AppCard.vue'

export default {
    name: 'AppMain',
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <!-- Sect for FILM -->
    <h3>Film</h3>
    <div>
        <AppCard v-for="film in store.filmList" :key="film.id" :info="film" />
    </div>

    <!-- Sect for TV series -->
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
