import { GeneralInfoStyled } from './StyledComponents';

function GeneralInfo(props) {
    return (
        <GeneralInfoStyled>
            <p>Listed episodes: {props.listed}</p>
            <p>Total of episodes: {props.total}</p>
        </GeneralInfoStyled>
    );
}

export default GeneralInfo;