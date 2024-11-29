import styled from "styled-components";

const ThreeDPrintsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

function ThreeDPrints() {
    return (
        <ThreeDPrintsContainer>
            3D prints coming soon
        </ThreeDPrintsContainer>
    );
}

export default ThreeDPrints;