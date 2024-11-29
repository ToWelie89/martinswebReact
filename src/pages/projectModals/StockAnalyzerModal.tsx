import Carousel from "../components/Carousel";
import { LoadBox } from "../components/LoadBox";
import ProjectModal from "../components/ProjectModal";
import TechDependencies from "../components/TechDependencies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectModalHeader from "./projectModalComponents/ProjectModalHeader";
import { useState } from "react";

export const StockAnalyzerModal = (props: any) => {
    let loading = false;

    const tabs = ['Video'];
    const dependencies = ['git', 'npm', 'nodejs', 'puppeteer', 'chatgpt', 'javascript', 'render'];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <ProjectModal id="stockAnalyzerModal" onClose={props.onClose} isOpen={props.isOpen}>
            <ProjectModalHeader label={"Stock Analyzer"} onClose={props.onClose} />
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
                        activeTab === 'Video' ?
                            (
                                <div className="projectTabContent">
                                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/dmIhMVnMOhw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            ) : null
                    }
                </div>
                {/* Description */}
                <div className="marginTop--double">
                    <p>
                        Coming soon...
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                {/* <a className="button" href="https://valbarometern.com/" target="_blank">
                    <p text="Valbarometern standalone site"></p>
                </a>
                <a className="button" href="https://bulletin.nu/valkompass" target="_blank">
                    <p text="Valkompass - hosted on Bulletin"></p>
                </a>
                <a className="button" href="https://bulletin.nu/valu" target="_blank">
                    <p text="Valundersökning - hosted on Bulletin"></p>
                </a>
                <a className="button" href="https://bulletin.nu/18-000-har-testat-bulletins-valbarometer-ovantat-resultat" target="_blank">
                    <p text="Article 1"></p>
                </a>
                <a className="button" href="https://bulletin.nu/bulletins-valbarometer-det-blir-tufft-for-s-att-bilda-en-majoritetsregering" target="_blank">
                    <p text="Article 2"></p>
                </a> */}
            </div>
        </ProjectModal>
    )
}