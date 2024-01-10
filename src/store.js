import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    seriesList: [],
    searchText: '',
    apiCallMovie: 'https://api.themoviedb.org/3/search/movie',
    apiCallSeries: 'https://api.themoviedb.org/3/search/tv',
    apiKey: 'api_key=4b3e58a5fa0f4a8f362a3efca1e61306',
    apiCallPhoto: 'https://image.tmdb.org/t/p/w342',
});