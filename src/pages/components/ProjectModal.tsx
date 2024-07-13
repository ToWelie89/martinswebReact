import styled from "styled-components";

const ModalContainer = styled.div`

`

const ProjectModal = (props: any) => {
    return (
        <ModalContainer className="modal fade" id={props.id} role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </ModalContainer>
    )
}

export default ProjectModal;