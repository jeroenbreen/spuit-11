<script>
    import { differenceInDays, format, addDays } from 'date-fns';

    import main from '@/tools/main';

    export default {
        name: 'vaccine-day-shot',
        components: {},
        props: {
            country: Object,
            shot: Object,
            vaccinationDayIndex: Number
        },
        computed: {
            infections() {
                return main.getInfectionsForDay(this.dayIndexOfEffect);
            },
            dayIndexOfEffect() {
                return main.getDayIndexOfEffect(this.vaccinationDayIndex, this.shot);
            },
            dateOfEffect() {
                return format(addDays(main.dayZero, this.dayIndexOfEffect), 'dd-MM-yyyy')
            },
            situationIsKnown() {
                return main.getSituationForDay(this.dayIndexOfEffect)
            },
            preventedInfections() {
                return main.getPreventedInfectionsForDay(this.country, this.vaccinationDayIndex, this.shot)
            },
            preventedDeceased() {
                return main.getDeceasedFromInfections(this.preventedInfections);
            },
            preventedDeceasedTotal() {
                return main.getPreventedDeceasedForRange(this.country, [0, this.vaccinationDayIndex], this.shot);
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="vaccine-day-shot">
        <div class="vaccine-day-shot__title">
            Prik {{shot.title}}
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Datum effectief ⁴
            </div>
            <div class="vaccine-day__value">
                {{dateOfEffect}} ({{dayIndexOfEffect}})
            </div>
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Effectiviteit ⁵
            </div>
            <div class="vaccine-day__value">
                {{shot.effectivity}}
            </div>
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Infecties ⁶
            </div>
            <div class="vaccine-day__value">
                {{Math.round(infections)}}
                <span v-if="!situationIsKnown">⁸</span>
            </div>
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Infecties voorkomen ⁶ ⁷
            </div>
            <div class="vaccine-day__value">
                {{Math.round(preventedInfections)}}
            </div>
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Overlijdens voorkomen deze dag ⁹
            </div>
            <div class="vaccine-day__value">
                {{Math.round(preventedDeceased)}}
            </div>
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Overlijdens voorkomen totaal vanaf dag 0
            </div>
            <div class="vaccine-day__value">
                {{Math.round(preventedDeceasedTotal)}}
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccine-day-shot {

        .vaccine-day-shot__title {
            background: #ddd;
            padding: 4px 8px;
        }
    }
</style>