import { useState } from 'react'
import google from '../../assets/brand/google.png'
import facebook from '../../assets/brand/facebook.png'
import { Divider } from 'primereact/divider'
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'
import { Checkbox } from 'primereact/checkbox'
import EmailDialog from '../../components/user/Register/EmailDialog'

const Register = () => {
    const [identifiant, setIdentifiant] = useState("")
    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [mdpConfirm, setMdpConfirm] = useState("")
    const [offerChecked, setOfferChecked] = useState(false)
    const [conditionChecked, setConditionChecked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    const load = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setVisible(true)
        }, 2000)
    }

    return (
        <div className="container p-4 w-[35vw] bg-neutral-100 shadow-lg rounded mx-auto flex flex-col justify-center items-center mt-32 mb-16">
            <h1 className='text-xl'>Inscription</h1>
            <p className='-mt-2'>Veuillez entrer vos informations personnelles</p>
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
                        <i className="pi pi-user text-white"></i>
                    </span>
                    <FloatLabel>
                        <InputText id="identifiant" value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} />
                        <label htmlFor="identifiant">Identifiant</label>
                    </FloatLabel>
                </div>

                <div className="p-inputgroup flex-1 w-96 mt-8">
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

                <div className="p-inputgroup flex-1 w-96 mt-8">
                    <span className="p-inputgroup-addon bg-teal">
                        <i className="pi pi-lock text-white"></i>
                    </span>
                    <FloatLabel>
                        <Password id="mdpConfirm" value={mdpConfirm} onChange={(e) => setMdpConfirm(e.target.value)} />
                        <label htmlFor="mdpConfirm">Confirmer mot de passe</label>
                    </FloatLabel>
                </div>

                <div className="flex flex-col justify-between mt-6">
                    <div>
                        <Checkbox onChange={e => setOfferChecked(e.checked)} checked={offerChecked}></Checkbox>
                        <label className="ml-2 text-[0.65rem]">J'accepte les <Link to="" className="text-black">conditions d'utilisation</Link> et les <Link to="" className='text-black'>politiques de confidentialité</Link></label>
                    </div>
                    <div className="mt-5">
                        <Checkbox onChange={e => setConditionChecked(e.checked)} checked={conditionChecked}></Checkbox>
                        <label className="ml-2 text-[0.65rem]">Recevoir les mises à jour et les offres par email</label>
                    </div>
                </div>

                <Button loading={loading} onClick={load} label="S'inscrire" className="bg-brick text-white font-poppins text-xs border border-none mt-7 outline outline-none w-full py-2 px-5 rounded" />
                <EmailDialog visible={visible} setVisible={setVisible} />
            </form>

            <p className='mt-8 mb-4 text-[0.65rem]'>Vous avez déjà un compte ? <Link to="/login" className='text-brick font-semibold'>Se connecter</Link></p>
        </div>
    )
}

export default Register