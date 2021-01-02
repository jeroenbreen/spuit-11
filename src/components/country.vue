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
            {{country.name}} <span v-if="country.situation">¹</span>
        </div>
        <vaccination-program
            :country="country"/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .country {
        display: flex;
        margin-bottom: 20px;

        .country__name {
            font-weight: 700;
            margin-bottom: 12px;
            width: 100px;
            flex-shrink: 0;
        }
    }
</style>