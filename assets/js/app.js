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

  /*var chartGrowthInQueretaro = new Chart(
    document.getElementById('chart-growth-in-queretaro').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            6.87,
            93.13
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
          'Querétaro',
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
  );*/ 
  /* <-- End 'chartGrowthInQueretaro' */

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
  ); /* <-- End 'hartJobOffersPerMonthIn2017' */

  var chartMeansForJobSearch = new Chart(
    document.getElementById('chart-means-for-job-search').getContext('2d'), 
    { type: 'horizontalBar',
      data: {
        datasets: [
          {
            label: '90.3% - Portales de empleo',
            data: [
              90.3
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 1
          },
          {
            label: '79.8% - LinkedIn',
            data: [
              79.8
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
            borderWidth: 1
          },
          {
            label: '24% - Otras redes sociales',
            data: [
              24
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 1
          },
          {
            label: '22.1% - Ferias de empleo',
            data: [
              22.1
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
            borderWidth: 1
          },
          {
            label: '16.2% - Bolsa de trabajo',
            data: [
              16.2
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 1
          },
          {
            label: '19.6 - Agencias de reclutamiento',
            data: [
              19.6
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
            borderWidth: 1
          },
          {
            label: '19.8% - Reclutadores',
            data: [
              19.8
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 1
          },
          {
            label: '37.6% Buscadores en Internet',
            data: [
              37.6
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
            borderWidth: 1
          },
          {
            label: '43.6% - Recomendaciones',
            data: [
              43.6
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 0.65,
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
        title: {
          display: true,
          text: '¿Qué medios utilizas para búsqueda de empleo?',
          fontFamily: "'Ubuntu', sans-serif",
          fontColor: "#f1f1f1",
          fontSize: 15,
          padding: 20
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
  ); /* <-- End 'chartMeansForJobSearch' */

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
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  ); /* <-- End 'chartDeviceToLookForWork' */
});