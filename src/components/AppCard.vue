<script>

export default {
    name: 'AppCard',
    props: {
        info: Object,
        myImg: String
    },
    data() {
        return {
            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png',
            }
        }
    }
}

</script>

<template>
    <!-- FILM -->
    <div class="card_container my-5">

        <!-- FrontSide -->
        <div class="card_side front">
            <!-- IMG -->
            <img v-if="info.poster_path !== null" :src="myImg + info.poster_path"
                :alt="info.original_title || info.original_name">

            <!-- Se non ho l'img -->
            <div v-if="info.poster_path === null">
                <h4>NO IMAGE FOUND FOR</h4> {{ info.title || info.name }}
            </div>

        </div>

        <!-- BackSide -->
        <div class="card_side back">
            <!-- TITOLO -->
            <h6>Title: {{ info.title || info.name }}</h6>

            <!-- TITOLO ORIGINALE -->
            <h6>Original Title: {{ info.original_title || info.original_name }}</h6>

            <!-- LINGUA -->
            <div>
                <img class="flag"
                    :src="flags[info.original_language] ? flags[info.original_language] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png'"
                    :alt="info.original_language">
            </div>

            <!-- VOTO -->
            <h6>Average Vote: {{ info.vote_average }}</h6>
        </div>

    </div>

    <!-- TV SERIES -->
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.flag {
    width: 50px;
}
</style>
