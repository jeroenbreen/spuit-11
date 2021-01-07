<script>
    import VaccinationDayTarget from "./vaccination-day-target";
    export default {
        name: 'vaccination-day-targets',
        components: {VaccinationDayTarget},
        props: {
            day: {
                type: Object,
                required: true
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="vaccination-day-targets">
        <vaccination-day-target
            v-for="target in day.targets"
            :target="target"/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccination-day-targets {

    }
</style>