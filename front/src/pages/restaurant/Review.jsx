import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { Dropdown } from "primereact/dropdown"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { Avatar } from 'primereact/avatar'
import { AvatarGroup } from 'primereact/avatargroup'
import ReviewSumContainer from "../../components/restaurant/ReviewSumContainer"
import DoughnutReview from "../../components/restaurant/DoughnutReview"
import { Paginator } from 'primereact/paginator'

import driver from "../../assets/driver.jpeg"

const Review = () => {
    const { collapsed } = useOutletContext()
    const [selectedFilter, setSelectedFilter] = useState({ name: 'Les plus récents' })
    const [first, setFirst] = useState(0)
    const [rows, setRows] = useState(10)

    const onPageChange = (event) => {
        setFirst(event.first)
        setRows(event.rows)
    }

    const filters = [
        { name: 'Les plus récents' },
        { name: 'Les plus anciens' },
    ]

    const totalReviews = 6560
    const ratingDistributions = {
        5: 3500,
        4: 2000,
        3: 800,
        2: 200,
        1: 60
    }

    const ratingPercentages = Object.entries(ratingDistributions).map(([star, count]) => ({
        star: parseInt(star),
        count,
        percentage: ((count / totalReviews) * 100).toFixed(1)
    })).sort((a, b) => b.star - a.star)

    const renderStars = (rating, sizeIcon) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <i key={`full-${i}`} className={`pi pi-star-fill text-yellow-400 ${sizeIcon}`}></i>
            )
        }

        if (hasHalfStar) {
            stars.push(
                <i key="half" className={`pi pi-star-fill text-yellow-400 ${sizeIcon}`}></i>
            )
        }

        const emptyStars = 5 - Math.ceil(rating)
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <i key={`empty-${i}`} className={`pi pi-star text-yellow-400 ${sizeIcon}`}></i>
            )
        }

        return stars
    }

    const comments = [
        {
            id: 1,
            name: 'John Doe',
            date: '03 Janvier 2025 - 12:00',
            stars: 4,
            comment: 'Je viens de commander un burger chez vous et je suis conquis ! Le goût est incroyable, je reviendrai très vite.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            date: '02 Janvier 2025 - 09:30',
            stars: 4.3,
            comment: 'Je suis vraiment impressionnée par la qualité des burgers que vous offrez. Ils sont parfaitement cuisinés et la texture est parfaitement bonne.'
        },
        {
            id: 3,
            name: 'Bob Johnson',
            date: '01 Janvier 2025 - 14:15',
            stars: 5,
            comment: 'Je suis vraiment impressionnée par la qualité des burgers que vous offrez. Ils sont parfaitement cuisinés et la texture est parfaitement bonne.'
        },
        {
            id: 4,
            name: 'Alice Williams',
            date: '31 Décembre 2024 - 10:45',
            stars: 4,
            comment: 'Je viens de commander un burger chez vous et je suis conquis ! Le goût est incroyable, je reviendrai très vite.'
        },
        {
            id: 5,
            name: 'Bob Smith',
            date: '30 Décembre 2024 - 15:20',
            stars: 4.5,
            comment: 'Je suis vraiment impressionnée par la qualité des burgers que vous offrez. Ils sont parfaitement cuisinés et la texture est parfaitement bonne.'
        },
        {
            id: 6,
            name: 'Alice Johnson',
            date: '29 Décembre 2024 - 11:55',
            stars: 4.2,
            comment: 'Je viens de commander un burger chez vous et je suis conquis ! Le goût est incroyable, je reviendrai très vite.'
        },
        {
            id: 7,
            name: 'Bob Williams',
            date: '28 Décembre 2024 - 16:30',
            stars: 4.7,
            comment: 'Je suis vraiment impressionnée par la qualité des burgers que vous offrez. Ils sont parfaitement cuisinés et la texture est parfaitement bonne.'
        },
        {
            id: 8,
            name: 'Alice Smith',
            date: '27 Décembre 2024 - 12:05',
            stars: 4.3,
            comment: 'Je viens de commander un burger chez vous et je suis conquis ! Le goût est incroyable, je reviendrai très vite.'
        },
    ]

    return (
        <section className="grid grid-cols-[55%_40%] gap-x-5 mt-24 mb-8"
            style={{
                width: `calc(100% - ${collapsed ? '5rem' : '280px'})`,
                marginLeft: collapsed ? '5rem' : '280px',
                paddingLeft: collapsed ? '1rem' : '2rem'
            }}>
            <section className="bg-neutral-50 py-2 px-6 rounded shadow h-[160vh]">
                <div className="flex flex-row justify-between">
                    <h2>Evaluations</h2>
                    <Dropdown
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.value)}
                        options={filters}
                        optionLabel="name"
                        placeholder="Les plus récents"
                        className="w-44 font-poppins custom-dropdown-period mt-2 h-10 text-xs border border-teal bg-white shadow rounded"
                        panelClassName='font-poppins text-xs'
                    />
                </div>
                <p className="mt-4"><i className="pi pi-info-circle text-[0.75em] me-2"></i>Visualisez les avis des clients de votre restaurant</p>

                <div className="pt-8 overflow-y-auto h-[130vh] review-scrollbar pr-1">
                    {comments.map((comment) => (
                        <div key={comment.id}>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row space-x-6">
                                    <Avatar image={driver} shape="circle" size="large" />
                                    <div className="-mt-3">
                                        <p className="text-base">{comment.name}</p>
                                        <p className="text-xs text-gray-500 -mt-3">{comment.date}</p>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <Button icon="pi pi-reply" label="Répondre" className="bg-brick text-white border border-none outline outline-none text-xs font-poppins" />
                                </div>
                            </div>

                            <div className="grid grid-cols-[13%_58%_25%]">
                                <div></div>
                                <div>
                                    <p className="text-xs">{comment.comment}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center px-auto -mt-4">
                                    <p className="font-poppins text-2xl font-semibold">{comment.stars}</p>
                                    <div className="flex items-center gap-1 -mt-3">
                                        {renderStars(comment.stars, "text-sm")}
                                    </div>
                                </div>
                            </div>

                            <Divider />
                        </div>
                    ))}
                </div>

                <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} className="mt-7 font-poppins bg-transparent custom-review-paginator" />
            </section>

            <section className="">
                <div className=" bg-neutral-50 py-2 px-6 rounded shadow h-auto flex flex-row space-x-6">
                    <div className="flex flex-col px-auto">
                        <h5 className="text-[0.85em] text-gray-500 font-light text-center">Votre note actuelle</h5>
                        <div className="mt-1 ms-6">
                            <h3 className="text-5xl font-semibold -mt-3 -ms-6 text-center">4.6</h3>
                            <div className="-mt-8 flex justify-center -ms-5">{renderStars(4.6, "text-lg")}</div>
                        </div>
                        <div className="flex flex-row justify-center space-x-12">
                            <p><i className="pi pi-users text-lg me-2"></i>6 560</p>
                            <p><i className="pi pi-comment text-lg me-2"></i>1 223</p>
                        </div>
                        <AvatarGroup className="mt-3 flex justify-center">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                        </AvatarGroup>
                    </div>

                    <div className="flex flex-col">
                        <div className="mt-12 space-y-2">
                            {ratingPercentages.map(({ star, percentage }) => (
                                <div key={star} className="flex items-center space-x-3 w-[10rem]">
                                    <span className="text-sm w-8 text-right">{star}</span>
                                    <div className="flex-grow bg-gray-200 rounded-full h-2.5 w-[135%]">
                                        <div
                                            className="bg-teal h-2.5 rounded-full"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <ReviewSumContainer />

                <DoughnutReview />

            </section>
        </section >
    )
}

export default Review