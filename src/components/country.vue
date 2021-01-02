<script>
    import vaccinationProgram from "./vaccination-program";

    export default {
        name: 'country',
        components: {
            vaccinationProgram
        },
        props: {
            country: Object
        },
        computed: {

        },
        methods: {}
    }
</script>


<template>
    <div class="country">
        <div class="country__name">
            {{country.name}}
        </div>
        <vaccination-program
            :country="country"/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .country {
        margin-right: 24px;
        background: #fff;
        padding: 8px;

        .country__name {
            font-weight: 700;
            margin-bottom: 12px;
        }
    }
</style>