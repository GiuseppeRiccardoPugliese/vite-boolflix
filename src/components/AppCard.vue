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
    },
    methods: {
        arrotonda(vote) {
            return Math.ceil(vote);
        }
    }
}

</script>

<template>
    <div class="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">

        <!-- FILM -->
        <div class="card_container">

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
                <div class="info">
                    <h6>Title: {{ info.title || info.name }}</h6>
                </div>

                <!-- TITOLO ORIGINALE -->
                <div class="info">
                    <h6>Original Title: {{ info.original_title || info.original_name }}</h6>
                </div>

                <!-- LINGUA -->
                <div class="info">
                    <img class="flag"
                        :src="flags[info.original_language] ? flags[info.original_language] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png'"
                        :alt="info.original_language">
                </div>

                <!-- VOTO -->
                <div class="info">

                    <!-- Ciclo il numero del voto richiamando la funzione che arrotonda SEMPRE per eccesso e la divido per 2. Passando l'icon per farsi' che escano tot stelline piene a seconda del voto -->
                    <span v-for="number in this.arrotonda(info.vote_average / 2)"><i class="fa-solid fa-star"></i></span>

                    <!-- Partendo da 5, sottraggo il voto medio arrotondato per eccesso grazie alla funzione e lo divido per 2. Passando l'icon della stella vuota a seconda del numero sottratto -->
                    <span v-for="number in (5 - this.arrotonda(info.vote_average / 2))"><i
                            class="fa-regular fa-star"></i></span>
                </div>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.flag {
    width: 50px;
}

.card_container {
    width: 100%;
    height: 100%;
    perspective: 1000px;

    .card_side {
        width: 100%;
        height: 100%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .info {
            padding: 1rem;
        }
    }

    .front {
        transform: rotateY(0deg);
    }

    .back {
        transform: rotateY(180deg);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background-color: #fff;
    }

    &:hover .front {
        transform: rotateY(-180deg);
    }

    &:hover .back {
        transform: rotateY(0deg);
    }
}
</style>
