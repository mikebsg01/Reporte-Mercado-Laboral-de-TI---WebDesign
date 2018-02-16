$(document).ready(() => {
  $('.parallax').parallax();

  var chartPointsScored = new Chart(
    document.getElementById('chart-points-scored').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            59.5,
            11.5,
            10.3,
            6.9,
            3.7,
            1.9,
            3.2
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(155, 125, 175, 0.4)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(155, 125, 175, 1)'
          ],
          borderWidth: 1,
        }],
        labels: [
          'Ciudad de México',
          'Jalisco',
          'Nuevo León',
          'Querétaro',
          'Estado de México',
          'Aguascalientes',
          'Otros'
        ]
      },
      options: {
        cutoutPercentage: 58,
        responsive: true,
        legend: {
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 13
          }
        },
        title: {
          display: true,
          text: 'Vacantes por Estado',
          fontFamily: "'Ubuntu', sans-serif",
          fontColor: "#f1f1f1",
          fontSize: 14,
          padding: 4
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartPointsScored' */

  var chartStatesWithMoreGrowth = new Chart(
    document.getElementById('chart-states-with-more-growth').getContext('2d'), 
    { type: 'bar',
      data: {
        datasets: [{
            label: 'Ciudad de México',
            data: [
              59.53
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
          },
          {
            label: 'Estado de México',
            data: [
              3.70
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Querétaro',
            data: [
              6.87
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          },
          {
            label: 'Nuevo León',
            data: [
              10.29,
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Jalisco',
            data: [
              11.54
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 18
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartStatesWithMoreGrowth' */

  var chartMostDemandedProfiles = new Chart(
    document.getElementById('chart-most-demanded-profiles').getContext('2d'), 
    { type: 'bar',
      data: {
        datasets: [{
            label: 'Ciudad de México',
            data: [
              59.53
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
          },
          {
            label: 'Estado de México',
            data: [
              3.70
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Querétaro',
            data: [
              6.87
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          },
          {
            label: 'Nuevo León',
            data: [
              10.29,
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Jalisco',
            data: [
              11.54
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 18
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartMostDemandedProfiles' */
});