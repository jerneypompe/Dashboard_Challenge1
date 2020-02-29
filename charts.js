var ctx = document.getElementById('dataChart1');
var dataChart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    datasets: [
      {
        label: "Temperature outside °C", //title chart
        fill: false,
        backgroundColor: 'pink',
        borderColor: 'lightblue',
        pointBorderColor: 'red',
        pointBackgroundColor: 'pink',
        pointBorderWidth: 1.5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'black',
        pointRadius: 3.5,
        pointHitRadius: 5,
        data: [-95, -118, -85, -55, -35, -41, -18, 0, 15, 32, 55, 50, 63, 38, 20, 12, -4, -26, -20, -30, -35, -53, -60, -78, -100],// the actual data buitentemperatuur
      },
      {
        label: "Temperature inside °C", //title chart
        data: [22, 20, 21, 20, 19, 19, 18, 19.5, 21, 22, 22.5, 21, 22, 22, 21.5, 21, 21, 20, 20, 19, 20, 19.5, 20, 19, 18],// the actual data binnentemperatuur
        fill: true,
        backgroundColor: 'blue',
      }
    ]
  }
})
