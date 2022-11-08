import { useState } from 'react';
import Modal from 'react-modal'
import './calendarModal.css'

export default function CalendarModal() {

    const [isOpen, setIsOpen] = useState(true)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    Modal.setAppElement('#root');

    const onCloseModal = () =>{
        console.log("close modal");
        setIsOpen(false)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >

        </Modal>
    )
}