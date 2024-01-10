import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    searchText: '',
    apiCallMovie: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'api_key=4b3e58a5fa0f4a8f362a3efca1e61306',
});