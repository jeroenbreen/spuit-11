// source for number of vaccines given
// https://ourworldindata.org/covid-vaccinations?country=NLD~DEU#daily-vaccination-rates

const countries = [
    {
        name: 'Duitsland',
        population: 80219999,
        vaccinationProgram: [
            {
                date: '2020-12-26',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2020-12-27',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2020-12-28',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 18446
                    }
                ]
            }, {
                date: '2020-12-29',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 30105
                    }
                ]

            }, {
                date: '2020-12-30',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 38710
                    }
                ]
            }, {
                date: '2020-12-31',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 38354
                    }
                ]
            }, {
                date: '2021-01-01',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 36725
                    }
                ]
            }, {
                date: '2021-01-02',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 37966
                    }
                ]
            }, {
                date: '2021-01-03',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 36004
                    }
                ]
            }, {
                date: '2021-01-04',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 40028
                    }
                ]
            }, {
                date: '2021-01-05',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 41397
                    }
                ]
            }, {
                date: '2021-01-06',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 41048
                    }
                ]
            }, {
                date: '2021-01-07',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 43534
                    }
                ]
            }, {
                date: '2021-01-08',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 46734
                    }
                ]
            }, {
                date: '2021-01-09',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 47334
                    }
                ]
            }, {
                date: '2021-01-10',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 49964
                    }
                ]
            }, {
                date: '2021-01-11',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 51863
                    }
                ]
            }, {
                date: '2021-01-12',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 51863
                    }
                ]
            }, {
                date: '2021-01-13',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 51863
                    }
                ]
            }
        ]
    }, {
        name: 'Nederland',
        population: 17440000,
        population80plus: 822088,
        vaccinationProgram: [
            {
                date: '2020-12-26',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2020-12-27',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2020-12-28',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2020-12-29',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2020-12-30',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2020-12-31',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-01',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-02',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-03',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-04',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-05',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 0
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-06',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 40
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-07',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 9000
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-08',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 10500
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-09',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 8000
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-10',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 6250
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-11',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 5900
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-12',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 6500
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }, {
                date: '2021-01-13',
                targets: [
                    {
                        title: 'Zorg',
                        vaccinations: 6500
                    }, {
                        title: '80+',
                        vaccinations: 0
                    }
                ]
            }
        ]
    }
];

export default countries;