import { useState } from "react"
import { Divider } from "primereact/divider"
import { InputText } from "primereact/inputtext"
import { Calendar } from 'primereact/calendar'
import { addLocale } from 'primereact/api'
import { Button } from "primereact/button"

import table from "../../../assets/table.jpg"

const BookTableContainer = () => {
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [nbrePerson, setNbrePerson] = useState("")
    const [datebook, setDatebook] = useState(null)
    const [timebeginbook, setTimebeginbook] = useState(null)
    const [timeendbook, setTimeendbook] = useState(null)  

    addLocale('fr', {
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        dayNamesShort: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        monthNamesShort: ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'],
        today: 'Aujourd\'hui',
        clear: 'Effacer'
    });

    return (
        <div className="bg-white rounded shadow-lg booktable-card">
            <div className="booktable-image-container">
                <img src={table} alt="Table restaurant"className="w-[90%] object-fit"/>
            </div>
            <div className="booktable-content-container pb-8">
                <h3 className = "text-xl">Réservez rapidement une table</h3>
                <Divider className = "-mt-2"/>
                <form className="grid grid-cols-2 gap-x-4 gap-y-6 pt-2">
                    <div>
                        <label htmlFor="nom" className="text-gray-500">Nom</label><br />
                        <InputText id = "nom" value={nom} onChange={(e) => setNom(e.target.value)} className = "mt-2 text-xs font-poppins"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-500">Adresse e-mail</label><br />
                        <InputText id = "email" value={email} onChange={(e) => setEmail(e.target.value)} className = "mt-2 text-xs font-poppins"/>
                    </div>
                    <div>
                        <label htmlFor="contact" className="text-gray-500">N°Téléphone</label><br />
                        <InputText id = "contact" value={contact} onChange={(e) => setContact(e.target.value)} className = "mt-2 text-xs font-poppins"/>
                    </div>
                    <div>
                        <label htmlFor="nbrePerson" className="text-gray-500">Nombre de réservants <i className = "text-[0.7em] pi pi-info-circle ms-2 cursor-pointer" title = "Nombre des personnes souhaitant occuper la table. Vous faites également partie du nombre"></i></label><br />
                        <InputText id = "nbrePerson" value={nbrePerson} onChange={(e) => setNbrePerson(e.target.value)} className = "mt-2 text-xs font-poppins"/>
                    </div>
                    <div>
                        <label htmlFor="datebook" className="text-gray-500">Date de réservation</label><br />
                        <Calendar id="datebook" value={datebook} onChange={(e) => setDatebook(e.value)} locale="fr" className="mt-2 font-poppins text-sm" dateFormat="dd/mm/yy" />
                    </div>
                    <div>
                        <label htmlFor="timebook" className="text-gray-500">Heure de réservation <i className = "pi pi-info-circle text-[0.7em] cursor-pointer ms-2"></i></label><br />
                        <div className = "flex flex-row space-x-3">
                            <Calendar id="timebook" value={timebeginbook} onChange={(e) => setTimebeginbook(e.value)} timeOnly hourFormat="24" locale="fr" className="mt-2 font-poppins text-sm"/>
                            <span className = "text-gray-500 text-[0.9em] mt-6">à</span>
                            <Calendar id="timebook" value={timeendbook} onChange={(e) => setTimeendbook(e.value)} timeOnly hourFormat="24" locale="fr" className="mt-2 font-poppins text-sm" />
                        </div>
                    </div>

                    <Button label="Confirmer" className="bg-teal border border-none outline outline-none font-poppins text-sm mt-3 w-[205%]"/>
                </form>
            </div>
        </div>
    )
}

export default BookTableContainer