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
    console.log('Prevented cases, assuming effectivity=' + effectivity
		+ ', shot number: ' + shot
		+ ', R=' + currentSituation.r
		+ ', days for effect: ' + vaccine.daysForEffect
	       )
    console.log('Day=day of campaign; day_eff=corresponding day the vaccine becomes effective;\n'
		+ 'n_inf: number of infections on day_eff; p_vac: fraction of vaccinated population;\n'
		+ 'prev: prevented cases on day_eff; tot_prev: total prevented cases');
    console.log('Day\tDay_eff\tn_inf\tp_vac\tprev\tTot_prev\n')
    for (let i = start; i < end; i++) {
        let dayOfEffect = i + vaccine.daysForEffect + vaccine.shots[shot].wait;
	n_inf = getInfectedOnDay(dayOfEffect)
	p_vac = getChanceToBeVaccinated(i)
	delta = n_inf * p_vac * effectivity;
        total += delta;
	if (i < 5 || i >= end-5)
	    console.log(i
			+ '\t' + dayOfEffect
			+ '\t' + n_inf.toPrecision(3)
			+ '\t' + p_vac.toPrecision(3)
			+ '\t' + delta.toPrecision(3)
			+ '\t' + total.toPrecision(3)
		       );
	else if (i == 5)
	    console.log('...\n');

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

np0 = getPreventedDeceasedForRange(0, daysBehind, 0);
np1 = getPreventedDeceasedForRange(0, daysBehind, 1);
console.log('Prevented deceased total:' + (np0 + np1));
console.log('Assuming mortality: ' + (mortality80plus*100) + '%');
