// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pineapple', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Sharkboy and Lava Girl\'s house'
      }
    },
    series: [{
      name: 'Lava Girl',
      data: [6, 1, 0, 4, 2]
    }, {
      name: 'Sharkboy',
      data: [6, 5, 7, 3, 0]
    }]
  });
