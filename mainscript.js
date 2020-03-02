google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

    /*inhoud van de grafiek*/
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Stuks'],
          ['Water', 900],
          ['Vlees', 350],
          ['Fruit', 500],
          ['Groente', 400],
        ]);

        /*opties voor de grafiek: groote, kleur */
        var options = {
        	title: 'Water and food reserve',
        	pieHole: 0.3,
          width: 350,
          height: 200,
          pieSliceText: 'percentage',
          backgroundColor: '', //transperant background
          colors: ['#85E3FF', '#FFABAB', '#FFB5E8', '#93e9be'],
        };

        /*soort grafiek*/
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }