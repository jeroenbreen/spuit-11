// https://data.overheid.nl/dataset/11634-covid-19-karakteristieken-per-casus-landelijk
const url = 'files/COVID-19_casus_landelijk.json';

// infection is 4 days before a case administration (?)
const date = '2020-12-26';


$.getJSON( url, function( data ) {
    //getMortality(data);
    getSituation(data);
});

function getSituation(rows) {
    let situation, ms;
    situation = [];
    ms = new Date(date).getTime();

    function getDay(date) {
        let day = {
            date,
            infections: 0
        };
        for (let entry of situation) {
            if (entry.date === date) {
                return entry;
            }
        }
        situation.push(day);
        return day;
    }

    for (let item of rows) {
        // todo we should make a correction for DPL (Date of first Positive Labresult) and DON Date of Notification
        let time, date;
        date = item.Date_statistics;
        time = new Date(date).getTime();
        if ((item.Agegroup === '80-89' || item.Agegroup === '90+') && time >= ms) {
            let day = getDay(date);
            day.infections++;
        }
    }
    console.log(JSON.stringify(situation));
}

function getMortality(rows) {
    let ms, cases, deceased;
    ms = new Date('2020-07-01').getTime();
    cases = 0;
    deceased = 0;

    for (let item of rows) {
        let time = new Date(item.Date_statistics).getTime();
        if ((item.Agegroup === '80-89' || item.Agegroup === '90+') && time >= ms) {
            cases++;
            if (item.Deceased === 'Yes') {
                deceased++;
            }
        }
    }
    console.log('Deceased: ' + deceased);
    console.log('Cases: ' + cases);
    console.log('Mortality: ' + (deceased / cases));
}