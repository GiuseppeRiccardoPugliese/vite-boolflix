<script>

export default {
    name: 'AppHeader',
}

</script>

<template>
    <section class="header_container bg-dark p-2">
        <div class="container d-flex justify-content-between">
            <h2 class="text-danger m-0">BoolFlix</h2>
            <div class="d-flex">
                <input placeholder="Found a Film/TV Series" type="text">
                <button type="button" class="btn btn-danger ms-2">Search</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

input::placeholder {
    text-align: center;
}
</style>
