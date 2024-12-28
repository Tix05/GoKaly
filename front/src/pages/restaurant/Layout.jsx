import { useState } from "react"
import { Outlet } from "react-router-dom"
import VMenu from "../../components/restaurant/VMenu"

const LayoutResto = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="flex flex-col min-h-screen">
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default LayoutResto