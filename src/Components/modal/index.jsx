import PropTypes from 'prop-types';
import useGlobalContext from '../../context/GlobalContext/useGlobalContext';

const Modal = () => {

    const {modal, setModal} = useGlobalContext()

    // Determine modal styles based on the type    
    const onClose = () => {
        setModal((prevState) =>({
            ...prevState,
            isOpen : false
        }))
    }

    const isError = modal['isError']
    const message = modal['message']

    const modalStyles =
        isError === false
        ? 'bg-green-500 text-white'
        : 'bg-red-500 text-white';

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Overlay */}
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className={`relative p-6 rounded-lg shadow-lg ${modalStyles}`}
            >
                <button
                className="absolute top-2 right-2 text-2xl leading-none"
                onClick={onClose}
                >
                &times;
                </button>
                <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                    {isError === 'Error' ? 'Error' : 'Success'}
                </h2>
                <p>{message}</p>
                </div>
            </div>
        </div>
    );
    };

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['success', 'error']).isRequired,
    message: PropTypes.string.isRequired,
};

export default Modal;
