import { LoadBox } from "./components/LoadBox";
import ProjectModal from "./components/ProjectModal";
import { ProjectStatus } from "./components/ProjectStatus";
import { openModal } from "./projectModals/ModalHelpers";
import { ValbarometernModal } from "./projectModals/valbarometernModal";

const ProjectTile = (props: any) => {

  const open = (ev : any) => {
    ev.preventDefault();
    console.log(ev)
    openModal(props.projectId);
  }

  return (
    <div className="grid-item">
      <a href="" data-content={props.label} id={props.projectId} style={props.style} onClick={open} />
    </div>
  )
}

const gitHubRepoNames = {
  risk: 'TotalRisk',
  starapp: 'StarApp',
  portfolio: 'martinsweb',
  snake: 'GyroSnake',
  instaanalytics: 'InstagramAnalytics',
  wcc: 'EuroCup2021Simulator',
  wh40k: 'Warhammer-40k-Unit-Simulator',
  flappyDoge: 'FlappyDoge',
  stockAnalyzer: 'StockAnalyzer',
};
const hardcodedProjectDependencies = {
  snake: ['java', 'android', 'git', 'mysql'],
  borghild: ['javascript', 'nodejs', 'machinelearning', 'tesseract', 'tensorflow', 'opencv', 'customvision'],
  portfolio: ['git', 'npm', 'grunt', 'angular', 'babel', 'karma', 'jquery', 'bootstrap'],
  risk: ['git', 'npm', 'grunt', 'angular', 'babel', 'jquery', 'bootstrap', 'electron', 'heroku', 'firebase', 'socket.io', 'nodejs'],
  valbarometern: ['git', 'npm', 'grunt', 'html', 'css', 'javascript', 'mysql', 'firebase'],
  sti: ['html', 'css', 'php', 'javascript', 'mysql', 'jquery'],
  stockAnalyzer: ['html'],
  boxByDoris: ['html', 'css'],
  exjobb: ['dotnet', 'csharp', 'visualstudio', 'wireshark'],
  mkp: ['java', 'html', 'css', 'android', 'svn'],
  wcc: ['git', 'npm', 'grunt', 'html', 'css', 'javascript'],
  flickrEditor: ['javascript', 'html', 'css'],
  gbgmuaythai: ['javascript', 'hexo', 'html', 'css', 'graphql', 'express', 'mysql']
};
const gitHubUserName = 'ToWelie89';
const dependenciesToLookForInPackage = [
  'grunt',
  'angular',
  'webpack',
  'babel',
  'karma',
  'react',
  'jquery',
  'bootstrap',
  'electron',
  'heroku',
  'firebase',
  'socket.io',
  'nodejs'
];

const removeDuplicates = (array: any[]) => {
  const dups = [];
  const arr = array.filter((el) => {
    // If it is not a duplicate, return true
    if (dups.indexOf(el) === -1) {
      dups.push(el);
      return true;
    }
    return false;
  });
  return arr;
}

