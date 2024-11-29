import Carousel from "../components/Carousel";
import { LoadBox } from "../components/LoadBox";
import ProjectModal from "../components/ProjectModal";
import TechDependencies from "../components/TechDependencies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectModalHeader from "./projectModalComponents/ProjectModalHeader";
import { useState } from "react";

export const BoxByDorisModal = (props: any) => {
    let loading = false;

    const tabs = ['Screenshots'];
    const dependencies = ['html', 'css'];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <ProjectModal id="boxByDorisModal" onClose={props.onClose} isOpen={props.isOpen}>
            <ProjectModalHeader label={"Box By Doris"} onClose={props.onClose} />
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
                                            <img src="./../src/assets/boxbydoris_screenshots/1.png" />{/* <p className="legend">Legend 1</p> */}
                                        </div>
                                        <div>
                                            <img src="./../src/assets/boxbydoris_screenshots/2.png" />{/* <p className="legend">Legend 2</p> */}
                                        </div>
                                    </Carousel>
                                </div>
                            ) : null
                    }
                </div>
                {/* Description */}
                <p className="marginTop--double">
                    This is a project that I helped developing as a side project. It's a website for dog lovers where you can sign up and pay for a subscription
                    to recieve a package on a regular basis with goodies for your dog, such as treats and accessories.
                </p>
                <p className="marginTop">
                    The website is hosted using the platform <a href="http://www.subbly.co/">Subbly</a>. On Subbly you can register to get a subscription business
                    website with a complete transaction platform using <a href="https://stripe.com/se">Stripe</a>. I helped out with the frontend development which
                    mostly consisted of design fixes.
                </p>
                <p className="marginTop">
                    The website no longer exists so you can't find it on the web, instead I've uploaded a screenshot of the website using Wayback machine.
                </p>
            </div>
            <div className="modal-footer">
                <a className="button floatRight" href="./../src/assets/screenshots/boxbydoris.png" target="_blank">
                    <p text="Screenshot"></p>
                </a>
            </div>
        </ProjectModal>
    )
}