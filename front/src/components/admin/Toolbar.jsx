import { useState } from "react"
import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

const ToolBar = ({ collapsed, setCollapsed }) => {
    const [inputSearch, setInputSearch] = useState("")

    const centerContent = (
        <div className="space-x-6 mt-2 me-12">
            <i className="pi pi-bell cursor-pointer" title="Notification"></i>
            <i className="pi pi-cog cursor-pointer" title="Paramètres"></i>
        </div>
    )

    const endContent = (
        <div className="mt-7 ms-2">
            <Avatar label="T" className="-mt-12 bg-teal text-black" size="large" shape="circle" />
        </div>
    )

    return (
        <>
            <header className={`mt-4 flex justify-between ${collapsed ? 'ps-24' : 'ps-64'} pe-6 bg-neutral-200 h-[4.75rem]`}>
                <div className="flex flex-row justify-start space-x-8">
                    <div className="custom-bg-banner -ms-16">
                    </div>

                    <div className="mt-5">
                        <h1 className="text-lg font-semibold">Tableau de bord</h1>
                    </div>

                    <div className="ms-8">
                        <div className="p-inputgroup flex-1 h-10 mt-4 border border-neutral-400 rounded-3xl">
                            <InputText placeholder="Rechercher" className="w-[20vw] indent-3 bg-transparent border border-none font-poppins text-xs "
                                value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
                            <Button title="Rechercher" icon="pi pi-search" className=" me-3 border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                        </div>
                    </div>
                </div>
                <Toolbar center={centerContent} end={endContent} className="bg-neutral-200 border border-none outline-none -mt-4" />
            </header >
        </>
    )
}

export default ToolBar
