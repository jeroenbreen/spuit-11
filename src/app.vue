<script>
    import countries from '@/data/countries';
    import vaccin from '@/data/vaccin';
    import situation from '@/data/situation';
    import country from "./components/country";

    export default {
        name: 'app',
        components: {
            country
        },
        data() {
            return {
                countries: countries
            }
        },
        props: {},
        computed: {
            germanEquivalent() {
                let germany, netherlands, equivalent, populationRatio;
                germany = this.countries[0];
                netherlands = this.countries[1];
                populationRatio = netherlands.population / germany.population;
                equivalent = {...netherlands};
                equivalent.name = 'Nederland achterstand';
                equivalent.vaccinationProgram = germany.vaccinationProgram.map((day, index) => {
                    return {
                        date: day.date,
                        n: Math.round(day.n * populationRatio) - netherlands.vaccinationProgram[index].n,
                        locked: true
                    }
                });
                equivalent.vaccin = vaccin;
                equivalent.situation = situation;
                return equivalent;
            },
            allCountries() {
                return [...this.countries, this.germanEquivalent];
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="app">
        <country
            v-for="country in allCountries"
            :country="country"/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/index.scss';
    @import '@/styles/variables.scss';

    .app {
        background: #f5eedc;
        padding: 20px;
        overflow: auto;
        height: 100%;
        display: flex;
    }
</style>