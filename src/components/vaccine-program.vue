<script>
    import VaccineDay from "./vaccine-day";
    export default {
        name: 'vaccine-program',
        components: {VaccineDay},
        props: {
            country: Object
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="vaccine-program">
        <div class="vaccine-program__title">
            Vaccinatie-programma
        </div>
        <div class="vaccine-program__days">
            <vaccine-day
                v-for="day in country.vaccineProgram"
                :country="country"
                :day="day"/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccine-program {

        .vaccine-program__title {
            margin-bottom: 4px;
        }

        .vaccine-program__days {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>