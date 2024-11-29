/* import * as THREE from 'three'; */

import { useEffect } from "react";

function Start() {
  useEffect(() => {    
    if (document.getElementById('sonesson3dlogo')) {
      (window as any).start3dAnimation();
    }
  }, []);

  return (
    <>
      {/* <Title>LOL</Title>
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <Test>
          Hey
          <span>Ho</span>
        </Test>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}

      <div className="centeringBox start">
        <div className="centeringInnerBox notSelectable">
          <div className="signature">
            <div id="sonesson3dlogooverlay">
            </div>
            <div id="sonesson3dlogo"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;