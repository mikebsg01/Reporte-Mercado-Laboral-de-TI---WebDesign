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

  var chartGrowthInQueretaro = new Chart(
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
  ); /* <-- End 'chartGrowthInQueretaro' */

  var chartGrowthInNuevoLeon = new Chart(
    document.getElementById('chart-growth-in-nuevo-leon').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            10.29,
            89.71
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
          'Nuevo León',
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
  ); /* <-- End 'chartGrowthInNuevoLeon' */

  var chartGrowthInJalisco= new Chart(
    document.getElementById('chart-growth-in-jalisco').getContext('2d'), 
    { type: 'doughnut',
      data: {
        datasets: [{
          data: [
            10.29,
            88.46
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
          'Jalisco',
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
  ); /* <-- End 'chartGrowthInJalisco' */

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
  
  var chartHighestGrowthProfiles = new Chart(
    document.getElementById('chart-highest-growth-profiles').getContext('2d'), 
    { type: 'horizontalBar',
      data: {
        datasets: [
          {
            label: 'Android',
            data: [
              -55.26
            ],
            backgroundColor: 'rgba(76, 175, 80, 0.4)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1
          },
          {
            label: 'AngularJS',
            data: [
              -61.70
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
          },
          {
            label: 'Bases de datos NoSQL',
            data: [
              -65
            ],
            backgroundColor: 'rgba(205, 220, 57, 0.4)',
            borderColor: 'rgba(205, 220, 57, 1)',
            borderWidth: 1
          },
          {
            label: 'Virtualización de Servidores',
            data: [
              -66.85
            ],
            backgroundColor: 'rgba(95, 192, 252, 0.4)',
            borderColor: 'rgba(95, 192, 252, 1)',
            borderWidth: 1
          },
          {
            label: 'Seguridad Informática',
            data: [
              -70.69
            ],
            backgroundColor: 'rgba(139, 195, 74, 0.4)',
            borderColor: 'rgba(139, 195, 74, 1)',
            borderWidth: 1
          },
          {
            label: 'UX',
            data: [
              -65.85,
            ],
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          },
          {
            label: 'MS Dynamics',
            data: [
              -62.67
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          },
          {
            label: 'Big Data',
            data: [
              -59.65
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Integración de Datos y ETL',
            data: [
              -51.47
            ],
            backgroundColor: 'rgba(255, 235, 59, 0.4)',
            borderColor: 'rgba(255, 235, 59, 1)',
            borderWidth: 1
          },
          {
            label: 'Python',
            data: [
              -50
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
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
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              console.log(tooltipItem);
              return data['datasets'][tooltipItem['datasetIndex']]['label'] +
                    ': ' + (-1 * parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]));
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