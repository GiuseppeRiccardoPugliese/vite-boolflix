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
    <span>{{ info.title }}</span>

    <!-- TITOLO ORIGINALE -->
    <span>{{ info.original_title }}</span>

    <!-- LINGUA -->
    <span>{{ info.original_language }}</span>

    <!-- VOTO -->
    <span>{{ info.vote_average }}</span>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
