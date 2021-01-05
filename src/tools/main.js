import situation from '@/data/situation';
import vaccin from '@/data/vaccin';

// concepts
// 'vaccinationDay' is the number of days since start vaccination program of Germany (2020-12-26), starting with 0

const dayZero = new Date('2020-12-26');

// see data-preparation/cases-to-situation/main.js -> getMortality()
// measured data from 2020-07-01 to 2021-01-04
const mortality80plus = 0.10181230836618485;


const getSituationForDay = function(day) {
    return situation[day];
};

const getInfectionsForDay = function(day) {
    let lastSituation, daysApart, growthPerDay;
    if (getSituationForDay(day)) {
        return getSituationForDay(day).infections;
    } else {
        lastSituation = situation[situation.length - 1];
        daysApart = day - situation.length + 1;
        growthPerDay = Math.pow(lastSituation.Rt, (1/4));
        return lastSituation.infections * Math.pow(growthPerDay, daysApart);
    }
};

const getPreventedDeceasedForRange = function(country, range, shot) {
    let totalInfections = 0;
    for (let i = range[0]; i <= range[1]; i++) {
        totalInfections += getPreventedInfectionsForDay(country, i, shot);
    }
    return getDeceasedFromInfections(totalInfections);
};

const getPreventedInfectionsForDay = function(country, vaccinationDay, shot) {
    let dayIndexOfEffect, infections, effectivity, percentageVaccinated;
    dayIndexOfEffect = getDayIndexOfEffect(vaccinationDay, shot);
    infections = getInfectionsForDay(dayIndexOfEffect);
    effectivity = shot.effectivity;
    percentageVaccinated = getPercentageVaccinated(country, vaccinationDay);
    return infections * effectivity * percentageVaccinated;
};

const getPercentageVaccinated = function(country, vaccinationDay) {
    let total = 0;
    for (let i = 0; i <= vaccinationDay; i++) {
        total += Number(country.vaccinationProgram[i].n);
    }
    return total / country.population80plus;
};

const getDayIndexOfEffect = function(vaccinationDay, shot) {
    return vaccinationDay + getDaysLaterOfEffect(shot);
};

const getDaysLaterOfEffect = function(shot) {
    let shotIndex = vaccin.shots.indexOf(shot);
    if (shotIndex === 0) {
        return vaccin.shots[0].daysForEffect;
    } else {
        return vaccin.shots[1].wait + vaccin.shots[1].daysForEffect;
    }
};

const getDeceasedFromInfections = function(infections) {
    return infections * mortality80plus;
};

export default {
    getInfectionsForDay,
    getPreventedInfectionsForDay,
    getPercentageVaccinated,
    getDayIndexOfEffect,
    getDaysLaterOfEffect,
    getSituationForDay,
    getDeceasedFromInfections,
    getPreventedDeceasedForRange,
    mortality80plus,
    dayZero
}