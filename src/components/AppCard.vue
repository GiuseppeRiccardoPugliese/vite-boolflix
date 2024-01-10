<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    }
}

</script>

<template>
    <!-- TITOLO -->
    <div>Title: {{ info.title }}</div>

    <!-- TITOLO ORIGINALE -->
    <div>Original Title: {{ info.original_title }}</div>

    <!-- LINGUA -->
    <div>Original Lang: {{ info.original_language }}</div>

    <!-- VOTO -->
    <div>Average Vote: {{ info.vote_average }}</div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
