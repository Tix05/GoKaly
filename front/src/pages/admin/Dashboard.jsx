import { useState } from "react"
import { motion } from "framer-motion"
import VMenu from "../../components/admin/VMenu"
import ToolBar from "../../components/admin/Toolbar"

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7`}>

                </main>
            </motion.div>
        </>
    )
}

export default Dashboard