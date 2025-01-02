import { useState, useEffect } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Chart } from 'primereact/chart'

const OrderSumContainer = () => {
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
            '#6b7280',
            '#CC4831'
        ]

        switch (selectedPeriod.name) {
            case 'Hebdomadaire':
                labels = ['Livré', 'Emporté par le client', 'Annulé']
                values = [45, 35, 20]
                metadata = {
                    total: 1250,
                    categories: [
                        { name: 'Livré', count: 550, percentage: 44, color: colors[0] },
                        { name: 'Emporté par le client', count: 450, percentage: 36, color: colors[1] },
                        { name: 'Annulé', count: 250, percentage: 20, color: colors[2] }
                    ]
                }
                break
            case 'Mensuel':
                labels = ['Livré', 'Emporté par le client', 'Annulé']
                values = [40, 40, 20]
                metadata = {
                    total: 5600,
                    categories: [
                        { name: 'Livré', count: 2350, percentage: 42, color: colors[0] },
                        { name: 'Emporté par le client', count: 2100, percentage: 38, color: colors[1] },
                        { name: 'Annulé', count: 1150, percentage: 20, color: colors[2] }
                    ]
                }
                break
            case 'Annuel':
                labels = ['Livré', 'Emporté par le client', 'Annulé']
                values = [35, 45, 20]
                metadata = {
                    total: 68500,
                    categories: [
                        { name: 'Livré', count: 24500, percentage: 36, color: colors[0] },
                        { name: 'Emporté par le client', count: 30500, percentage: 44, color: colors[1] },
                        { name: 'Annulé', count: 13500, percentage: 20, color: colors[2] }
                    ]
                }
                break
            default:
                labels = ['Livré', 'Emporté par le client', 'Annulé']
                values = [45, 35, 20]
                metadata = {
                    total: 1250,
                    categories: [
                        { name: 'Livré', count: 550, percentage: 44, color: colors[0] },
                        { name: 'Emporté par le client', count: 450, percentage: 36, color: colors[1] },
                        { name: 'Annulé', count: 250, percentage: 20, color: colors[2] }
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
        <section className="bg-neutral-50 py-2 px-6 rounded shadow w-[95%]">
            <div className="flex flex-row justify-between">
                <h2 className="text-lg">Commandes</h2>
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

            <p className="text-xs mt-2">
                <i className="pi pi-info-circle text-[0.8em] me-2"></i>
                Visualisez le comportement des historiques de commande ici
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <Chart
                        type="doughnut"
                        data={chartData}
                        options={chartOptions}
                        className="w-48 mt-6"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-center mb-4">
                        <p className="text-2xl font-bold">{orderMetadata.total}</p>
                        <p className="text-xs text-gray-500 -mt-5">Total des commandes</p>
                    </div>
                    {renderLegendMeters()}
                </div>
            </div>
        </section>
    )
}

export default OrderSumContainer