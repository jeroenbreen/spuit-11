<script>
    import vaccineDay from "./vaccine-day";

    export default {
        name: 'vaccination-program',
        components: {
            vaccineDay
        },
        props: {
            country: Object
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="vaccination-program">
        <div class="vaccination-program__days">
            <vaccine-day
                v-for="day in country.vaccinationProgram"
                :country="country"
                :day="day"/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccination-program {

        .vaccination-program__days {
            //display: flex;
            //flex-wrap: wrap;
        }
    }
</style>