import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';

export const BorghildModal = (props: any) => {
  let loading = false;

  const dependencies = [
    'javascript',
    'nodejs',
    'machinelearning',
    'tesseract',
    'tensorflow',
    'opencv',
    'customvision',
    'electron',
  ];

  return (
    <ProjectModal
      id="borghildModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader
        label={'Borghild (D2R bot)'}
        onClose={props.onClose}
      />
      <div className="modal-body">
        {loading ? <LoadBox /> : null}
        <TechDependencies dependencies={dependencies}></TechDependencies>

        {/* <div className="projectTabsContainer marginTop">
                    {
                        tabs.map((x, i) => (
                            <div key={"modal-tab-" + i} className={`projectTab ${x === activeTab ? 'projectTab--selected' : ''}`} onClick={() => setActiveTab(x)}>
                                {x}
                            </div>
                        ))
                    }
                    {
                        activeTab === tabs[0] ?
                            (
                                <div className="projectTabContent">
                                    <Carousel showArrows={true} showThumbs={false} showIndicators={true} showStatus={false} useKeyboardArrows={true} dynamicHeight={true}>
                                        <div>
                                            <img src="./../src/assets/sti_screenshots/1.png" />
                                        </div>
                                        <div>
                                            <img src="./../src/assets/sti_screenshots/2.png" />
                                        </div>
                                        <div>
                                            <img src="./../src/assets/sti_screenshots/3.png" />
                                        </div>
                                        <div>
                                            <img src="./../src/assets/sti_screenshots/4.png" />
                                        </div>
                                    </Carousel>
                                </div>
                            ) : null
                    }
                </div> */}
        {/* Description */}
        <p className="marginTop--double">Coming soon</p>
      </div>
      <div className="modal-footer"></div>
    </ProjectModal>
  );
};