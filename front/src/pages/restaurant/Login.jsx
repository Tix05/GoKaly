import { useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import { Dropdown } from "primereact/dropdown"
import { InputSwitch } from "primereact/inputswitch"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { Link } from "react-router-dom"
import { FaUserTie } from "react-icons/fa6"

import bucky from "../../assets/brand/bucky.png"

const LoginRestaurant = () => {
    const { t, language, switchLanguage } = useLanguage()
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")

    const langOptions = [
        { name: 'Français', code: 'FR' },
        { name: 'English', code: 'EN' },
    ]

    const handleLanguageChange = (e) => {
        switchLanguage(e.value)
    }

    return (
        <div className="pt-8 px-24">
            <header className="flex flex-row justify-end space-x-10">
                <div className="">
                    <i className='pi pi-globe text-white'></i>
                    <Dropdown value={language} onChange={handleLanguageChange} options={langOptions} optionLabel='code'
                        optionValue='code' className='h-9 w-16 text-xs -mt-3 border border-none shadow-md custom-p-dropdown2 bg-transparent' panelClassName='text-xs font-poppins'
                        placeholder={language} dropdownIcon="pi pi-chevron-down text-xs mt-1" valueTemplate={(option) => <span>{option.code}</span>} itemTemplate={(option) => <span>{option.code}</span>}
                    />
                </div>

                <div className="flex flex-row justify-start space-x-4">
                    <i className="pi pi-sun text-blackCustom mt-1 text-sm"></i>
                    <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="h-6" />
                    <i className="pi pi-moon text-blackCustom mt-1 text-sm"></i>
                </div>
            </header>

            <div className="container p-4 w-[35vw] bg-neutral-100 shadow-lg rounded mx-auto flex flex-col justify-center items-center mt-10">
                <div className="flex flex-row justify-center space-x-5">
                    <div>
                        <Avatar image={bucky} shape="circle" size="xlarge" />
                    </div>
                    <div>
                        <h1 className="font-satisfy mt-6">Bucky Burger</h1>
                    </div>
                </div>

                <p className='mt-3'>Veuillez vous connecter à votre compte restaurateur</p>

                <form className="mt-8">
                    <div className="p-inputgroup flex-1 w-96">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-envelope text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText id="myEmail" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="myEmail">Adresse email</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 w-96 mt-8">
                        <span className="p-inputgroup-addon bg-teal">
                            <i className="pi pi-lock text-white"></i>
                        </span>
                        <FloatLabel>
                            <Password id="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                            <label htmlFor="mdp">Mot de passe</label>
                        </FloatLabel>
                    </div>

                    <Button label="Se connecter" className="bg-brick text-white font-poppins text-xs border border-none mt-7 mb-12 outline outline-none w-full py-2 px-5 rounded" />
                </form>

            </div>

            <div className="mt-24 flex justify-end">
                <Link className="no-underline font-poppins text-xs hover:underline hover:underline-offset-2 text-black"><p><FaUserTie className="me-3" />Contacter le support client</p></Link>
            </div>
        </div>
    )
}

export default LoginRestaurant