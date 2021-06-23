import { GeneralInfoStyled } from './StyledComponents';

function GeneralInfo(props) {
    return (
        <GeneralInfoStyled>
            <p>Listed episodes: {props.info.listed}</p>
            <p>Total of episodes: {props.info.total}</p>
        </GeneralInfoStyled>
    );
}

export default GeneralInfo;