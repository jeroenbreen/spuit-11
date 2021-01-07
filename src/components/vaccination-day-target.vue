<script>
    export default {
        name: 'vaccination-day-target',
        components: {},
        props: {
            target: {
                type: Object,
                required: true
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="vaccination-day-target">
        <div class="vaccination-day-target__label">
            {{target.title}}
        </div>
        <div class="vaccination-day-target__vaccinations">
            {{target.vaccinations}}
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .vaccination-day-target {
        display: flex;

        .vaccination-day-target__label {
            width: 70%;
        }

        .vaccination-day-target__vaccinations {
            width: 30%;
            text-align: right;
        }
    }
</style>