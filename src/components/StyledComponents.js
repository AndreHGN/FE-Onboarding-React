import styled from 'styled-components';

export const BodyStyled = styled.div`
    border-radius: 8px;
    border: 2px solid var(--green);
    color: var(--lightblue);
    display: block;
    padding: 30px;
    margin: 0px 5% 10vh;
    background-color: var(--darkblue);
    width: 90%;
    box-shadow: 0 0 25px var(--green);
    text-align: center;
`;

export const BodyTitle = styled.h1`
    margin-bottom: 20px;
`;

export const BodyLine = styled.hr`
    border: 1px solid var(--lightblue);
`;

export const CardStyled = styled.div`
    border-radius: 8px;
    color: var(--darkblue);
    text-align: justify;
    border: 2px solid var(--darkblue);
    background-color: var(--lightblue);
    transition: 0.3s;
    padding: 20px;

    &:hover {
        border: 2px solid var(--green);
        box-shadow: 0 0 10px var(--green);
    }
`;

export const CardLine = styled.hr`
    border: 1px solid var(--darkblue);
    margin: auto;
    width: 100%;
`;

export const NameDateContainer = styled.div`
    margin-bottom: 20px;
`;

export const CharactersTitle = styled.h4`
    margin-top: 20px;
`;

export const CharactersContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 200px;
    overflow-y: auto;
`;

export const List = styled.ul`
    margin-left: 25px;
    width: 40%;
`;

export const Item = styled.li`
    margin-top: 4px;
`;

export const EpisodesListStyled = styled.div`
    display: grid;
    margin : 20px 0px;
    text-align: left;
    grid-template-columns: repeat(2, 48%);
    column-gap: 4%;
    row-gap: 20px;
`;

export const GeneralInfoStyled = styled.div`
    margin-bottom: 20px;
`;

export const Logo = styled.img`
    display: block;
    margin: auto;
    height: auto;
    width: 500px;
    margin-bottom: 60px;
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 5px;
    border-radius: 16px;
    border: 2px solid var(--lightblue);
    color: var(--lightblue);
    background-color: var(--darkblue);
    font-size: 12px;
    font-weight: bold;
    transition: 0.3s;
    
    &:hover {
        box-shadow: 0 0 4px var(--green);
        border: 2px solid var(--green);
        color: var(--darkblue);
        background-color: var(--lightblue);
    }

    &.selected {
        color: var(--darkblue);
        background-color: var(--lightblue);
    }

    margin: ${props => props.type === "filter" ? "0px 2px" : "20px 2px"};
    width: ${props => props.type === "numeric" ? "50px" : "100px"};
`;

export const FilterBar = styled.input`
    padding: 4px;
    border-radius: 4px;
    border: 2px solid var(--darkblue);
    color: var(--darkblue);
    background-color: var(--lightblue);
    transition: 0.3s;

    &::placeholder {
        color: #0a2130be;
    }

    &:hover {
        box-shadow: 0 0 4px var(--green);
        border: 2px solid var(--green);
        color: var(--darkblue);
        background-color: var(--lightblue); 
    }
`;

export const PaginationStyled = styled.div`
    display: flex;
    justify-content: center;
`;