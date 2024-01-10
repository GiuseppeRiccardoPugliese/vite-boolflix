<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
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
    <div class="card_container my-5">
        <!-- TITOLO -->
        <h6>Title: {{ info.title }}</h6>

        <!-- TITOLO ORIGINALE -->
        <h6>Original Title: {{ info.original_title }}</h6>

        <!-- LINGUA -->
        <div>
            <img class="flag"
                :src="flags[info.original_language] ? flags[info.original_language] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png'"
                :alt="info.original_language">
        </div>

        <!-- VOTO -->
        <h6>Average Vote: {{ info.vote_average }}</h6>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.flag {
    width: 50px;
}
</style>
