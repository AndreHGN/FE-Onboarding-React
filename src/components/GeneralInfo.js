import styled from 'styled-components';

const GeneralInfoDiv = styled.div`
    margin-bottom: 20px;
`;

function GeneralInfo(props) {
    return (
        <GeneralInfoDiv>
            <p>Listed episodes: {props.info.listed}</p>
            <p>Total of episodes: {props.info.total}</p>
        </GeneralInfoDiv>
    );
}

export default GeneralInfo;