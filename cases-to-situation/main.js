// https://data.rivm.nl/covid-19/COVID-19_casus_landelijk.json
const url = 'files/COVID-19_casus_landelijk.json';

// infection is 4 days before a case administration (?)
const startDate = '2020-12-26';
// this should be 18
const waitForDataToStabilize = 5;
const msPerDay = 24 * 3600 * 1000;




$.getJSON( url, function( data ) {
    //getMortality(data);
    getSituation(data);
});

function getDateString(date) {
    let day, month, year;
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return year + '-' + month + '-' + day;
}

function getSituation(rows) {
    let situation, startDateInMs, endDateInMs;
    situation = [];

    startDateInMs = new Date(startDate).getTime();
    endDateInMs = new Date().getTime() - (waitForDataToStabilize * msPerDay);

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
        let time, date, type, dateCorrection, dateString;
        date = item.Date_statistics;
        type = item.Date_statistics_type;

        // types
        // DOO is the correct date for infection
        // DPL
        switch (type) {
            case 'DOO':
                //  Date of disease onset
                dateCorrection = 0;
                break;
            case 'DPL':
                // Date of first Positive Labresult
                dateCorrection = 4;
                break;
            case 'DON':
                // Date of Notification
                dateCorrection = 5;
                break;
        }
        time = new Date(date).getTime() - (dateCorrection * msPerDay);
        dateString = getDateString(new Date(time));

        if ((item.Agegroup === '80-89' || item.Agegroup === '90+') && time >= startDateInMs && time < endDateInMs) {
            let day = getDay(dateString);
            day.infections++;
        }
    }
    situation[situation.length - 1].Rt = 1;
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