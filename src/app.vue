<script>
    import countries from '@/data/countries';
    import vaccin from '@/data/vaccin';
    import situation from '@/data/situation';
    import country from "./components/country";
    import Notes from "./components/notes";

    export default {
        name: 'app',
        components: {
            Notes,
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
            },
            dates() {
                return this.countries[0].vaccinationProgram.map(d => d.date);
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="app">
        <div class="content">
            <div class="header">
                <div class="header__country"></div>
                <div class="header__dates">
                    <div
                            v-for="(date, index) in dates"
                            class="header__date">
                        {{date}} ({{index}})
                    </div>
                </div>
            </div>
            <div class="countries">
                <country
                        v-for="country in allCountries"
                        :country="country"/>
            </div>
        </div>
        <notes/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/index.scss';
    @import '@/styles/variables.scss';

    .app {
        background: $bg;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;

        .content {
            height: calc(100% - 170px);
            overflow: auto;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            padding: 20px;

            .header {
                display: flex;
                margin-bottom: 8px;

                .header__country {
                    width: 100px;
                    flex-shrink: 0;
                }

                .header__dates {
                    display: flex;

                    .header__date {
                        width: 230px;
                        padding: 8px;
                        font-weight: 800;
                        margin-right: 4px;
                    }
                }
            }
        }

        .notes {
            height: 170px;
            padding: 10px 20px;
        }
    }
</style>