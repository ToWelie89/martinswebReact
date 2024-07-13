/* import * as THREE from 'three'; */

import { useEffect } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Test = styled.div`
  background-color: red;

  span {
    background-color: green;
  }
`;

function Start() {
  useEffect(() => {
    console.log('TEST ')
    
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