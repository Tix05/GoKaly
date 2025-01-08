import { useState, useEffect } from "react"
import { Dropdown } from "primereact/dropdown"
import { Chart } from 'primereact/chart'

const DoughnutReview = () => {
    const [selectedPeriod, setSelectedPeriod] = useState({ name: 'Hebdomadaire' })
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})
    const [orderMetadata, setOrderMetadata] = useState({
        total: 0,
        categories: []
    })

    const periods = [
        { name: 'Hebdomadaire' },
        { name: 'Mensuel' },
        { name: 'Annuel' },
    ]

    useEffect(() => {
        let data, labels, values, metadata
        const colors = [
            '#36D1AA',
            '#CC4831'
        ]

        switch (selectedPeriod.name) {
            case 'Hebdomadaire':
                labels = ['Positif', 'Négatif']
                values = [75, 25]
                metadata = {
                    total: 100,
                    categories: [
                        { name: 'Positif', count: 75, percentage: 75, color: colors[0] },
                        { name: 'Négatif', count: 25, percentage: 25, color: colors[1] }
                    ]
                }
                break
            case 'Mensuel':
                labels = ['Positif', 'Négatif']
                values = [80, 20]
                metadata = {
                    total: 100,
                    categories: [
                        { name: 'Positif', count: 80, percentage: 80, color: colors[0] },
                        { name: 'Négatif', count: 20, percentage: 20, color: colors[1] }
                    ]
                }
                break
            case 'Annuel':
                labels = ['Positif', 'Négatif']
                values = [85, 15]
                metadata = {
                    total: 100,
                    categories: [
                        { name: 'Positif', count: 85, percentage: 85, color: colors[0] },
                        { name: 'Négatif', count: 15, percentage: 15, color: colors[1] }
                    ]
                }
                break
            default:
                labels = ['Positif', 'Négatif']
                values = [75, 25]
                metadata = {
                    total: 100,
                    categories: [
                        { name: 'Positif', count: 75, percentage: 75, color: colors[0] },
                        { name: 'Négatif', count: 25, percentage: 25, color: colors[1] }
                    ]
                }
        }

        data = {
            labels: labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: metadata.categories.map(cat => cat.color),
                    hoverBackgroundColor: metadata.categories.map(cat =>
                        cat.color.replace(')', ', 0.7)')
                    )
                }
            ]
        }

        const options = {
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0)
                            const currentValue = context.parsed
                            const percentage = ((currentValue / total) * 100).toFixed(1)
                            return `${context.label}: ${percentage}%`
                        }
                    }
                }
            }
        }

        setChartData(data)
        setChartOptions(options)
        setOrderMetadata(metadata)
    }, [selectedPeriod])

    const renderLegendMeters = () => {
        return orderMetadata.categories.map((category) => (
            <div key={category.name} className="flex items-center mb-2">
                <div className="flex-grow">
                    <div className="flex justify-between text-xs">
                        <span>{category.name}</span>
                        <span>{category.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                            className="h-1.5 rounded-full"
                            style={{
                                width: `${category.percentage}%`,
                                backgroundColor: category.color
                            }}
                        />
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <section className="bg-neutral-50 py-2 px-6 rounded shadow mt-4">
            <div className="flex flex-row justify-between">
                <h2 className="text-lg">Répartition</h2>
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

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <Chart
                        type="doughnut"
                        data={chartData}
                        options={chartOptions}
                        className="w-44 mt-1"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    {renderLegendMeters()}
                </div>
            </div>
        </section>
    )
}

export default DoughnutReview