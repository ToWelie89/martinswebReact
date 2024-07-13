import { LoadBox } from "../components/LoadBox";
import ProjectModal from "../components/ProjectModal"
import { ProjectStatus } from "../components/ProjectStatus";
import { closeModal } from "./ModalHelpers";

export const ValbarometernModal = (props : any) => {

    let loading = false;

    return (
        <ProjectModal id="valbarometernModal">
            <div className="modal-header">
                <button type="button" className="close" onClick={() => closeModal(props.projectId ?? '')}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                </button>
                <h4 className="modal-title">
                    Valbarometern
                </h4>
            </div>
            <div className="modal-body">
                {
                    loading ? <LoadBox /> : null
                }
                {/* Statistics */}
                {/* <div data-ng-include src="'includes/build/projectStatus.html'" data-ng-cloak></div> */}
                {/* <ProjectStatus /> */}

                <div className="projectTabsContainer marginTop">
                    <div className="projectTab" /* data-ng-click="controller.selectTab('screenshots', 'valbarometern')" */ /* data-ng-className="{'projectTab--selected': controller.tabs['valbarometern'].selected == 'screenshots'}" */>
                        Screenshots
                    </div>
                    <div className="projectTabContent" /* data-ng-hide="controller.tabs['valbarometern'].selected != 'screenshots'" */>
                        {/* Carousel */}
                        <div className="carousel slide projectCarousel" data-ride="carousel" style={{ height: "500px" }}>
                            {/* Indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                                <li data-target="#myCarousel" data-slide-to="5"></li>
                                <li data-target="#myCarousel" data-slide-to="6"></li>
                                <li data-target="#myCarousel" data-slide-to="7"></li>
                                <li data-target="#myCarousel" data-slide-to="8"></li>
                            </ol>
                            {/* Wrapper for slides */}
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/1.png)", backgroundPosition: "center top", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                                    </div>
                                </div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/2.png)", backgroundPosition: "center bottom", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div></div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/3.png)", backgroundPosition: "center bottom", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div></div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/4.png)", backgroundPosition: "center top", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div></div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/5.png)", backgroundPosition: "center top", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div></div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/6.png)", backgroundPosition: "center top", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div></div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/7.png)", backgroundPosition: "center top", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div></div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/analytics/1.png", backgroundPosition: "center center", height: "500px" }}></div></div>
                                <div className="item"><div className="itemImage" style={{ backgroundImage: "url(src/assets/vk_screenshots/8.png)", backgroundPosition: "center center", height: "500px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div></div>
                            </div>

                            {/* Left and right controls */}
                            <a className="left carousel-control" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
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
                        Here are some examples: <a href="https://bulletin.nu/18-000-har-testat-bulletins-valbarometer-ovantat-resultat" target="_blank">article 1</a>, <a href="https://bulletin.nu/bulletins-valbarometer-det-blir-tufft-for-s-att-bilda-en-majoritetsregering" target="_blank">article 1</a>
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <a className="button floatRight" href="https://valbarometern.com/" target="_blank">
                    <p text="Valbarometern standalone site"></p>
                </a>
                <a className="button floatRight" href="https://bulletin.nu/valkompass" target="_blank">
                    <p text="Valkompass - hosted on Bulletin"></p>
                </a>
                <a className="button floatRight" href="https://bulletin.nu/valu" target="_blank">
                    <p text="Valundersökning - hosted on Bulletin"></p>
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