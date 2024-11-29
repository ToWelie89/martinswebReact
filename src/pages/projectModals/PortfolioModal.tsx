import { LoadBox } from "../components/LoadBox";
import ProjectModal from "../components/ProjectModal";
import TechDependencies from "../components/TechDependencies";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectModalHeader from "./projectModalComponents/ProjectModalHeader";

export const PortfolioModal = (props: any) => {
    let loading = false;

    const dependencies = ['git', 'npm', 'vite', 'react', 'typescript', 'styledcomponents', 'jquery', 'bootstrap', 'apache', 'less', 'threejs'];

    return (
        <ProjectModal id="portfolioModal" onClose={props.onClose} isOpen={props.isOpen}>
            <ProjectModalHeader label={"Portfolio"} onClose={props.onClose} />
            <div className="modal-body">
                {
                    loading ? <LoadBox /> : null
                }
                <TechDependencies dependencies={dependencies}></TechDependencies>

                {/* Description */}
                <p className="marginTop--double">
                    This is the very site you're on right now, my personal website and portfolio. I began working on a
                    first portfolio that can still be found on <a href="http://www.martins-web.com" target="_blank">martins-web.com</a>
                    but I only got a design down and then scrapped the project. I wasn't satisfied with some aspects of the design and
                    I also wanted to host the site myself whereas this one is hosted via one.com. In august 2014 I began working on
                    this new portfolio.
                </p>
                <p className="marginTop">
                    This site uses modern webdesign technologies. jQuery is used a lot but also other frameworks such as Angular
                    and requirejs for handling MV*-patterns on the clientside, for structuring scripts and handling module loading.
                    I also work with less to easier structure CSS stylings. The complete source code is versioned via Github which
                    you can view below by clicking the Code-button. I develop on my local machine using WAMP-server and whenever
                    a certain part feels complete I push it to Github and then pull it from the server for easy and fast deployment.
                </p>
                <p className="marginTop">
                    The server itself is a Raspberry Pi that I manage myself. It runs Raspbian OS, NodeJS, Apache, php, SSH-client
                    and other useful tools for making it into a fully capable webserver. It is plugged into my router which is
                    configured to forward HTTP and SSH ports to the Raspberry Pi. I also have cronjobs in place to handle backup
                    of data and updating the DynDNS pointer for my domain operator..
                </p>
            </div>
            <div className="modal-footer">
                <a className="button floatRight" href="https://github.com/ToWelie89/martinswebReact" target="_blank">
                    <p text="Code (React version)"></p>
                </a>
                <a className="button floatRight" href="https://github.com/ToWelie89/martinsweb" target="_blank">
                    <p text="Code (Angular version)"></p>
                </a>
            </div>
        </ProjectModal>
    )
}