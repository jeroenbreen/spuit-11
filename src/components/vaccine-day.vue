<script>
    import VaccineDayShot from "./vaccine-day-shot";
    import main from '@/tools/main';

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
            vaccinationDayIndex() {
                return this.country.vaccinationProgram.indexOf(this.day);
            },
            percentage() {
                return main.getPercentageVaccinated(this.country, this.vaccinationDayIndex);
            },
            percentageFormatted() {
                return Math.round(1000 * this.percentage) / 10 + '%';
            },
            preventedDeceasedTotal() {
                let shot1, shot2;
                shot1 = main.getPreventedDeceasedForRange(this.country, [0, this.vaccinationDayIndex], this.shots[0]);
                shot2 = main.getPreventedDeceasedForRange(this.country, [0, this.vaccinationDayIndex], this.shots[1]);
                return shot1 + shot2;
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="vaccine-day">
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Vaccins ²
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
                Pct 80+ ³
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
                :shot="shot"
                :country="country"
                :vaccination-day-index="vaccinationDayIndex"/>
        </div>
        <div
            v-if="country.vaccin"
            class="vaccine-day-shot">
            <div class="vaccine-day-shot__title">
                Totaal van de 2 shots
            </div>
            <div class="vaccine-day__cell">
                <div class="vaccine-day__label">
                    Overlijdens voorkomen totaal
                </div>
                <div class="vaccine-day__value">
                    {{Math.round(preventedDeceasedTotal)}}
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccine-day {
        width: 230px;
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