const ProjectModalHeader = (props: any) => {
    return (
        <div className="modal-header">
            <h4 className="modal-title">
                {props.label}
            </h4>
            <button type="button" className="close" onClick={() => props.onClose()}>
                <i className="fa fa-times-circle" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default ProjectModalHeader;