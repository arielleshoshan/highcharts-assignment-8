
// Chart 1 below
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Human Sex Trafficking in the United States of America (2019)'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/additional-data-collections/human-trafficking/human-trafficking/table-1.xls"' +
            'target="_blank">ucr.fbi.gov</a>'
    },
    xAxis: {
        categories: ['Texas', 'Minnesota', 'Nevada', 'Florida', 'Wisconsin', 'Utah', 'North Carolina', 'Washington', 'Georgia', 'Arizona', 'West Virginia', 'Colorado', 'Tennessee', 'Virginia', 'Illinois', 'Maryland', 'Oregon', 'Massachusetts', 'Kentucky', 'Missouri', 'Delaware', 'South Carolina', 'Rhode Island', 'Indiana', 'Louisiana', 'Connecticut', 'Ohio', 'Alaska', 'New Mexico', 'Vermont', 'Hawaii', 'Maine', 'New Hampshire', 'Oklahoma', 'Michigan', 'New Jersey', 'North Dakota', 'Montana', 'Idaho', 'Kansas', 'Mississippi', 'South Dakota', 'Arkansas'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Offenses',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' people '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {

    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2019',
        data: [450, 188, 182, 117, 106, 75, 56, 56, 54, 53, 50, 48, 46, 41, 37, 37, 37, 35, 28, 27, 25, 22, 12, 10, 10, 8, 8, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 3, 2, 2, 2, 2, 2, 1]
    }]
});

// Chart 2 is below here.

Highcharts.chart('container2', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Globally Detected Trafficking Victims (2017)'
    },
     subtitle: {
        text: 'Source: <a ' +
            'href="https://dataunodc.un.org/dp-trafficking-persons"'+
            'target="_blank">dataunodc.un.org</a>'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} Victims'

    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Europe',
        data: [{
            name: "Belarus",
            value: 75
        }, {
            name: "Bulgaria",
            value: 368
        },
        {
        		name: "Czech",
            value: 14
        },
        {
            name: "Croatia",
            value: 29
        },
        {
            name: "Denmark",
            value: 61
        },
        {
            name: "Estonia",
            value: 10
        },
        {
            name: "Finland",
            value: 56
        },
        {
            name: "Greece",
            value: 26
        },
        {
            name: "Hungary",
            value: 386
        },
        {
            name: "Luxembourg",
            value: 16
        },
        {
        		name: "Macedonia",
            value: 5
        },
        {
            name: "Montenegro",
            value: 5
        },
        {
            name: "Netherlands",
            value: 952
        }, {
            name: "Poland",
            value: 94
        }, {
            name: "Romania",
            value: 334
        },
        {
            name: "Russian Federation",
            value: 46
        },
        {
            name: "Slovakia",
            value: 88
        },
        {
            name: "Slovenia",
            value: 25
        },
        {
            name: "Ukraine",
            value: 198

        }]
    }, {
        name: 'Africa',
        data: [{
            name: "Algeria",
            value: 28
        },
        {
            name: "Benin",
            value: 535
        },
        {
        		name: "Côte d'Ivoire",
            value: 14
        },
        {
            name: "Egypt",
            value: 38
        },
        {
            name: "Guinea",
            value: 30
        },
        {
            name: "Kenya",
            value: 352
        },
        {
            name: "Mauritius",
            value: 9
        },
        {
            name: "Morocco",
            value: 11
        },
        {
            name: "Nigeria",
            value: 901
        },
        {
            name: "Rwanda",
            value: 30
        },
        {
            name: "Ivory Coast",
            value: 7.3
        },
        {
            name: "Sierra Leone",
            value: 10
        },
        {
            name: "Tunisia",
            value: 195
        },
        {
        }]
    }, {
        name: 'Oceania',
        data: [{
            name: "Australia",
            value: 21
        },
        {
            name: "New Zealand",
            value: 5

        }]
    }, {
        name: 'Americas',
        data: [{
            name: "Argentina",
            value: 97
        },
        {
            name: "Bolivia",
            value: 145
        },
        {
            name: "Canada",
            value: 62
        },
        {
            name: "Columbia",
            value: 52
        },
        {
            name: "Costa Rica",
            value: 60
        },
        {
            name: "Dominican Republic",
            value: 25
        },
        {
            name: "Ecuador",
            value: 68
        },
        {
            name: "El Salvador",
            value: 28
        },
        {
            name: "Guatemala",
            value: 333
        },
        {
            name: "Guyana",
            value: 110
        },
        {
        		name: "Honduras",
            value: 47
        },
        {
        		name: "Mexico",
            value: 72
      	},
        {
        		name: "Panama",
            value: 34
        },
        {
        		name: "Peru",
            value: 445
        },
        {
       		 	name: "Venezuela",
            value: 14

        }]
     }, {

        name: 'Asia',
        data: [{
            name: "Armenia",
            value: 9
        },
        {
            name: "Bahrain",
            value: 33
        },
        {
            name: "Bangladesh",
            value: 733
        },
        {
            name: "Cyprus",
            value: 9
        },
        {
            name: "Georgia",
            value: 5
        },
        {
            name: "Jordan",
            value: 14
        },
        {
            name: "Kuwait",
            value: 5
        },
        {
            name: "Kyrgyzstan",
            value: 5
        },
        {
            name: "Lebanon",
            value: 57
        },
        {
            name: "Malaysia",
            value: 419
        },
        {
            name: "Mongolia",
            value: 118
        },
        {
            name: "Myanmar",
            value: 355
        },
        {
            name: "Oman",
            value: 33
        },
        {
            name: "Phillipines",
            value: 203
        },
        {
            name: "Tajikstan",
            value: 22
        },
        {
            name: "Thailand",
            value: 295
        },
        {
            name: "Timor-Leste",
            value: 5
        },
        {
            name: "Turkmenistan",
            value: 5
        },
        {
            name: "Uzbekistan",
            value: 573

        }]
    }]
});
