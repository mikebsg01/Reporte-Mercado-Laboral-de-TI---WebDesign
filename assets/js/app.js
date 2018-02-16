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
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(155, 125, 175, 0.5)'
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
        cutoutPercentage: 60,
        responsive: true,
        legend: {
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 12
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

  var chartGrowthInMexicoCity = new Chart(
    document.getElementById('chart-growth-in-mexico-city').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            59.53,
            40.47
          ],
          backgroundColor: [
            'rgba(74, 182, 255, 0.4)',
            'rgba(222, 224, 226, 0.1)'
          ],
          borderColor: [
            'rgba(74, 182, 255, 1)',
            'rgba(222, 224, 226, 0.4)'
          ],
          borderWidth: 1,
        }],
        labels: [
          'Ciudad de México',
          '',
        ]
      },
      options: {
        cutoutPercentage: 80,
        responsive: true,
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 13
          }
        },
        tooltips: {
          enabled: false
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartGrowthInMexicoCity' */

  var chartGrowthInTheStateOfMexico = new Chart(
    document.getElementById('chart-growth-in-the-state-of-mexico').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            3.7,
            96.3
          ],
          backgroundColor: [
            'rgba(74, 182, 255, 0.4)',
            'rgba(222, 224, 226, 0.1)'
          ],
          borderColor: [
            'rgba(74, 182, 255, 1)',
            'rgba(222, 224, 226, 0.4)'
          ],
          borderWidth: 1,
        }],
        labels: [
          'Estado de México',
          '',
        ]
      },
      options: {
        cutoutPercentage: 80,
        responsive: true,
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 13
          }
        },
        tooltips: {
          enabled: false
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartGrowthInTheStateOfMexico' */

  var chartMostDemandedProfiles = new Chart(
    document.getElementById('chart-most-demanded-profiles').getContext('2d'), 
    { type: 'horizontalBar',
      data: {
        datasets: [
          {
            label: 'JavaScript',
            data: [
              2.33
            ],
            backgroundColor: 'rgba(139, 195, 74, 0.4)',
            borderColor: 'rgba(139, 195, 74, 1)',
            borderWidth: 1
          },
          {
            label: 'Analista de Sistemas',
            data: [
              4.16
            ],
            backgroundColor: 'rgba(95, 192, 252, 0.4)',
            borderColor: 'rgba(95, 192, 252, 1)',
            borderWidth: 1
          },
          {
            label: 'Testing / QA',
            data: [
              5.16,
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'C# / NET',
            data: [
              8.60
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Java',
            data: [
              15.45
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
          },
          {
            label: 'SAP',
            data: [
              6
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          },
          {
            label: 'Administarción de Proyectos',
            data: [
              4.25
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          },
          {
            label: 'Ventas TI',
            data: [
              4.02
            ],
            backgroundColor: 'rgba(255, 235, 59, 0.4)',
            borderColor: 'rgba(255, 235, 59, 1)',
            borderWidth: 1
          },
          {
            label: 'Android',
            data: [
              2.19
            ],
            backgroundColor: 'rgba(76, 175, 80, 0.4)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1
          },
          {
            label: 'PHP',
            data: [
              2.06
            ],
            backgroundColor: 'rgba(136, 146, 191, 0.4)',
            borderColor: 'rgba(136, 146, 191, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 0.7,
            gridLines: {
              color: 'rgba(175, 175, 175, 0.1)',
              lineWidth: 1
            }
          }],
          xAxes: [{
            gridLines: {
              color: 'rgba(175, 175, 175, 0.1)',
              lineWidth: 1
            }
          }]
        },
        legend: {
          position: 'right',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: '#f1f1f1',
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