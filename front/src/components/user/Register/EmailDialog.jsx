import { Dialog } from 'primereact/dialog'
import PropTypes from 'prop-types'
import sendEmail from "../../../assets/icons/send-email.png"
import { Link } from 'react-router-dom'

const EmailDialog = ({ visible, setVisible }) => {
    return (
        <Dialog visible={visible} style={{ width: '40vw' }} onHide={() => { if (!visible) return; setVisible(false) }}>
            <img src={sendEmail} alt="Send Email" className="flex justify-center items-center mx-auto h-24 w-24 -mt-4" />
            <p className="text-xs font-poppins mt-4 mx-16 text-center">Un lien a été envoyé à votre adresse email pour vérifier et activer votre compte. Veuillez donc vérifier votre boîte email ou éventuellement votre spam</p>
            <Link to="" className="text-brick font-semibold font-poppins no-underline text-xs"><p className="text-center mx-auto mt-8 mb-8">Renvoyer le lien ?</p></Link>
        </Dialog>
    )
}

EmailDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
}

export default EmailDialog