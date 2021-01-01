<script>
    import vaccineProgram from "./vaccine-program";

    export default {
        name: 'country',
        components: {
            vaccineProgram
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
        <vaccine-program
            :country="country"/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .country {
        margin-bottom: 4px;
        background: #fff;
        padding: 8px;

        .country__name {
            font-weight: 700;
            margin-bottom: 4px;
        }
    }
</style>