import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';

export const BachelorsThesisModal = (props: any) => {
  let loading = false;

  const dependencies = ['dotnet', 'csharp', 'visualstudio', 'wireshark'];

  return (
    <ProjectModal
      id="exjobbModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader label={'Bachelors Thesis'} onClose={props.onClose} />
      <div className="modal-body">
        {loading ? <LoadBox /> : null}
        <TechDependencies dependencies={dependencies}></TechDependencies>
        <img src="./../src/assets/exjobb.png" />
        <p>
          This is my bachelors thesis I did at my time at Chalmers together with
          another student. The work was carried out at the company ESAB, a
          company that develops robotic welding systems used in industrial
          settings. These systems were composed of a robotic welding arm, a
          voltage outage, a controller unit etc. Their problems was that they
          lacked an efficient way to analyze the data traffic between
          components, something that can be very crucial when searching for the
          source of various problems in the field.
        </p>
        <p className="marginTop--double">
          These systems communicated via CAN nodes or via Ethernet, using
          different protocols. We ultimately ended up creating two different
          solutions, one for each type of communication. For Ethernet we created
          a dissector, a plugin, for the popular open source software Wireshark,
          used for sniffing network traffic. Our plugin could interpret packets
          between the components based on ESAB's memory model so that the user
          can easily see exceptions and shifting flags. For CAN traffics we
          developed an application in C# that communicated via an Ixxat
          CAN-to-USB adapter and could thus read data in realtime, print graphs
          etc.
        </p>
        <p className="marginTop">
          For more information the entire report can be downloaded below.
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="./../src/documents/BachelorsThesisReport.pdf"
          target="_blank"
          download="BachelorsThesisReport.pdf"
        >
          <p data-text="Report"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
