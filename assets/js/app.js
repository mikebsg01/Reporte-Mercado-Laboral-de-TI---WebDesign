$(document).ready(() => {
  window.typeOfDevice = null;
  window.isSpecialDiv1Moved = false;
  
  var checkTypeOfDevice = () => {
    let windowWidth = $(window).width();

    if (windowWidth >= 1200) {
      window.typeOfDevice = 1;
    } else if (windowWidth > 992 && windowWidth < 1200) {
      window.typeOfDevice = 2;
    } else if (windowWidth > 600 && windowWidth < 993) {
      window.typeOfDevice = 3;
    }
  }

  $('.parallax').parallax();
  $('a.anchorLink').anchorAnimate();

  $('a.link-popup').click(function(event) {
    event.preventDefault();
    var $element = $(this);

    window.open(
      $element.attr('href'),
      $element.attr('title'),
      'width=512,height=512,resizable,scrollbars,status'
    );
  });

  /*
  $('.first-slide').on('scrollSpy:exit', function() {
    $('.page-navbar-2').addClass('fixed-top');
  });
  
  $('.first-slide').on('scrollSpy:enter', function() {
    $('.page-navbar-2').removeClass('fixed-top');
  });

  $('.first-slide').scrollSpy();
  */

  var charts = {
    chartPointsScored1: () => {
      return new Chart(
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
              'Estado de México'
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
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
              animateRotate: true,
              duration: 2000
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
                  min: 0,
                  max: 60,
                  stepSize: 10
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
                  fontSize: (window.typeOfDevice == 1 ? 13 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 10 : 10)),
                  autoSkip: false,
                  maxRotation: (window.typeOfDevice == 1 ? 45 :
                                  (window.typeOfDevice == 2 ? 45 :
                                    window.typeOfDevice == 3 ? 45 : 60)),
                  minRotation: (window.typeOfDevice == 1 ? 45 :
                                  (window.typeOfDevice == 2 ? 45 :
                                    window.typeOfDevice == 3 ? 45 : 60)),
                }
              }]
            },
          }
        }
      );
    }, /* <-- End 'chartPointsScored1' */
    chartStatesWithTheHighestGrowth: () => {
      return new Chart(
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
            maintainAspectRatio: false,
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
              animateRotate: true,
              duration: 2000
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
                  min: 0,
                  max: 60,
                  stepSize: 10
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
                  fontSize: (window.typeOfDevice == 1 ? 13 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 10 : 10)),
                  autoSkip: false,
                  maxRotation: (window.typeOfDevice == 1 ? 45 :
                                  (window.typeOfDevice == 2 ? 45 :
                                    window.typeOfDevice == 3 ? 45 : 60)),
                  minRotation: (window.typeOfDevice == 1 ? 45 :
                                  (window.typeOfDevice == 2 ? 45 :
                                    window.typeOfDevice == 3 ? 45 : 60)),
                }
              }]
            },
          }
        }
      );
    }, /* <-- End 'chartStatesWithTheHighestGrowth' */
    chartMostDemandedProfiles: () => {
      return new Chart(
        document.getElementById('chart-most-demanded-profiles').getContext('2d'), 
        { type: 'horizontalBar',
          data: {
            labels: [
              'Java',
              'C# / NET',
              'SAP', 
              'Testing / QA', 
              'Administarción de Proyectos', 
              'Analista de Sistemas', 
              'Ventas TI', 
              'JavaScript', 
              'Android',
              'PHP' 
            ],
            datasets: [{
              data: [
                15.45,
                8.60,
                6,
                5.16,
                4.25,
                4.16,
                4.02,
                2.33,
                2.19,
                2.06
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.46)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(95, 192, 252, 0.4)',
                'rgba(255, 235, 59, 0.4)',
                'rgba(139, 195, 74, 0.4)',
                'rgba(76, 175, 80, 0.4)',
                'rgba(136, 146, 191, 0.4)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(95, 192, 252, 1)',
                'rgba(255, 235, 59, 1)',
                'rgba(139, 195, 74, 1)',
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
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 12 : 10)),
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
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 12 : 12)),
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
              animateRotate: true,
              duration: 2000
            }
          }
        }
      ); 
    }, /* <-- End 'chartMostDemandedProfiles' */
    chartHighestGrowthProfiles: () => { 
      return new Chart(
        document.getElementById('chart-highest-growth-profiles').getContext('2d'), 
        { type: 'horizontalBar',
          data: {
            labels: [
              'Seguridad Informática',
              'Virtualización de Servidores',
              'UX',
              'Bases de datos NoSQL',
              'MS Dynamics',
              'AngularJS',
              'Big Data',
              'Android', 
              'Integración de Datos y ETL',
              'Python'
            ],
            datasets: [{
              data: [
                70.69,
                66.85,
                65.85,
                65,
                62.67,
                61.70,
                59.65,
                55.26,
                51.47,
                50
              ],
              backgroundColor: [
                'rgba(139, 195, 74, 0.4)',
                'rgba(95, 192, 252, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(205, 220, 57, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(255, 99, 132, 0.46)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(76, 175, 80, 0.4)',
                'rgba(255, 235, 59, 0.4)',
                'rgba(54, 162, 235, 0.4)',
              ],
              borderColor: [
                'rgba(139, 195, 74, 1)',
                'rgba(95, 192, 252, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(205, 220, 57, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132,1)',
                'rgba(75, 192, 192, 1)',
                'rgba(76, 175, 80, 1)',
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
                position: 'left',
                categoryPercentage: 1.0,
                barPercentage: 0.7,
                gridLines: {
                  color: 'rgba(175, 175, 175, 0)',
                  lineWidth: 1
                },
                ticks: {
                  fontColor: 'rgba(255, 255, 255, 0.95)',
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 12 : 10)),
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
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 12 : 12)),
                  autoSkip: false,
                  min: 40,
                  max: 75,
                  stepSize: 7,
                  callback: function(value, index, values) {
                    if (index != (values.length - 1)) {
                      return value;
                    }
                    return value + '   %';
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
              animateRotate: true,
              duration: 2000
            }
          }
        }
      );
    }, /* <-- End 'chartMostDemandedProfiles' */
    chartJobOffersPerMonthIn2017: () => { 
      return new Chart(
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
                'rgba(255, 99, 132, 0.48)',
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
            maintainAspectRatio: false,
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
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 12 : 11)),
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
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 12 :
                                window.typeOfDevice == 3 ? 12 : 11)),
                  autoSkip: false,
                  maxRotation: (window.typeOfDevice == 1 ? 45 :
                                  (window.typeOfDevice == 2 ? 45 :
                                    window.typeOfDevice == 3 ? 45 : 70)),
                  minRotation: (window.typeOfDevice == 1 ? 45 :
                                  (window.typeOfDevice == 2 ? 30 :
                                    window.typeOfDevice == 3 ? 30 : 70)),
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
              animateRotate: true,
              duration: 2000
            }
          }
        }
      );
    }, /* <-- End 'hartJobOffersPerMonthIn2017' */
    chartJobPortals: () => {
      return new Chart(
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
              animateRotate: true,
              duration: 600
            }
          }
        }
      );
    }, /* <-- End 'chartJobPortals' */
    chartLinkedin: () => { 
      return new Chart(
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
              animateRotate: true,
              duration: 700
            }
          }
        }
      ); 
    }, /* <-- End 'chartLinkedin' */
    chartRecomendations: () => {
      return new Chart(
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
              animateRotate: true,
              duration: 800
            }
          }
        }
      );
    }, /* <-- End 'chartRecomendations' */
    chartSearchEnginesOnInternet: () => {
      return new Chart(
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
              animateRotate: true,
              duration: 900
            }
          }
        }
      ); 
    }, /* <-- End 'chartSearchEnginesOnInternet' */
    chartDeviceToLookForWork: () => {
      return new Chart(
        document.getElementById('chart-device-to-look-for-work').getContext('2d'), 
        { type: 'doughnut',
          data: {
            datasets: [{
              data: [
                60.9,
                26.4,
                12.8
              ],
              backgroundColor: [
                'rgba(255, 255, 255, 0.7)',
                'rgba(255, 255, 255, 0.5)',
                'rgba(255, 255, 255, 0.3)',
              ],
              borderColor: [
                'rgba(255, 255, 255, 0.7)',
                'rgba(255, 255, 255, 0.5)',
                'rgba(255, 255, 255, 0.3)',
              ],
              borderWidth: 2,
            }],
            labels: [
              'Laptop',
              'Smartphone/Tablet',
              'PC'
            ]
          },
          options: {
            cutoutPercentage: 60,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
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
              animateRotate: true,
              duration: 1600
            }
          }
        }
      );
    }, /* <-- End 'chartDeviceToLookForWork' */
    chartActiveAndPassiveJobSeekersokForWork: () => {
      return new Chart(
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
                'rgba(255, 255, 255, 0.7)',
                'rgba(255, 255, 255, 0.5)',
                'rgba(255, 255, 255, 0.3)',
                'rgba(255, 255, 255, 0.1)',
              ],
              borderColor: [
                'rgba(255, 255, 255, 0.7)',
                'rgba(255, 255, 255, 0.5)',
                'rgba(255, 255, 255, 0.3)',
                'rgba(255, 255, 255, 0.1)',
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
              animateRotate: true,
              duration: 1600
            }
          }
        }
      );
    }, /* <-- End 'chartActiveAndPassiveJobSeekersokForWork' */
    chartEmploymentFactors: () => {
      return new Chart(
        document.getElementById('chart-employment-factors').getContext('2d'), 
        { type: 'bar',
          data: {
            labels: [
              'Sueldo',
              ['Oportunidad de' , 'desarrollo', 'profesional'],
              'Prestaciones',
              ['Ambiente', 'laboral'],
              ['Tamaño de', 'la empresa'],
              ['Nivel de estrés del', 'rol de trabajo'],
              ['Balance entre', 'trabajo y vida', 'personal'],
            ],
            datasets: [
              {
                label: 'Muy importante',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                borderColor: 'rgba(255, 255, 255, 0.95)',
                borderWidth: 1,
                data: [
                  76.97,
                  88.88,
                  65.02,
                  66.86,
                  16.51,
                  24.66,
                  66.17
                ]
              }, 
              {
                label: 'Algo importante',
                backgroundColor: 'rgba(235, 235, 235, 0.60)',
                borderColor: 'rgba(235, 235, 235, 0.80)',
                borderWidth: 1,
                data: [
                  23.03,
                  11.12,
                  32.68,
                  30.96,
                  51.38,
                  56.88,
                  30.85
                ]
              },
              {
                label: 'Poco importante',
                backgroundColor: 'rgba(215, 215, 215, 0.45)',
                borderColor: 'rgba(215, 215, 215, 0.65)',
                borderWidth: 1,
                data: [
                  0,
                  0,
                  2.98,
                  2.87,
                  32.80,
                  19.15,
                  3.67
                ]
              }
            ]
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
                  color: 'rgba(175, 175, 175, 0.1)',
                  lineWidth: 1
                },
                ticks: {
                  fontColor: 'rgba(255, 255, 255, 0.65)',
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 14 :
                                window.typeOfDevice == 3 ? 12 : 12)),
                  autoSkip: false,
                  min: 0,
                  max: 100,
                  stepSize: 20
                }
              }],
              xAxes: [{
                gridLines: {
                  color: 'rgba(175, 175, 175, 0)',
                  lineWidth: 1
                },
                ticks: {
                  fontColor: 'rgba(255, 255, 255, 0.95)',
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 14 :
                                window.typeOfDevice == 3 ? 12 : 12)),
                  autoSkip: false,
                  minRotation: 0,
                  maxRotation: 0
                }
              }]
            },
            legend: {
              display: true,
              labels: {
                fontFamily: "'Ubuntu', sans-serif",
                fontColor: "#f1f1f1",
                fontSize: (window.typeOfDevice == 1 ? 14 :
                            (window.typeOfDevice == 2 ? 14 :
                              window.typeOfDevice == 3 ? 12 : 12)),
                padding: 15
              }
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  return ' ' + parseFloat(data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]) + '%' +
                        ' - ' + data['datasets'][tooltipItem['datasetIndex']]['label'];
                }
              }
            },
            animation: {
              animateScale: true,
              animateRotate: true,
              duration: 2000
            }
          }
        }
      );
    }, /* <-- End 'chartEmploymentFactors' */
    chartMainReasonsForRenouncing: () => {
      return new Chart(
        document.getElementById('chart-main-reasons-for-renouncing').getContext('2d'), 
        { type: 'horizontalBar',
          data: {
            labels: [
              'Falta de una compensación adecuada',
              'Por la falta de plan de carrera',
              'Te sentías poco valorado por la empresa',
              'Falta de un buen ambiente de trabajo',
              'Falta de soporte a nivel gerencial',
              'Cambios de gestión a nivel directivo en la empresa',
              'Por la falta de ser desafiado',
              'Metas asignadas poco realistas',
              'Insuficientes días de vacaciones o descanso',
            ],
            datasets: [{
              data: [
                52.6,
                44.6,
                43.4,
                31,
                27.8,
                25.3,
                21.9,
                21.2,
                12.9,
              ],
              backgroundColor: [
                'rgba(255, 255, 255, 0.75)',
                'rgba(215, 215, 215, 0.35)',
                'rgba(255, 255, 255, 0.75)',
                'rgba(215, 215, 215, 0.35)',
                'rgba(255, 255, 255, 0.75)',
                'rgba(215, 215, 215, 0.35)',
                'rgba(255, 255, 255, 0.75)',
                'rgba(215, 215, 215, 0.35)',
                'rgba(255, 255, 255, 0.75)',
              ],
              borderColor: [
                'rgba(255, 255, 255, 0.95)',
                'rgba(215, 215, 215, 0.55)',
                'rgba(255, 255, 255, 0.95)',
                'rgba(215, 215, 215, 0.55)',
                'rgba(255, 255, 255, 0.95)',
                'rgba(215, 215, 215, 0.55)',
                'rgba(255, 255, 255, 0.95)',
                'rgba(215, 215, 215, 0.55)',
                'rgba(255, 255, 255, 0.95)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                position: 'left',
                categoryPercentage: 1.0,
                barPercentage: 0.7,
                gridLines: {
                  color: 'rgba(175, 175, 175, 0)',
                  lineWidth: 1
                },
                ticks: {
                  fontColor: 'rgba(255, 255, 255, 0.95)',
                  fontSize: (window.typeOfDevice == 1 ? 14 :
                              (window.typeOfDevice == 2 ? 14 :
                                window.typeOfDevice == 3 ? 12 : 10)),
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
                  min: 0,
                  max: 60,
                  stepSize: 15,
                  callback: function(value, index, values) {
                    if (index != (values.length - 1)) {
                      return value;
                    }
                    return value + '   %';
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
              animateRotate: true,
              duration: 2000
            }
          }
        }
      );
    } /* <-- End 'chartMainReasonsForRenouncing' */  
  };

  var chartElements = {
    chartPointsScored1: {
      divName: '#chart-points-scored-1',
      isOn: false
    },
    chartStatesWithTheHighestGrowth: {
      divName: '#chart-states-with-the-highest-growth',
      isOn: false
    },
    chartMostDemandedProfiles: {
      divName: '#chart-most-demanded-profiles',
      isOn: false
    },
    chartHighestGrowthProfiles: {
      divName: '#chart-highest-growth-profiles',
      isOn: false
    },
    chartJobOffersPerMonthIn2017: {
      divName: '#chart-job-offers-per-month-in-2017',
      isOn: false
    },
    chartJobPortals: {
      divName: '#chart-job-portals',
      isOn: false
    },
    chartLinkedin: {
      divName: '#chart-linkedin',
      isOn: false
    },
    chartRecomendations: {
      divName: '#chart-recomendations',
      isOn: false
    },
    chartSearchEnginesOnInternet: {
      divName: '#chart-search-engines-on-internet',
      isOn: false
    },
    chartDeviceToLookForWork: {
      divName: '#chart-device-to-look-for-work',
      isOn: false
    },
    chartActiveAndPassiveJobSeekersokForWork: {
      divName: '#chart-active-and-passive-job-seekers',
      isOn: false
    },
    chartEmploymentFactors: {
      divName: '#chart-employment-factors',
      isOn: false
    },
    chartMainReasonsForRenouncing: {
      divName: '#chart-main-reasons-for-renouncing',
      isOn: false
    }
  };

  var isScrolledIntoElement = (elem) => {
    var scrollTopPos = $(window).scrollTop(),
        scrollDownPos = scrollTopPos + $(window).height(),
        elemTopPos = $(elem).offset().top,
        elemDownPos = elemTopPos + $(elem).height();

    return elemTopPos <= scrollDownPos && elemDownPos >= scrollTopPos;
  };

  var $linkOfMostVisibleSection = () => {
    var $window = $(window),
        windowHeight = $window.height(),
        scrollTopPos = $window.scrollTop(),
        scrollDownPos = scrollTopPos + windowHeight,
        firstAttempt = true,
        maxVis = 0.0,
        $mvs = null;

    $('.pagination .links .anchorLink').each(function() {
      var $link = $(this),
          $elem = $($link.attr('href')),
          elemTopPos = $elem.offset().top,
          elemDownPos = elemTopPos + $elem.height(),
          vis = Math.min(elemDownPos, scrollDownPos) - Math.max(elemTopPos, scrollTopPos);
      
      if ((firstAttempt || vis > maxVis) && vis > (0.55 * windowHeight)) {
        firstAttempt = false;
        maxVis = vis;
        $mvs = $link;
      }
    });

    return $mvs;
  }

  var chartObjects = {};

  var onScroll = (forced) => {
    var scrollTopPosition = $(window).scrollTop(),
        firstDivPosition = $('.page-navbar-2-container').offset().top;
    
    if (scrollTopPosition >= firstDivPosition) {
      $('.page-navbar-2').addClass('fixed-top');
    } else {
      $('.page-navbar-2').removeClass('fixed-top');
    }

    for (const chartName in chartElements) {
      if (forced || isScrolledIntoElement(chartElements[chartName].divName)) {
        if (forced !== true && chartElements[chartName].isOn) {
          continue;
        }

        chartElements[chartName].isOn = true;
        chartObjects[chartName] = charts[chartName]();
      } else {
        chartElements[chartName].isOn = false;

        if (chartObjects.hasOwnProperty(chartName)) {
          chartObjects[chartName].destroy();
        }
      }
    }

    var $link = $linkOfMostVisibleSection();

    if ($link === null || ! $link.hasClass('on')) {
      $('.pagination .links .anchorLink.on').each(function() {
        $(this).removeClass('on');
        $('i.icon', this).removeClass('fa').addClass('far');
      });

      if ($link !== null) {
        $link.addClass('on');
        $('i.icon', $link).removeClass('far').addClass('fa');
      }
    }
  };

  var accommodateSpecialDiv1 = () => {
    if (! window.isSpecialDiv1Moved && (typeOfDevice === 3 || typeOfDevice === 4)) {
      $('.slide-devices-to-look-for-work .here-2').append(
        $('.slide-devices-to-look-for-work .here-1 .chart-container')
      );
      window.isSpecialDiv1Moved = true;
    } else if (window.isSpecialDiv1Moved) {
      $('.slide-devices-to-look-for-work .here-1').append(
        $('.slide-devices-to-look-for-work .here-2 .chart-container')
      );
      window.isSpecialDiv1Moved = false;
    }
  };

  checkTypeOfDevice();
  onScroll(true);
  accommodateSpecialDiv1();

  $(window).scroll(() => {
    onScroll();
  });

  /* Start 'ChartPlaceOfResidence' */
  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyCIODlY3-J4Ks3L1AsheGI3vhrmEBA-sas'
  });

  google.charts.setOnLoadCallback(drawChartPlaceOfResidence);

  function drawChartPlaceOfResidence() {
    var data = google.visualization.arrayToDataTable([
      ['City', 'Porcentaje'],
      ['Distrito Federal', 33.6],
      ['Estado de México', 12.06],
      ['Jalisco', 9.2],
      ['Querétaro', 7],
      ['Nuevo León', 6.6],
      ['Puebla', 3],
      ['Guanajuato', 2.5],
      ['Chihuahua', 1.8],
      ['Yucatán', 1.8],
      ['Coahuila', 1.6]
    ]);

    var options = {
      region: 'MX',
      displayMode: 'regions',
      resolution: 'provinces',
      colorAxis: {
        minValue: 1,
        maxValue: 35,
        colors: ['rgb(174, 187, 190)', 'rgb(204, 217, 220)']
      },
      backgroundColor: {
        fill: 'transparent' 
      },
      datalessRegionColor: 'rgb(78, 114, 120)',
      defaultColor: '#f5f5f5',
      magnifyingGlass: {
        enable: true,
        zoomFactor: 10
      }
    };

    var ChartPlaceOfResidence = new google.visualization.GeoChart(
      document.getElementById('chart-place-of-residence')
    );

    ChartPlaceOfResidence.draw(data, options);
  }

  $(window).resize(function() {
    if (this.resizeTO) {
      clearTimeout(this.resizeTO);
    }

    this.resizeTO = setTimeout(function(){
        $(this).trigger('resizeEnd');
    }, 500);
  });

  $(window).on('resizeEnd', function() {
    checkTypeOfDevice();
    google.charts.setOnLoadCallback(drawChartPlaceOfResidence);
    accommodateSpecialDiv1();
  });
});