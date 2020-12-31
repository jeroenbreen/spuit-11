let populationGermany, populationNetherlands,
    vaccinesPerDayGermany, vaccinesPerDayNetherlands,
    population80plus, vaccine, daysBehind, currentSituation,
    mortality80plus;

populationGermany = 80219999;
populationNetherlands = 17440000;
vaccinesPerDayGermany = 100000;
vaccinesPerDayNetherlands = Math.round((populationNetherlands / populationGermany) * vaccinesPerDayGermany);

// from here everything for the Netherlands
population80plus = 822088;

vaccine ={
    name: 'Pfizer',
    shots: [
        {
            effectivity: 0.52,
            wait: 0
        },  {
            effectivity: 0.43,
            wait: 21
        }
    ],
    daysForEffect: 12,
    daysBetweenShots: 21
};

// (27 dec vs 18 jan)
daysBehind = 22;

currentSituation = {
    // days away from start Germany
    day: 0,
    // needs more attention
    // average of 20 - 23 dec (2356 total)
    cases80plus: 170,
    r: 1.1
};

// needs more attention
// week 51 309 fatalities, week 48 1634 cases
mortality80plus = 0.19;




function getInfectedOnDay(day) {
    let length, growthPerDay;
    length = day - currentSituation.day;
    growthPerDay = Math.pow(currentSituation.r, (1/4));
    return currentSituation.cases80plus * Math.pow(growthPerDay, length);
}

function getChanceToBeVaccinated(day) {
    return (day * vaccinesPerDayNetherlands) / population80plus;
}

function getPreventedCasesForRange(start, end, shot) {
    let total, effectivity;
    total = 0;
    effectivity = vaccine.shots[shot].effectivity;
    for (let i = start; i < end; i++) {
        let dayOfEffect = i + vaccine.daysForEffect + vaccine.shots[shot].wait;
        total += getInfectedOnDay(dayOfEffect) * getChanceToBeVaccinated(i) * effectivity;
    }
    return total;
}

function getPreventedDeceasedForRange(start, end, shot) {
    return Math.round(getPreventedCasesForRange(start, end, shot) * mortality80plus);
}

// console.log(getInfectedForRange(0, daysBehind));
// console.log(getPreventedCasesForRange(0, daysBehind, 0));
// console.log(getPreventedDeceasedForRange(0, daysBehind, 0));
// console.log(getPreventedDeceasedForRange(0, daysBehind, 1));
console.log(getPreventedDeceasedForRange(0, daysBehind, 0) + getPreventedDeceasedForRange(0, daysBehind, 1));
