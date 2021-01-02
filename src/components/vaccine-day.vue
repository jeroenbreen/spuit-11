<script>
    import VaccineDayShot from "./vaccine-day-shot";
    export default {
        name: 'vaccine-day',
        components: {VaccineDayShot},
        props: {
            day: Object,
            country: Object
        },
        computed: {
            shots() {
                return this.country.vaccin.shots;
            },
            dayIndex() {
                return this.country.vaccinationProgram.indexOf(this.day);
            },
            percentage() {
                let total = 0;
                for (let i = 0; i < this.dayIndex + 1; i++) {
                    total += Number(this.country.vaccinationProgram[i].n);
                }
                return total / this.country.population80plus;
            },
            percentageFormatted() {
                return Math.round(1000 * this.percentage) / 10 + '%';
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="vaccine-day">
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Vaccins
            </div>
            <div class="vaccine-day__value">
                <input
                    v-if="!day.locked"
                    v-model="day.n"/>
                <span v-else>{{day.n}}</span>
            </div>
        </div>
        <div
            v-if="country.population80plus"
            class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Pct 80+
            </div>
            <div class="vaccine-day__value">
                {{percentageFormatted}}
            </div>
        </div>
        <div
            v-if="country.vaccin"
            class="vaccine-day__shots">
            <vaccine-day-shot
                    v-for="shot in shots"
                    :vaccin="country.vaccin"
                    :shot="shot"
                    :country="country"
                    :day="day"
                    :percentage="percentage"/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccine-day {
        width: 200px;
        background: #fff;
        margin-right: 4px;

        .vaccine-day__cell {
            border-bottom: 1px solid $bg;
            display: flex;

            .vaccine-day__label {
                width: 50%;
                border-right: 1px solid $bg;
                padding: 4px 8px;
            }

            .vaccine-day__value {
                width: 50%;
                padding: 4px 8px;

                input {
                    width: 100%;
                }
            }


            &:last-child {
                border-bottom: 0;
            }
        }

        .vaccine-day__shots {
            border-top: 1px solid #555;
        }
    }
</style>