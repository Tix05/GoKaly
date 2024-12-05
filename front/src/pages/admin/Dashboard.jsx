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

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 grid grid-cols-[60%_40%] mt-7`}>
                    <section>
                        <div className="grid grid-cols-3 gap-x-2">
                            <div className="bg-white rounded border shadow py-3 px-5 flex flex-row justify-start space-x-5">
                                <i className="pi pi-ticket mt-4"></i>
                                <div>
                                    <h6 className="font-poppins text-[0.7em] text-neutral-600">Total des commandes</h6>
                                    <p className="font-semibold text-lg">23</p>
                                </div>
                            </div>
                            <div className="bg-white rounded border shadow py-3 px-5 flex flex-row justify-start space-x-5">
                                <i className="pi pi-ticket mt-4"></i>
                                <div>
                                    <h6 className="font-poppins text-[0.7em] text-neutral-600">Revenues générées</h6>
                                    <p className="font-semibold text-lg">230 000 Ar</p>
                                </div>
                            </div>
                            <div className="bg-white rounded border shadow py-3 px-5 flex flex-row justify-start space-x-5">
                                <i className="pi pi-ticket mt-4"></i>
                                <div>
                                    <h6 className="font-poppins text-[0.7em] text-neutral-600">Satisfaction client</h6>
                                    <p className="font-semibold text-lg">4.5</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>

                    </section>
                </main>
            </motion.div>
        </>
    )
}

export default Dashboard