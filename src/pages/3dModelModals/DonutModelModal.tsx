import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import ProjectModalHeader from "../projectModals/projectModalComponents/ProjectModalHeader";
import ThreeDModelModal from "./ThreeDModelModal";


export const DonutModelModal = (props: any) => {
    const tabs = ['Animation'];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <ThreeDModelModal onClose={props.onClose} isOpen={props.isOpen}>
            <ProjectModalHeader label={"Donut Model"} onClose={props.onClose} />
            <div className="modal-body">
                <div className="projectTabsContainer marginTop">
                    {
                        tabs.map((x, i) => (
                            <div key={"modal-tab-" + i} className={`projectTab ${x === activeTab ? 'projectTab--selected' : ''}`} onClick={() => setActiveTab(x)}>
                                {x}
                            </div>
                        ))
                    }
                    {
                        activeTab === tabs[0] ? // Screenshots
                            (
                                <div className="projectTabContent">
                                    <img src="./../src/assets/3dmodels/donut/donut.gif" />
                                </div>
                            ) : null
                    }
                </div>

                <p className="marginTop--double">
                    This is the first model I modelled and rendered in Blender. As many other Blender users my first 3D model is of a donut, since I followed a popular tutorial series by Blender Guru which is to create a donut and thus starting to learn Blender.
                </p>
            </div>
        </ThreeDModelModal>
    )
}