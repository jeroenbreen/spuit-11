// https://data.overheid.nl/dataset/11634-covid-19-karakteristieken-per-casus-landelijk
const url = 'files/COVID-19_casus_landelijk.json';

// infection is 4 days before a case administration (?)
const date = '2020-12-30';


$.getJSON( url, function( data ) {
    let totalInfections80plus = 0;
    for (let item of data) {
        // todo we should make a correction for DPL (Date of first Positive Labresult) and DON Date of Notification
        if ((item.Agegroup === '80-89' || item.Agegroup === '90+') && item.Date_statistics === date) {
            totalInfections80plus++;
        }
    }
    console.log(totalInfections80plus);
});