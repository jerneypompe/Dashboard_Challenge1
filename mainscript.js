google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

    /*inhoud van de grafiek*/
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Water', 900],
          ['Vlees', 300],
          ['Fruit', 500],
          ['Groente', 400],
        ]);

        /*opties voor de grafiek: groote, kleur */
        var options = {
        	title: 'Voorraden',
        	pieHole: 0.5,
          width: 240,
          height: 150,
          colors: ['#85E3FF', '#FFABAB', '#FFB5E8', '#93e9be'],
          	/*legend: {
      			position: 'labeled'
    			},*/
        };

        /*soort grafiek*/
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      } 
 