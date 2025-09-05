document.addEventListener('DOMContentLoaded', function() {
    // Configuración de colores en escala de grises
    const grayColors = ['#2c3e50', '#34495e', '#4a5568', '#718096', '#a0aec0'];
    
    // Gráfico de composición de dieta saludable
    const ctx1 = document.getElementById('dietChart');
    if (ctx1) {
        new Chart(ctx1.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Frutas y Verduras', 'Cereales Integrales', 'Proteínas', 'Lácteos', 'Grasas Saludables'],
                datasets: [{
                    data: [35, 30, 20, 10, 5],
                    backgroundColor: grayColors,
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#4a5568',
                            font: {
                                size: 10
                            }
                        }
                    }
                }
            }
        });
    }

    // Gráfico de evolución de obesidad
    const ctx2 = document.getElementById('obesityChart');
    if (ctx2) {
        new Chart(ctx2.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2000', '2005', '2010', '2015', '2020', '2023'],
                datasets: [{
                    label: 'Obesidad Mundial (%)',
                    data: [11.1, 13.2, 15.8, 18.5, 21.3, 23.1],
                    borderColor: '#2c3e50',
                    backgroundColor: 'rgba(44, 62, 80, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#2c3e50',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 25,
                        grid: {
                            color: '#e2e8f0'
                        },
                        ticks: {
                            color: '#4a5568'
                        }
                    },
                    x: {
                        grid: {
                            color: '#e2e8f0'
                        },
                        ticks: {
                            color: '#4a5568'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#4a5568'
                        }
                    }
                }
            }
        });
    }

    // Gráfico de costos económicos
    const ctx3 = document.getElementById('economicChart');
    if (ctx3) {
        new Chart(ctx3.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Sistema Salud', 'Productividad', 'Educación', 'Cuidados'],
                datasets: [{
                    label: 'Billones USD',
                    data: [2.1, 1.4, 0.8, 0.7],
                    backgroundColor: grayColors.slice(0, 4),
                    borderColor: '#2c3e50',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#e2e8f0'
                        },
                        ticks: {
                            color: '#4a5568'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#4a5568'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#4a5568'
                        }
                    }
                }
            }
        });
    }

    // Gráfico de efectividad de intervenciones
    const ctx4 = document.getElementById('interventionChart');
    if (ctx4) {
        new Chart(ctx4.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Educación', 'Impuestos', 'Etiquetado', 'Subsidios', 'Regulación Publicidad'],
                datasets: [{
                    label: 'Efectividad (%)',
                    data: [65, 78, 45, 82, 58],
                    backgroundColor: '#4a5568',
                    borderColor: '#2c3e50',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: '#e2e8f0'
                        },
                        ticks: {
                            color: '#4a5568'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#4a5568',
                            maxRotation: 45
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#4a5568'
                        }
                    }
                }
            }
        });
    }
});