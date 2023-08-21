import { useEffect, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

const ModalMenu = ({ isOpen, onRequestClose, contentLabel, children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(isOpen);

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    return (
        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        >
            {children}
        </ReactModal>
    )
};

export default ModalMenu;