import styled from "styled-components";
/* import reactLogo from "./../assets/react.svg";
import viteLogo from "./../assets/vite.svg"; */

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
    return (
      <>
        <Title>LOL</Title>
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
        </p>
      </>
    );
  }
  
  export default Start;