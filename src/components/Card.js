import {
    CardStyled,
    CardLine,
    NameDateContainer,
    CharactersTitle,
    CharactersContainer,
    List,
    Item
} from './StyledComponents';

function isEven(number) {
    return number % 2 === 0;
}

function Card(props) {

    const charactersListEven = [];
    const charactersListOdd = [];

    props.characters.forEach((character, index) => {
        const list = isEven(index) ? charactersListEven : charactersListOdd;
        list.push(<Item key={character.id}>{character.name}</Item>);
    })

    return (
        <CardStyled>
            <NameDateContainer>
                <h2>{props.episode} - {props.name}</h2>
                <p>{props.airDate}</p>
            </NameDateContainer>
            <CardLine />
            <CharactersTitle>Characters: </CharactersTitle>
            <CharactersContainer>
                <List>
                    {charactersListEven}
                </List>
                <List>
                    {charactersListOdd}
                </List>
            </CharactersContainer>
        </CardStyled>
    );
}

export default Card;
