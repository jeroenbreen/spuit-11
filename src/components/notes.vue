<script>
    import vaccin from '@/data/vaccin';

    export default {
        name: 'notes',
        components: {},
        props: {},
        data(){
            return {
                vaccin
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="notes">
        ¹ Voor 'Nederland achterstand' geldt: aantal vaccinaties Duitsland * (inwoners Nederland / inwoners Duitsland) - aantal vaccinaties Nederland<br>
        ² Vaccinaties op die dag uitgevoerd.<br>
        ³ De vaccinatiegraad in de leeftijdsgroep 80+ die op die dag bereikt is.<br>
        ⁴ Het duurt {{vaccin.shots[0].daysForEffect}} dagen voordat de vaccinatie effectief is.<br>
        ⁵ <a href="https://www.bmj.com/content/371/bmj.m4826" target="_blank">https://www.bmj.com/content/371/bmj.m4826</a>.<br>
        ⁶ Totaal infecties opgelopen op de dag dat de vaccinatie effectief is, zie ⁴.<br>
        ⁷ Aantal infecties voorkomen dankzij vaccinatie (infecties (op dag van effect) * percentage gevaccineerd (op dag vaccinatie) * effectiviteit)
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .notes {

    }
</style>