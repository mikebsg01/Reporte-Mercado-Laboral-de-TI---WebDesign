$(document).ready(() => {
  $('.parallax').parallax();

  var chartPointsScored1 = new Chart(
    document.getElementById('chart-points-scored-1').getContext('2d'), 
    { type: 'bar',
      data: {
        datasets: [{
          data: [
            58.56,
            11.38,
            10.15,
            6.72,
            3.65
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
          'Estado de México'
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 12
          }
        },
        title: {
          display: false,
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return ' ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]) + ' %';
            }
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              color: 'rgba(175, 175, 175, 0.1)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.3)'
            }
          }],
          xAxes: [{
            categoryPercentage: 1,
            barPercentage: 0.7,
            gridLines: {
              color: 'rgba(175, 175, 175, 0.0)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.8)',
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45 
            }
          }]
        },
      }
    }
  ); /* <-- End 'chartPointsScored1' */

  var chartStatesWithTheHighestGrowth = new Chart(
    document.getElementById('chart-states-with-the-highest-growth').getContext('2d'), 
    { type: 'bar',
      data: {
        datasets: [{
          data: [
            38.38,
            21.29,
            54.40,
            59.24,
            54.35
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1,
        }],
        labels: [
          'Ciudad de México',
          'Jalisco',
          'Nuevo León',
          'Querétaro',
          'Estado de México'
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 12,
            padding: 12
          }
        },
        title: {
          display: false,
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return ' ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]) + ' %';
            }
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              color: 'rgba(175, 175, 175, 0.1)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.3)',
            }
          }],
          xAxes: [{
            categoryPercentage: 1,
            barPercentage: 0.7,
            gridLines: {
              color: 'rgba(175, 175, 175, 0.0)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.8)',
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45 
            }
          }]
        },
      }
    }
  ); /* <-- End 'chartStatesWithTheHighestGrowth' */

  var chartMostDemandedProfiles = new Chart(
    document.getElementById('chart-most-demanded-profiles').getContext('2d'), 
    { type: 'horizontalBar',
      data: {
        labels: [
          'JavaScript',
          'Analista de Sistemas', 
          'Testing / QA',
          'C# / NET',
          'Java',
          'SAP',
          'Administarción de Proyectos',
          'Ventas TI',
          'Android',
          'PHP'
        ],
        datasets: [{
          data: [
            2.33,
            4.16,
            5.16,
            8.60,
            15.45,
            6,
            4.25,
            4.02,
            2.19,
            2.06
          ],
          backgroundColor: [
            'rgba(139, 195, 74, 0.4)',
            'rgba(95, 192, 252, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 235, 59, 0.4)',
            'rgba(76, 175, 80, 0.4)',
            'rgba(136, 146, 191, 0.4)',
          ],
          borderColor: [
            'rgba(139, 195, 74, 1)',
            'rgba(95, 192, 252, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 235, 59, 1)',
            'rgba(76, 175, 80, 1)',
            'rgba(136, 146, 191, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            categoryPercentage: 1,
            barPercentage: 0.7,
            gridLines: {
              color: 'rgba(0, 0, 0, 0)',
              lineWidth: 1
            },
            ticks: {
              fontSize: 14,
              fontColor: 'rgba(255, 255, 255, 0.9)',
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0
            }
          }],
          xAxes: [{
            gridLines: {
              color: 'rgba(175, 175, 175, 0.1)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.65)',
              autoSkip: false,
              callback: function(value, index, values) {
                if (index != (values.length - 1)) {
                  return value;
                }
                return value + '   %';
              },
              min: 0,
              max: 16,
              stepSize: 4
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return ' ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]) + '%';
            }
          }
        },
        legend: {
          display: false
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartMostDemandedProfiles' */
  
  var chartHighestGrowthProfiles = new Chart(
    document.getElementById('chart-highest-growth-profiles').getContext('2d'), 
    { type: 'horizontalBar',
      data: {
        labels: [
          'Android',
          'AngularJS',
          'Bases de datos NoSQL',
          'Virtualización de Servidores',
          'Seguridad Informática',
          'UX',
          'MS Dynamics',
          'Big Data',
          'Integración de Datos y ETL',
          'Python'
        ],
        datasets: [{
          data: [
            55.26,
            61.70,
            65,
            66.85,
            70.69,
            65.85,
            62.67,
            59.65,
            51.47,
            50
          ],
          backgroundColor: [
            'rgba(76, 175, 80, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(205, 220, 57, 0.4)',
            'rgba(95, 192, 252, 0.4)',
            'rgba(139, 195, 74, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(255, 235, 59, 0.4)',
            'rgba(54, 162, 235, 0.4)',
          ],
          borderColor: [
            'rgba(76, 175, 80, 1)',
            'rgba(255, 99, 132,1)',
            'rgba(205, 220, 57, 1)',
            'rgba(95, 192, 252, 1)',
            'rgba(139, 195, 74, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 235, 59, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            position: 'right',
            categoryPercentage: 1.0,
            barPercentage: 0.7,
            gridLines: {
              reverse: true,
              color: 'rgba(175, 175, 175, 0)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.95)',
              fontSize: 14,
              autoSkip: false
            }
          }],
          xAxes: [{
            gridLines: {
              color: 'rgba(175, 175, 175, 0.1)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.65)',
              autoSkip: false,
              reverse: true,
              min: 40,
              max: 75,
              stepSize: 7,
              callback: function(value, index, values) {
                if (index != 0) {
                  return '' + value;
                }
                return '%   ' + value;
              }
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return ' ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]) + '%';
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartMostDemandedProfiles' */

  var chartJobOffersPerMonthIn2017 = new Chart(
    document.getElementById('chart-job-offers-per-month-in-2017').getContext('2d'), 
    { type: 'bar',
      data: {
        labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        datasets: [{
          data: [
            427,
            362,
            515,
            320,
            446,
            449,
            563,
            436,
            455,
            475,
            391,
            357
          ],
          backgroundColor: [
            'rgba(54, 162, 235, 0.4)',
            'rgba(95, 192, 252, 0.4)',
            'rgba(205, 220, 57, 0.4)',
            'rgba(106, 206, 106, 0.4)',
            'rgba(255, 235, 59, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(76, 175, 80, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(204, 166, 223, 0.4)',
            'rgba(139, 195, 74, 0.4)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(95, 192, 252, 1)',
            'rgba(205, 220, 57, 1)',
            'rgba(106, 206, 106, 1)',
            'rgba(255, 235, 59, 1)',
            'rgba(255, 99, 132,1)',
            'rgba(76, 175, 80, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(204, 166, 223, 1)',
            'rgba(139, 195, 74, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            position: 'right',
            categoryPercentage: 1.0,
            barPercentage: 0.7,
            gridLines: {
              reverse: true,
              color: 'rgba(175, 175, 175, 0.1)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.65)',
              fontSize: 14,
              autoSkip: false,
              min: 300,
              max: 600,
              stepSize: 60
            }
          }],
          xAxes: [{
            gridLines: {
              color: 'rgba(175, 175, 175, 0)',
              lineWidth: 1
            },
            ticks: {
              fontColor: 'rgba(255, 255, 255, 0.95)',
              autoSkip: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return ' ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]);
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'hartJobOffersPerMonthIn2017' */

  var chartJobPortals = new Chart(
    document.getElementById('chart-job-portals').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            90.3,
            9.7
          ],
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.3)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.4)',
          ],
          borderWidth: 1,
        }],
        labels: [
          'Querétaro',
          '',
        ]
      },
      options: {
        cutoutPercentage: 76,
        responsive: true,
        maintainAspectRatio: false,
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
  ); /* <-- End 'chartJobPortals' */

  var chartLinkedin = new Chart(
    document.getElementById('chart-linkedin').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            79.8,
            20.2
          ],
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.3)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.4)',
          ],
          borderWidth: 1,
        }],
        labels: [
          'Querétaro',
          '',
        ]
      },
      options: {
        cutoutPercentage: 76,
        responsive: true,
        maintainAspectRatio: false,
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
  ); /* <-- End 'chartLinkedin' */

  var chartRecomendations = new Chart(
    document.getElementById('chart-recomendations').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            43.6,
            56.4
          ],
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.3)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.4)',
          ],
          borderWidth: 1,
        }],
        labels: [
          'Querétaro',
          '',
        ]
      },
      options: {
        cutoutPercentage: 76,
        responsive: true,
        maintainAspectRatio: false,
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
  ); /* <-- End 'chartRecomendations' */
  
  var chartSearchEnginesOnInternet = new Chart(
    document.getElementById('chart-search-engines-on-internet').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            37.6,
            62.4
          ],
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.3)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.4)',
          ],
          borderWidth: 1,
        }],
        labels: [
          'Querétaro',
          '',
        ]
      },
      options: {
        cutoutPercentage: 76,
        responsive: true,
        maintainAspectRatio: false,
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
  ); /* <-- End 'chartSearchEnginesOnInternet' */

  var chartDeviceToLookForWork = new Chart(
    document.getElementById('chart-device-to-look-for-work').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            12.8,
            26.4,
            60.9
          ],
          backgroundColor: [
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.4)',
            'rgba(255, 255, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.7)',
          ],
          borderWidth: 2,
        }],
        labels: [
          'PC',
          'Smartphone/Tablet',
          'Laptop'
        ]
      },
      options: {
        cutoutPercentage: 60,
        responsive: true,
        legend: {
          position: 'right',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 15,
            padding: 12
          }
        },
        title: {
          display: false,
          fontFamily: "'Ubuntu', sans-serif",
          fontColor: "#f1f1f1",
          fontSize: 15,
          padding: 12
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return data['labels'][tooltipItem['index']] +
                     ': ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]) + '%';
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartDeviceToLookForWork' */

  var chartActiveAndPassiveJobSeekersokForWork = new Chart(
    document.getElementById('chart-active-and-passive-job-seekers').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            37.5,
            31.6,
            28.7,
            2.2
          ],
          backgroundColor: [
            'rgba(255, 255, 255, 0.65)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(255, 255, 255, 0.35)',
            'rgba(255, 255, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.85)',
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.55)',
            'rgba(255, 255, 255, 0.4)',
          ],
          borderWidth: 2,
        }],
        labels: [
          'Busqué un nuevo empleo',
          'Obtuve un nuevo empleo',
          'No busco, pero monitoreo ofertas de trabajo',
          'No estoy interesado en buscar o cambiar de trabajo'
        ]
      },
      options: {
        cutoutPercentage: 60,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontFamily: "'Ubuntu', sans-serif",
            fontColor: "#f1f1f1",
            fontSize: 14,
            padding: 15
          }
        },
        title: {
          display: false,
          fontFamily: "'Ubuntu', sans-serif",
          fontColor: "#f1f1f1",
          fontSize: 15,
          padding: 12
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return data['labels'][tooltipItem['index']] +
                     ': ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]) + '%';
            }
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartActiveAndPassiveJobSeekersokForWork' */
});