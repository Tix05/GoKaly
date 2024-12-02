import { useState } from "react"
import { Dialog } from "primereact/dialog"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import PropTypes from "prop-types"
import { Password } from "primereact/password"
import { Checkbox } from "primereact/checkbox"
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'

import facebook from '../../assets/icons/facebook.png'
import google from '../../assets/icons/google.png'

const LoginDialog = ({ visibleLogin, setVisibleLogin }) => {
    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [checked, setChecked] = useState("")

    return (
        <Dialog
            modal
            visible={visibleLogin}
            onHide={() => { if (!visibleLogin); return setVisibleLogin(false) }}
            content={({ hide }) => (
                <section>
                    <i className="pi pi-arrow-left cursor-pointer" onClick={(e) => hide(e)} title="Retour"></i>
                    <h1 className="text-center text-black font-poppins font-semibold text-lg">Connexion</h1>
                    <p className="text-xs text-center font-poppins">Veuillez vous connecter à votre compte</p>

                    <form className="mt-8 mx-12">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon bg-teal">
                                <i className="pi pi-envelope text-white"></i>
                            </span>
                            <FloatLabel>
                                <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins custom-input-search text-xs border indent-3" />
                                <label htmlFor="email" className="font-poppins text-xs">Adresse e-mail</label>
                            </FloatLabel>
                        </div>

                        <div className="p-inputgroup flex-1 mt-7">
                            <span className="p-inputgroup-addon bg-teal">
                                <i className="pi pi-lock text-white"></i>
                            </span>
                            <FloatLabel>
                                <Password value={mdp} onChange={(e) => setMdp(e.target.value)} className="font-poppins custom-input-search text-xs border custom-password"
                                    feedback={false} tabIndex={1} />
                                <label htmlFor="mdp" className="font-poppins text-xs">Mot de passe</label>
                            </FloatLabel>
                        </div>

                        <div className="flex justify-between space-x-20 mt-6 text-xs">
                            <div>
                                <Checkbox inputId="rememberMe" onChange={e => setChecked(e.checked)} checked={checked} className="custom-checkbox border rounded" />
                                <label htmlFor="rememberMe" className="ml-2 font-poppins text-[0.95em]">Se souvenir de moi</label>
                            </div>

                            <Link to="/forgotten-password" className="mt-1 text-black font-poppins text-[0.95em]">Mot de passe oublié ?</Link>
                        </div>

                        <Button label="Se connecter" className="mt-8 font-semibold bg-brick text-white font-poppins text-xs w-full border border-none outline outline-none py-2" />

                        <div className="relative mt-10">
                            <hr className=""></hr>
                            <p className="text-slate-300 font-light text-md absolute bg-white p-2 left-40 -top-5">OU</p>
                        </div>

                        <div className="flex flex-row justify-center space-x-8 mt-6">
                            <div className="bg-white rounded shadow p-3 cursor-pointer" title="Se connecter avec Facebook">
                                <img src={facebook} alt="Facebook" className="flex justify-center w-5 h-5" />
                            </div>

                            <div className="bg-white rounded shadow p-3 cursor-pointer" title="Se connecter avec Google">
                                <img src={google} alt="Google" className="flex justify-center w-5 h-5" />
                            </div>
                        </div>
                    </form>
                </section>
            )}
            className={`bg-white w-[35vw] p-4 h-[75vh] rounded`}
        />
    )
}

LoginDialog.propTypes = {
    visibleLogin: PropTypes.bool.isRequired,
    setVisibleLogin: PropTypes.func.isRequired
}

export default LoginDialog
