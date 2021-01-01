<script>
    export default {
        name: 'vaccine-day',
        components: {},
        props: {
            day: Object,
            country: Object
        },
        computed: {
            percentage() {
                let index, total;
                total = 0;
                index = this.country.vaccineProgram.indexOf(this.day);
                for (let i = 0; i < index + 1; i++) {
                    total += Number(this.country.vaccineProgram[i].n);
                }
                return Math.round(1000 * total / this.country.population80plus) / 10 + '%';

            }
        },
        methods: {}
    }
</script>


<template>
    <div class="vaccine-day">
        <div class="vaccine-day__cell vaccine-day__date">
            {{day.date}}
        </div>
        <div class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Vaccineren
            </div>
            <div class="vaccine-day__date">
                <input v-model="day.n"/>
            </div>
        </div>
        <div
            v-if="country.population80plus"
            class="vaccine-day__cell">
            <div class="vaccine-day__label">
                Procent 80ers
            </div>
            <div class="vaccine-day__date">
                {{percentage}}
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccine-day {
        border: 1px solid #ddd;
        width: 100px;
        margin: 4px;

        .vaccine-day__cell {
            border-bottom: 1px solid #ddd;
            padding: 8px;

            .vaccine-day__label {

            }

            input {
                width: 100%;
            }

            &.vaccine-day__date {
                background: #555;
                color: #fff;
            }

            &:last-child {
                border-bottom: 0;
            }
        }
    }
</style>