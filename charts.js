// Code van dataChart1
var ctx = document.getElementById('dataChart1');
var dataChart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    datasets: [
      {
        label: "Temperature outside °C", //title van de chart
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
        label: "Temperature inside °C", //title van de chart
        data: [22, 20, 21, 20, 20.1, 19, 20, 19.5, 21, 22, 22.5, 21, 22, 22, 21.5, 21, 21, 20, 20, 19, 20, 19.5, 20, 19, 19.5],// the actual data binnentemperatuur
        fill: 'orgin',
        backgroundColor: 'blue',
        borderColor: 'blue',
        pointRadius: 2,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 10,
      }
  },
    title: {
      display: true,
      text: 'Day Temperature',
      fontSize: 18,
      position: 'top',
    },
    animation: {
      duration: 3500,
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
  type: 'bar', 
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
    responsive: true,
    maintainAspectRatio: false,
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
// Code van dougnutChart
var ctx = document.getElementById('doughnutChart');
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Water', 'Vegetables', 'Fruit', 'Meat', 'Fish'],
      datasets: [
        {
          label: "Pieces (thousands)",
          backgroundColor: ["#85E3FF", "#93E9BE", "#FFB5E8", "#FFABAB", "#FFFCAB"],
          data: [900,350,500,400,250],
          hoverBorderColor: '#D0D0D0', 
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 30,
      title: {
        display: true,
        text: 'Water and food reserve',
        fontSize: 18,
        position: 'top',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          padding: 18,
        }  
      },
      animation: {
         animateScale: true,
         animateRotate: true,
         duration: 2500,
        }
    }
});
//Code van horizontalBar chart
var ctx = document.getElementById('horizontalBar');
var horizontalBar = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['Earth'],
    datasets: [ 
    {
      label: "Traveled Distance",
      backgroundColor: 'darkblue',
      borderColor: 'black',
      borderWidth: 1.5,
      data: [35],
    },
    {
    label: "Remaining Distance",
    data: [15],
    backgroundColor: 'orange',
    borderColor: 'black',
    borderWidth: 1.5,
    }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Distance to Mars',
      fontSize: 18,
      position: 'top',
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutCirc',
    },
    legend: {
      position: 'bottom',
    },
    scales: {
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Planet',
          fontStyle: 'bold',
          fontColor: 'black',
        },
      }],
      xAxes: [{
        stacked: true,
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Traveled Kilometers * 10.000',
          fontStyle: 'bold',
          fontColor: 'black',
          fontSize: 10,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 50,
        }
      }]
    }
  }
});
// Code van radarChart
var ctx = document.getElementById('radarChart');
var radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Mercury','Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus'],
    datasets: [{
      label: "Location",
      fill: true,
      backgroundColor: 'rgba(255, 172, 77, 0.7)',
      borderColor: 'black',
      pointBorderColor: '#fff',
      pointBackgroundColor: 'purple',
      data: [77, 41, 80, 100, 58, 120, 130],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title:{
      display: true,
      text: 'Radar',
      fontSize: 18,
      position: 'top',
    }
  }
});