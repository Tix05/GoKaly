import { useState, useEffect } from "react"
import { TabView, TabPanel } from "primereact/tabview"
import { Chart } from "primereact/chart"

const RevenueSumContainer = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    const generateRealisticData = (period) => {
        const documentStyle = getComputedStyle(document.documentElement)
        const textColor = documentStyle.getPropertyValue('--text-color')
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

        let labels, revenueData, profitData

        switch (period) {
            case 'Hebdomadaire':
                labels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
                revenueData = [60000, 110000, 180000, 250000, 95000, 140000, 220000]
                profitData = [45000, 85000, 120000, 200000, 75000, 95000, 60000]
                break
            case 'Mensuel':
                labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4']
                revenueData = [950000, 1020000, 780000, 950000]
                profitData = [820000, 520000, 350000, 480000]
                break
            case 'Annuel':
                labels = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin',
                    'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Dec']
                revenueData = [
                    4620000, 3580000, 3750000, 4680000, 5720000, 7690000,
                    2800000, 3820000, 4670000, 3740000, 4790000, 5850000
                ]
                profitData = [
                    3420000, 2380000, 2520000, 3460000, 4490000, 6470000,
                    1550000, 2570000, 3440000, 2510000, 3540000, 4600000
                ]
                break
            default:
                labels = []
                revenueData = []
                profitData = []
        }

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Profit net',
                    data: profitData,
                    fill: false,
                    borderColor: 'rgb(180, 83, 9)',
                    tension: 0.4
                },
                {
                    label: 'Revenu',
                    data: revenueData,
                    fill: false,
                    borderColor: 'rgb(163, 163, 163)',
                    tension: 0.4
                }
            ]
        }

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
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
                            family: 'Poppins, sans-serif'
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        count: 5,
                        font: {
                            family: 'Poppins, sans-serif'
                        },
                        callback: function (value) {
                            if (value >= 1000000) {
                                return `${(value / 1000000).toFixed(1)}M`
                            }
                            return `${(value / 1000).toFixed(0)}K`
                        }
                    },
                    grid: {
                        color: surfaceBorder
                    },
                    min: 0,
                    max: Math.max(...revenueData) * 1.6
                }
            }
        }

        setChartData(data)
        setChartOptions(options)
    }

    useEffect(() => {
        generateRealisticData('Hebdomadaire')
    }, [])

    const handleTabChange = (e) => {
        setActiveIndex(e.index)
        const periods = ['Hebdomadaire', 'Mensuel', 'Annuel']
        generateRealisticData(periods[e.index])
    }

    return (
        <section className="bg-neutral-50 py-2 px-6 rounded shadow">
            <div className="flex flex-row justify-between">
                <h2 className="text-lg">Revenus</h2>
                <TabView
                    className="font-poppins text-xs"
                    activeIndex={activeIndex}
                    onTabChange={handleTabChange}
                >
                    <TabPanel header="Hebdomadaire"></TabPanel>
                    <TabPanel header="Mensuel"></TabPanel>
                    <TabPanel header="Annuel"></TabPanel>
                </TabView>
            </div>

            <Chart type="line" data={chartData} options={chartOptions} className="h-72" />
        </section>
    )
}

export default RevenueSumContainer