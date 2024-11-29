import Modal from 'react-modal';

Modal.setAppElement('body');

const ProjectModal = (props: any) => {
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} overlayClassName={'projectModalOverlay'} closeTimeoutMS={300} className={props.extraClasses ?? ''}>
            {props.children}
        </Modal>
    )
}

export default ProjectModal;