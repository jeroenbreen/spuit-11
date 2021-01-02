<script>
    import { differenceInDays, format, addDays } from 'date-fns';

    export default {
        name: 'vaccine-day-shot',
        components: {},
        props: {
            day: Object,
            country: Object,
            vaccin: Object,
            shot: Object,
            percentage: Number
        },
        computed: {
            daysLater() {
                let shotIndex, days;
                shotIndex = this.vaccin.shots.indexOf(this.shot);
                if (shotIndex === 0) {
                    return this.vaccin.shots[0].daysForEffect;
                } else {
                    return this.vaccin.shots[1].wait + this.vaccin.shots[1].daysForEffect;
                }
            },
            relatedDate() {
                return addDays(new Date(this.day.date), this.daysLater);
            },
            relatedDateFormatted() {
                return format(this.relatedDate, 'yyyy-MM-dd');
            },
            relatedDateIndex() {
                let startDate = new Date(this.country.vaccinationProgram[0].date);
                return differenceInDays(this.relatedDate, startDate)
            },
            situationIsKnown() {
                return this.country.situation[this.relatedDateIndex];
            },
            infections() {
                let lastSituation, daysApart, growthPerDay;
                if (this.situationIsKnown) {
                    return this.situationIsKnown.infections;
                } else {
                    lastSituation = this.country.situation[this.country.situation.length - 1];
                    daysApart = differenceInDays(this.relatedDate, new Date(lastSituation.date));
                    growthPerDay = Math.pow(lastSituation.Rt, (1/4));
                    return lastSituation.infections * Math.pow(growthPerDay, daysApart);

                }
            },
            prevented() {
                return this.infections * this.shot.effectivity * this.percentage;
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
                {{relatedDateFormatted}} ({{relatedDateIndex}})
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
            </div>
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Infecties voorkomen ⁶ ⁷
            </div>
            <div class="vaccine-day__value">
                {{Math.round(prevented)}}
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