import './Card.css';

function isEven(number) {
    return number % 2 === 0;
}

function Card(props) {

    const charactersListEven = [];
    const charactersListOdd = [];

    props.characters.forEach((character, index) => {
        const list = isEven(index) ? charactersListEven : charactersListOdd;
        list.push(<li key={index}>{character}</li>);
    })

    return (
        <div className="card">
            <div className="name-date">
                <h2>{props.episode} - {props.name}</h2>
                <p>{props.airDate}</p>
            </div>
            <hr className="line-card" />
            <h4>Characters: </h4>
            <div className="characters">
                <ul>
                    {charactersListEven}
                </ul>
                <ul>
                    {charactersListOdd}
                </ul>
            </div>
        </div>
    );
}

export default Card;
