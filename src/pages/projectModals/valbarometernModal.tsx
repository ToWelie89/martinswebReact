import Carousel from "../components/Carousel";
import { LoadBox } from "../components/LoadBox";
import ProjectModal from "../components/ProjectModal";
import TechDependencies from "../components/TechDependencies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectModalHeader from "./projectModalComponents/ProjectModalHeader";
import { useState } from "react";

export const ValbarometernModal = (props: any) => {
    let loading = false;
    
    const tabs = ['Screenshots'];
    const dependencies = ['git', 'npm', 'grunt', 'html', 'css', 'javascript', 'mysql', 'firebase'];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <ProjectModal id="valbarometernModal" onClose={props.onClose} isOpen={props.isOpen}>
            <ProjectModalHeader label={"Valbarometern"} onClose={props.onClose} />
            <div className="modal-body" style={{ height: 'calc(100% - 201px)' }}>
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
                                        <img src="./../src/assets/vk_screenshots/1.png" />{/* <p className="legend">Legend 1</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/2.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/3.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/4.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/5.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/6.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/7.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/analytics/1.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                    <div>
                                        <img src="./../src/assets/vk_screenshots/8.png" />{/* <p className="legend">Legend 2</p> */}
                                    </div>
                                </Carousel>
                            </div>
                        ) : null
                    }
                </div>
                {/* Description */}
                <div className="marginTop--double">
                    <p>
                        Ahead of the 2022 Swedish elections me and my brother, Daniel Sonesson, thought it would be a cool idea to create our own election barometer. We named it "Valbarometern".
                        It is essentially a sort of survey where the users answers a bunch of different questions regarding their opinions in different political topics, those
                        that were considered current for the 2022 election, and the survey will then figure out which political parties you align with the most. The user also has the ability
                        to mark certain topics as extra important, thus the scoring algorithm will take this into account. At the end of the test the user is presented with the results, and he
                        can also see for each party exactly which topics they agree on and where they disagree.
                    </p>
                    <p className="marginTop">
                        This was initially meant as a standalone project, something I considered a fun little project, but my brother Daniel managed to pitch this to Bulletin, a large online
                        newspaper in Sweden. We entered into a collaboration with them and they agreed to host our election survey on their website. This drove a lot of traffic to our site
                        and in the end we had over 70 000 surveys started, with 54 000 individual users completing the survey to the last step and over 2 000 people sharing their results on social media.
                        After this we continued our collaboration with Bulletin and made another survey, where the user could pick what party they would vote for today, what party they would prefer to vote
                        for if there was a guarantee that they would enter the parliament and which party/parties they would prefer to see in the government (regering).
                    </p>
                    <p className="marginTop">
                        Because of the high user participation we gained some interesting data regarding the users voting preferences, data that Bulletin has later used as sources for articles they written.
                        Here are some examples: <a href="https://bulletin.nu/18-000-har-testat-bulletins-valbarometer-ovantat-resultat" target="_blank">article 1</a>, <a href="https://bulletin.nu/bulletins-valbarometer-det-blir-tufft-for-s-att-bilda-en-majoritetsregering" target="_blank">article 2</a>
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <a className="button floatRight" href="https://valbarometern.com/" target="_blank">
                    <p text="Standalone site"></p>
                </a>
                <a className="button floatRight" href="https://bulletin.nu/valkompass" target="_blank">
                    <p text="Valkompass hosted on Bulletin"></p>
                </a>
                <a className="button floatRight" href="https://bulletin.nu/valu" target="_blank">
                    <p text="ValU hosted on Bulletin"></p>
                </a>
                <a className="button floatRight" href="https://bulletin.nu/18-000-har-testat-bulletins-valbarometer-ovantat-resultat" target="_blank">
                    <p text="Article 1"></p>
                </a>
                <a className="button floatRight" href="https://bulletin.nu/bulletins-valbarometer-det-blir-tufft-for-s-att-bilda-en-majoritetsregering" target="_blank">
                    <p text="Article 2"></p>
                </a>
            </div>
        </ProjectModal>
    )
}