import styled from "styled-components"
import helpers from "../helpers/helpers";

export enum TechGrade {
    Beginner = 1,
    Decent = 2,
    Experienced = 3,
    Adept = 4,
    Fluent = 5,
}

const CircularProgressContainer = styled.span`
    background: transparent !important;
    background-color: transparent !important;
    position: relative;
    max-width: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
        margin: 0 auto;
        position: absolute;

        transform: scale(1.4);
        transform-origin: center;
        top: 40%;
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.8));
    }

    > span {
        margin: 0 auto;
        position: absolute;

        max-width: 10px;
        transform: scale(2.8);
        line-height: 100%;
        transform-origin: center;
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.8));
    }
`;

const CircularProgressSvg = styled.svg`
    --size: 90px;
    --half-size: calc(var(--size) / 2);
    --stroke-width: 12px;
    --radius: calc((var(--size) - var(--stroke-width)) / 2);
    --circumference: calc(var(--radius) * pi * 2);
    background: transparent !important;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
    --dash: calc(((var(--progress) * var(--circumference)) / 100));
`;

const Circle = styled.circle`
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: none;
    stroke-linecap: round;
    background: transparent;
`;

const BgCircle = styled(Circle)`
    stroke: #ddd;
`;

const FgCircle = styled(Circle)`
    transform: rotate(-74deg);
    transform-origin: var(--half-size) var(--half-size);
    stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
    transition: stroke-dasharray 0.3s linear 0s;
`;

export const CircularTechGrade = (props: any) => {
    const getExtraClassForProgressSvgByGrade = (grade: TechGrade) => {
        switch (grade) {
            case TechGrade.Beginner:
                return 'progressAnimationBeginnerClass';
            case TechGrade.Decent:
                return 'progressAnimationDecentClass';
            case TechGrade.Experienced:
                return 'progressAnimationExperiencedClass';
            case TechGrade.Adept:
                return 'progressAnimationAdeptClass';
            case TechGrade.Fluent:
                return 'progressAnimationFluentClass';
        }
    }

    const getExtraClassForFgCircleByGrade = (grade: TechGrade) => {
        switch (grade) {
            case TechGrade.Beginner:
                return 'fgCircleColorAnimationBeginnerClass';
            case TechGrade.Decent:
                return 'fgCircleColorAnimationDecentClass';
            case TechGrade.Experienced:
                return 'fgCircleColorAnimationExperiencedClass';
            case TechGrade.Adept:
                return 'fgCircleColorAnimationAdeptClass';
            case TechGrade.Fluent:
                return 'fgCircleColorAnimationFluentClass';
        }
    }

    return (
        <div>
            <CircularProgressContainer>
                <CircularProgressSvg
                    width="90"
                    height="90"
                    viewBox={`0 0 90 90`}
                    data-tooltip-place="top"
                    className={getExtraClassForProgressSvgByGrade(props.grade)}
                >
                    <BgCircle />
                    <FgCircle className={getExtraClassForFgCircleByGrade(props.grade)} />
                </CircularProgressSvg>
                {helpers.getElementForDep(props.tech)}
            </CircularProgressContainer>
        </div>
    )
}