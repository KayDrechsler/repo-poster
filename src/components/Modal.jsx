/**
 * # Modal
 */

/**
 * ## Imports
 */
import { useNavigate } from 'react-router-dom'
import styles from './Modal.module.scss';

/**
 * ## Component
 */
function Modal({ children }) {
    const navigate = useNavigate();
    const closeHandler = () => {
        // `..` is used to go back to the previous path.
        navigate('..')
    };

    return <>
        <div className={styles.backdrop} onClick={closeHandler} />
        <dialog open className={styles.modal}>
            { children }
        </dialog>
    </>
};

/**
 * ## Exports
 */
export default Modal;