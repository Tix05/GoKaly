import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types";

const EmailDialog = ({ showDialog, setShowDialog }) => {
    return (
        <Dialog visible={showDialog} modal onHide={() => { if (!showDialog) return; setShowDialog(false) }} className="w-[50%]">
            <div className="mt-6 px-12">
                <h3 className="font-poppins font-semibold text-center text-lg -mt-4 ">Veuiller vérifier votre boîte e-mail</h3>
                <p className="text-center text-sm font-poppins mt-4">Nous avons envoyé un email à votre adresse tix@gmail.com. Veuillez vérifier et continuer votre inscription à partir du lien envoyé</p>
            </div>

            <p className="text-center text-xs font-poppins mt-4 mb-6 cursor-pointer text-brick">Vous avez pas reçu de code ?</p>
        </Dialog>
    )
}

EmailDialog.propTypes = {
    showDialog: PropTypes.bool.isRequired,
    setShowDialog: PropTypes.func.isRequired
}

export default EmailDialog