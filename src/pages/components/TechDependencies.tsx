import { Tooltip } from 'react-tooltip'

import helpers from '../helpers/helpers';

const TechDependencies = (props: any) => {
    return (
        <>
            <div className="marginBottom--double dependenciesList">
                {
                    props.dependencies ? props.dependencies.map((x: string, i: number) => {
                        return (
                            <span key={i}>
                                <span data-for={'tech-dependency-tooltip-key-' + i} key={'tech-dependency-key-' + i} data-tooltip-id={"tech-tooltip-" + i} data-tooltip-content={helpers.FormatCorrectNameForTech(x)} data-tooltip-place="top">
                                    {helpers.getElementForDep(x)}
                                </span>
                            </span>
                        );
                    }) : null
                }
            </div>

            {
                props.dependencies ? props.dependencies.map((x: string, i: number) => {
                    return (
                        <Tooltip opacity={1} positionStrategy="fixed" place="bottom" key={'tech-dependency-tooltip-key-' + i} id={"tech-tooltip-" + i} style={{ zIndex:'999999', textAlign: 'center', color: 'black', background: 'white', fontSize: '14px', minWidth: '140px', fontWeight: '600', borderRadius: '0px', opacity: '1', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.4))' }} />
                    );
                }) : null
            }
        </>
    )
}

export default TechDependencies;