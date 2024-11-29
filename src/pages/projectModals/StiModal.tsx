import Carousel from "../components/Carousel";
import { LoadBox } from "../components/LoadBox";
import ProjectModal from "../components/ProjectModal";
import TechDependencies from "../components/TechDependencies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectModalHeader from "./projectModalComponents/ProjectModalHeader";
import { useState } from "react";

export const StiModal = (props: any) => {
    let loading = false;

    const tabs = ['Screenshots', 'Tournament recap video'];
    const dependencies = ['html', 'css', 'php', 'javascript', 'mysql', 'jquery'];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <ProjectModal id="stiModal" onClose={props.onClose} isOpen={props.isOpen}>
            <ProjectModalHeader label={"STI-Starcraft"} onClose={props.onClose} />
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
                                            <img src="./../src/assets/sti_screenshots/1.png" />{/* <p className="legend">Legend 1</p> */}
                                        </div>
                                        <div>
                                            <img src="./../src/assets/sti_screenshots/2.png" />{/* <p className="legend">Legend 2</p> */}
                                        </div>
                                        <div>
                                            <img src="./../src/assets/sti_screenshots/3.png" />{/* <p className="legend">Legend 2</p> */}
                                        </div>
                                        <div>
                                            <img src="./../src/assets/sti_screenshots/4.png" />{/* <p className="legend">Legend 2</p> */}
                                        </div>
                                    </Carousel>
                                </div>
                            ) : null
                    }
                    {
                        activeTab === tabs[1] ? // Tournament recap video
                            (
                                <div className="projectTabContent">
                                    <iframe width="100%" height="500"  src="https://www.youtube.com/embed/2SIMLdjzTlc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            ) : null
                    }
                </div>
                {/* Description */}
                <p className="marginTop--double">
                    This is a website and a community that I founded together with a friend in 2010, a third friend also joined the project later on.
                    It was a community targeted for people who played the RTS-game Starcraft 2. The idea came up when we discussed organizing a
                    tournament for other likeminded people. The idea evolved into a community where players could registrate, sign up for tournaments,
                    take part in discussions and other activities. The tournaments was then in turn organized by the three of us. We successfully hosted
                    two major tournaments with 16 and 32 participating players as well as other minor events. After that we stopped working on the site
                    due to lack of interest and time.
                </p>
                <p className="marginTop">
                    I coded pretty much the entire site myself, from frontend to backend. I was new to php and MySQL so to me it was a good project to start
                    learning these technologies. I didn't follow any tutorials and didn't use any premade components as I wanted to do everything from
                    scratch, like our message forum, PM system, mail forms, login, instant chat, tournament signup functionality, time scheduling service etc.
                </p>
            </div>
            <div className="modal-footer">
                <a className="button floatRight" href="http://www.sti-starcraft.org/index.php" target="_blank">
                    <p text="Visit site"></p>
                </a>
            </div>
        </ProjectModal>
    )
}