const Projects = () => {

  let db, usedDependencies, currentOpenProject, loading = undefined;

  const localStorageDataIsOlderThanOneDay = (localStorageData: any) => {
    const timeStamp = localStorageData.timeStamp;
    const diff = Date.now() - timeStamp;
    return (diff > (1000 * 60 * 60 * 24));
  }

  const openProject = (projectId: string) => {
    currentOpenProject = projectId;
    /* $('#' + projectId + 'Modal').modal('toggle');

    $('.carousel-control.left').click(function () {
      $('.projectCarousel').carousel('prev');
    });
    $('.carousel-control.right').click(function () {
      $('.projectCarousel').carousel('next');
    });

    $('.carousel-indicators li').on('click', function () {
      $('.projectCarousel').carousel($(this).index());
    }); */

    //const localStorageData = JSON.parse(localStorage.getItem(`${this.currentOpenProject}StorageData`));

    /* if (localStorageData && !this.localStorageDataIsOlderThanOneDay(localStorageData)) {
      db = localStorageData.db;
      usedDependencies = localStorageData.usedDependencies;
      usedDependencies = removeDuplicates(this.vm.usedDependencies);
      //this.initializeStatistics();
      loading = false;
    } else {
      //this.getDataForRepoFromGithub();
    } */
  }

  const reset = () => {
    db = {
      js: 0,
      html: 0,
      php: 0,
      css: 0,
      less: 0,
      ts: 0,
      xml: 0,
      json: 0,
      scss: 0,
      cs: 0,
      java: 0,
      svg: 0
    };
    usedDependencies = [];
    currentOpenProject = '';
  }

  return (
    <div className="projects">
      <div className="mainContentItem full center" style={{ height: '100%', width: '100%', float: 'none', margin: '0 auto' }}>
        <ProjectTile label="TotalRisk" projectId="risk" style={{ background: "url(src/assets/projectThumbnails/ecmaRisk2.png)", backgroundPosition: "center -15px" }} />
        <ProjectTile label="Stock Analyzer" projectId="stockAnalyzer" style={{ background: "url(src/assets/projectThumbnails/stockAnalyzer.png)" }} />
        <ProjectTile label="Portfolio" projectId="portfolio" style={{ background: "url(src/assets/projectThumbnails/portfolio.png)" }} />
        <ProjectTile label="STI-Starcraft" projectId="sti" style={{ background: "url(src/assets/projectThumbnails/sti.png)" }} />
        <ProjectTile label="Valbarometern" projectId="valbarometern" style={{ background: "url(src/assets/projectThumbnails/valbarometern.png)" }} />
        <ProjectTile label="Borghild (D2R bot)" projectId="borghild" style={{ background: "url(src/assets/projectThumbnails/borghild.png)" }} />
        <ProjectTile label="Gyro Snake" projectId="snake" style={{ background: "url(src/assets/projectThumbnails/snake.png)" }} />
        <ProjectTile label="Instagram Analyzer" projectId="instaanalytics" style={{ background: "url(src/assets/projectThumbnails/instaanalytics.png)" }} />
        <ProjectTile label="Bachelors thesis" projectId="exjobb" style={{ background: "url(src/assets/projectThumbnails/exjobb.png)" }} />
        <ProjectTile label="World/Euro Cup Calculator" projectId="wcc" style={{ background: "url(src/assets/projectThumbnails/wcc.png)" }} />
        <ProjectTile label="Box By Doris" projectId="boxByDoris" style={{ background: "url(src/assets/projectThumbnails/boxByDoris.png)" }} />
        <ProjectTile label="Mobile Keyring" projectId="mkp" style={{ background: "url(src/assets/projectThumbnails/mkp.png)" }} />
        <ProjectTile label="GBG Muay Thai" projectId="gbgmuaythai" style={{ background: "url(src/assets/projectThumbnails/gbgmuaythai.png)", backgroundPostionX: '-64px', backgroundPositionY: '-49px', backgroundSize: '160% auto !important' }} />
        <ProjectTile label="Star App" projectId="starapp" style={{ background: "url(src/assets/projectThumbnails/starapp.png)" }} />
        <ProjectTile label="FlappyDoge" projectId="flappyDoge" style={{ background: "url(src/assets/projectThumbnails/flappyDoge.png)" }} />
        {/*
      <div className="grid-item">
        <a href="" data-content="Star App" data-ng-click="controller.openProject('starapp')" style="background: url(../../build/assets/projectThumbnails/starapp.png)">
        </a>
      </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="FlappyDoge" data-ng-click="controller.openProject('flappyDoge')" style="background: url(../../build/assets/projectThumbnails/flappyDoge.png)">
          </a>
        </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="Arduino Robot" data-ng-click="controller.openProject('arduinoRobot')" style="background: url(../../build/assets/projectThumbnails/arduinoRobot.png)">
          </a>
        </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="WH40k Simulator" data-ng-click="controller.openProject('wh40k')" style="background: url(../../build/assets/projectThumbnails/wh40k.png)">
          </a>
        </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="Flickr Editor" data-ng-click="controller.openProject('flickrEditor')" style="background: url(../../build/assets/projectThumbnails/flickrEditor.png)">
          </a>
        </div> */}
      </div>

      <ValbarometernModal projectId="valbarometern" />
    </div>
  );
}

export default Projects;