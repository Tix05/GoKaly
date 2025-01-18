import { useState } from "react"
import { Dropdown } from "primereact/dropdown"
import { Chart } from 'primereact/chart'

const ReviewSumContainer = () => {
    const periods = [
        { name: 'Hebdomadaire', value: 'weekly' },
        { name: 'Mensuel', value: 'monthly' },
        { name: 'Annuel', value: 'yearly' },
    ]

    const periodData = {
        weekly: {
            labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        monthly: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
            data: [320, 280, 420, 380]
        },
        yearly: {
            labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
            data: [750, 680, 820, 790, 850, 900, 930, 880, 810, 790, 760, 740]
        }
    }

    const [selectedPeriod, setSelectedPeriod] = useState(periods[0])

    const generateChartData = (period) => {
        const documentStyle = getComputedStyle(document.documentElement)

        const currentPeriodData = periodData[period.value || period]

        if (!currentPeriodData) {
            console.error('No data found for period:', period)
            return {
                labels: [],
                datasets: []
            }
        }

        return {
            labels: currentPeriodData.labels,
            datasets: [
                {
                    label: 'Nombre d\'avis',
                    backgroundColor: documentStyle.getPropertyValue('--gray-600'),
                    borderColor: documentStyle.getPropertyValue('--gray-600'),
                    data: currentPeriodData.data
                },
            ]
        }
    }

    const generateChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement)
        const textColor = documentStyle.getPropertyValue('--text-color')
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

        return {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor,
                        font: {
                            family: 'Poppins, sans-serif'
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500,
                            family: 'Poppins, sans-serif'
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            family: 'Poppins, sans-serif'
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        }
    }

    return (
        <div className=" bg-neutral-50 mt-4 py-2 px-6 rounded shadow">
            <div className="flex flex-row justify-between">
                <h2 className="text-lg">Suivi</h2>
                <Dropdown
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.value)}
                    options={periods}
                    optionLabel="name"
                    placeholder="Hebdomadaire"
                    className="w-44 font-poppins custom-dropdown-period mt-2 h-10 text-xs border border-teal bg-white shadow rounded"
                    panelClassName='font-poppins text-xs'
                />
            </div>

            <Chart
                type="bar"
                data={generateChartData(selectedPeriod)}
                options={generateChartOptions()}
                className="mt-5"
            />
        </div>
    )
}

export default ReviewSumContainer