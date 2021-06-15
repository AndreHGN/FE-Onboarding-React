import styled from 'styled-components';

function isEven(number) {
    return number % 2 === 0;
}

const CardDiv = styled.div`
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

const CardLine = styled.hr`
    border: 1px solid var(--darkblue);
    margin: auto;
    width: 100%;
`;

const NameDateDiv = styled.div`
    margin-bottom: 20px;
`;

const CharactersTitle = styled.h4`
    margin-top: 20px;
`;

const CharactersDiv = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 200px;
    overflow-y: auto;
`;

const List = styled.ul`
    margin-left: 25px;
    width: 40%;
`;

const Item = styled.li`
    margin-top: 4px;
`;

function Card(props) {


    const charactersListEven = [];
    const charactersListOdd = [];

    props.characters.forEach((character, index) => {
        const list = isEven(index) ? charactersListEven : charactersListOdd;
        list.push(<Item key={index}>{character}</Item>);
    })

    return (
        <CardDiv>
            <NameDateDiv>
                <h2>{props.episode} - {props.name}</h2>
                <p>{props.airDate}</p>
            </NameDateDiv>
            <CardLine />
            <CharactersTitle>Characters: </CharactersTitle>
            <CharactersDiv>
                <List>
                    {charactersListEven}
                </List>
                <List>
                    {charactersListOdd}
                </List>
            </CharactersDiv>
        </CardDiv>
    );
}

export default Card;
