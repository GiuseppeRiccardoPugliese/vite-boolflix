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
    <section class="my-2" v-if="store.filmList.length !== 0">
        <h2 class="text-danger fw-bold my-3">Film</h2>

        <div class="row gy-4 justify-content-center">
            <AppCard v-for="film in store.filmList" :key="film.id" :info="film" :myImg="store.apiCallPhoto" />
        </div>
    </section>

    <!-- Sect for TV series -->
    <section class="my-2" v-if="store.seriesList.length !== 0">
        <h2 class="text-danger fw-bold my-3">TV Series</h2>

        <div class="row gy-4 justify-content-center">
            <AppCard v-for="tvSeries in store.seriesList" :key="tvSeries.id" :info="tvSeries" :myImg="store.apiCallPhoto" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
