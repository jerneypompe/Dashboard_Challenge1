// Code van dataChart1
var ctx = document.getElementById('dataChart1');
var dataChart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    datasets: [
      {
        label: "Temperature outside °C", //title chart
        fill: 'start',
        backgroundColor: 'pink',
        borderColor: 'lightblue',
        pointBorderColor: 'red',
        pointBackgroundColor: 'pink',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'black',
        pointRadius: 2.5,
        pointHitRadius: 5,
        data: [-95, -118, -85, -55, -35, -41, -18, 0, 15, 32, 55, 50, 63, 38, 20, 12, -4, -26, -20, -30, -35, -53, -60, -78, -100],// the actual data buitentemperatuur
      },
      {
        label: "Temperature inside °C", //title chart
        data: [22, 20, 21, 20, 20.1, 19, 20, 19.5, 21, 22, 22.5, 21, 22, 22, 21.5, 21, 21, 20, 20, 19, 20, 19.5, 20, 19, 19.5],// the actual data binnentemperatuur
        fill: 'orgin',
        backgroundColor: 'blue',
        borderColor: 'blue',
        pointRadius: 2,
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Day Temperature',
      fontSize: 18,
      position: 'top',
    },
    legend: {
      position: 'bottom',
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Hours'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: '°Celsius'
        }
    }]
  }
}
});
// Code van dataChart2
var ctx = document.getElementById('dataChart2');
var dataChart2 = new Chart(ctx, {
  type: 'bar', //horizontalBar grotere schermen
  data: {
    labels: ['Exercise', 'Looking at View', 'Sleep', 'Eat', 'Watch TV', 'Contact Family'],
    datasets: [
    {
      label: "Hours per day",
      borderColor: ['#8e44ad', '#3498db', '#1abc9c', '#f1c40f', '#e67e22', '#e74c3c'],
      backgroundColor: [
        'rgba(142, 68, 173, 0.2)', 
        'rgba(52, 152, 219, 0.2)', 
        'rgba(26, 188, 156, 0.2)', 
        'rgba(241, 196, 15, 0.2)', 
        'rgba(230, 126, 34, 0.2)', 
        'rgba(231, 76, 60, 0.2)'
        ],
      borderWidth: 1,
      data: [2, 4, 8, 3.2, 1.5, 0.5, 2],
    }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Average Activities',
      fontSize: 18,
      position: 'top',
    },
    animation: {
      duration: 2000,
      easing: 'easeInCubic',
    },
    scales: {
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Hours',
          fontStyle: 'bold',
          fontColor: 'black',
        }
      }],
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Activities',
          fontStyle: 'bold',
          fontColor: 'black',
        }
    }]
    }
  }
});
