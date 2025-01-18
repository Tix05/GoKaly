import { useState } from "react"
import { Outlet } from "react-router-dom"
import VMenu from "../../components/restaurant/VMenu"
import HToolBar from "../../components/restaurant/HToolBar"

const LayoutResto = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="flex flex-col min-h-screen">
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <main>
                <HToolBar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Outlet context={{ collapsed, setCollapsed }} />
            </main>
        </div>
    )
}

export default LayoutResto