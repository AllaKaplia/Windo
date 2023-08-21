import React from 'react';
import ReactModal from "react-modal";
import { css } from '@emotion/react';


ReactModal.setAppElement('#root');


const customModalStyles = css`
    background-color: white;
    width: 700px;
    height: 371px;
    padding: 16px 56px;
    margin-top: 139px;
    text-align: center;
`;


const ModalMenu = ({ isOpen, contentLabel, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            contentLabel={contentLabel}
            className={customModalStyles.toString()}
        >
            {children}
        </ReactModal>
    )
};

export default ModalMenu;
