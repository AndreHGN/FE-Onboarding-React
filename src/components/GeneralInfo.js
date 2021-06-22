import styled from 'styled-components';

const GeneralInfoStyled = styled.div`
    margin-bottom: 20px;
`;

function GeneralInfo(props) {
    return (
        <GeneralInfoStyled>
            <p>Listed episodes: {props.info.listed}</p>
            <p>Total of episodes: {props.info.total}</p>
        </GeneralInfoStyled>
    );
}

export default GeneralInfo;