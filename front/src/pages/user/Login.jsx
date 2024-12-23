import google from '../../assets/brand/google.png'
import facebook from '../../assets/brand/facebook.png'
import { Divider } from 'primereact/divider'
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from 'primereact/inputtext'
import { Password } from "primereact/password"
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [checked, setChecked] = useState(false)
    const [mdp, setMdp] = useState("")

    return (
        <div className="container p-4 w-[35vw] bg-neutral-100 shadow-lg rounded mx-auto flex flex-col justify-center items-center mt-32 mb-16">
            <h1 className='text-xl'>Connexion</h1>
            <p className='-mt-2'>Veuillez vous connecter à votre compte</p>
            <div className="mt-4 flex flex-row space-x-12">
                <div className='p-2 rounded bg-white shadow cursor-pointer' title="Se connecter avec Google">
                    <img src={google} alt="Google" className='w-5 h-5' />
                </div>
                <div className='p-2 rounded bg-white shadow cursor-pointer' title="Se connecter avec Facebook">
                    <img src={facebook} alt="Facebook" className='w-5 h-5' />
                </div>
            </div>

            <div className="relative">
                <Divider className="w-96 pt-10" />
                <p className='absolute top-0 left-[10.25rem] text-center text-sm text-neutral-400 bg-neutral-100 p-4'>OU</p>
            </div>

            <form className="mt-4">
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
                        <i className="pi pi-envelope text-white"></i>
                    </span>
                    <FloatLabel>
                        <Password id="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                        <label htmlFor="myEmail">Mot de passe</label>
                    </FloatLabel>
                </div>

                <div className="flex flex-row justify-between mt-6">
                    <div>
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                        <label className="ml-2 text-[0.7rem]">Se souvenir de moi</label>
                    </div>
                    <Link to="" className="text-[0.7rem] text-black -mt-3"><p>Mot de passe oublié ?</p></Link>
                </div>

                <Button label="Se connecter" className="bg-brick text-white font-poppins text-xs border border-none mt-7 outline outline-none w-full py-2 px-5 rounded" />
            </form>

            <p className='mt-8 mb-4 text-[0.65rem]'>Vous n'avez pas encore de compte ? <Link to="/register" className='text-brick font-semibold'>S'inscrire</Link></p>
        </div>
    )
}

export default Login