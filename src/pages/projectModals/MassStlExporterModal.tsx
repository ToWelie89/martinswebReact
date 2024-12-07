import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';
import { useState } from 'react';

export const MassStlExporterModal = (props: any) => {
  let loading = false;

  const tabs = ['Video'];
  const dependencies = ['blender', 'python'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ProjectModal
      id="massStlExporterModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader label={'Mass STL Exporter'} onClose={props.onClose} />
      <div className="modal-body">
        {loading ? <LoadBox /> : null}
        <TechDependencies dependencies={dependencies}></TechDependencies>

        <div className="projectTabsContainer marginTop">
          {tabs.map((x, i) => (
            <div
              key={'modal-tab-' + i}
              className={`projectTab ${x === activeTab ? 'projectTab--selected' : ''}`}
              onClick={() => setActiveTab(x)}
            >
              {x}
            </div>
          ))}
          {activeTab === tabs[0] ? ( // Screenshots
            <div className="projectTabContent">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/ykBDS1R4W_8?si=lbf_8SE1OBN5LjmC"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </div>
        {/* Description */}
        <p className="marginTop--double">
          This is an addon that I developed for Blender. Blender is a free open
          source 3D modelling and animation software that allows people to make
          their own addons, that can perform custom operations that aren't
          natively supported by Blender. I had an issue when working on a
          Blender project where I wanted to export many variations of a specific
          3D object, with just slight variations, to STL files. Because of the
          large number of variations it would have taken me quite a long time to
          do it manually. That's why I developed this addon, which lets users
          quickly export many STL files with just a few clicks. The addon is up
          on Gumroad (see download link below) where other people can purchase
          it. The video above explains the use case and how to use the addon
          quite thouroughly.
        </p>
        <p className="marginTop--double">
          The addon itself is written in Python, utilizing{' '}
          <a
            href="https://docs.blender.org/api/current/index.html"
            target="_blank"
          >
            bpy
          </a>
          .
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="https://sonesson.gumroad.com/l/mass-stl-exporter"
          target="_blank"
        >
          <p data-text="Gumroad product page"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
