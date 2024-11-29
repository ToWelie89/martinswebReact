import Carousel from "../components/Carousel";
import { LoadBox } from "../components/LoadBox";
import ProjectModal from "../components/ProjectModal";
import TechDependencies from "../components/TechDependencies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectModalHeader from "./projectModalComponents/ProjectModalHeader";
import { useState } from "react";

export const MobileKeyringModal = (props: any) => {
    let loading = false;

    const tabs = ['Screenshots'];
    const dependencies = ['java', 'html', 'css', 'android', 'svn'];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <ProjectModal id="mkpModal" onClose={props.onClose} isOpen={props.isOpen}>
            <ProjectModalHeader label={"Mobile Keyring"} onClose={props.onClose} />
            <div className="modal-body">
                {
                    loading ? <LoadBox /> : null
                }
                <TechDependencies dependencies={dependencies}></TechDependencies>

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
                                    <Carousel showArrows={true} showThumbs={false} showIndicators={true} showStatus={false} useKeyboardArrows={true} dynamicHeight={true}>
                                        <div>
                                            <img src="./../src/assets/hamsterkeyring_screenshots/1.png" />{/* <p className="legend">Legend 1</p> */}
                                        </div>
                                        <div>
                                            <img src="./../src/assets/hamsterkeyring_screenshots/2.png" />{/* <p className="legend">Legend 2</p> */}
                                        </div>
                                        <div>
                                            <img src="./../src/assets/hamsterkeyring_screenshots/3.png" />{/* <p className="legend">Legend 2</p> */}
                                        </div>
                                        <div>
                                            <img src="./../src/assets/hamsterkeyring_screenshots/4.png" />{/* <p className="legend">Legend 2</p> */}
                                        </div>
                                    </Carousel>
                                </div>
                            ) : null
                    }
                </div>
                {/* Description */}
                <p className="marginTop--double">
                    Mobile Keyring was a project I worked on together with four other students during my time at Chalmers. The project revolved around developing
                    a good way to allow people to log into websites without having to enter ones real password. A secure form of login that could be used
                    in insecure settings, for instance if you are using a public computer and are worried about the existance of keyloggers.
                </p>
                <p className="marginTop">
                    The solution consisted of an Android application that the user uses to generate temporary passwords for a given website. The passwords can
                    be a one time use password with a specific time limit but it could also have a defined number of usages and/or any given time limit. In
                    order to use the app together with a specific website the website obviously has to support the functionality, something that can be fixed quite
                    easily by an admin on the server side. We used prototype websites with normal login functionality to test the technology out.
                    First time it is used with a specific website it has to be connected with the application using an authentication key that can
                    be inputted via a QR code. After the connection is made the app can thereafter be used to generate temporary keys for login without having
                    any stored information regarding the real password of the user.
                </p>
                <p className="marginTop">
                    The application also needed a pin code to unlock in case the cellphone would get stolen. As an extra precaution though we also developed a PC
                    application in Java that could be synced with the web application. The PC application could then in turn disable usage of the app to
                    generate passwords for given websites.
                </p>
            </div>
            <div className="modal-footer">
                <a className="button floatRight" href="./../src/documents/MobileKeyringReport.pdf" target="_blank" download="MobileKeyringReport.pdf">
                    <p text="Report"></p>
                </a>
            </div>
        </ProjectModal>
    )
}