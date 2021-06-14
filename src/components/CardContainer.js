import './CardContainer.css';
import Card from "./Card";

function CardContainer(props) {

    const cards = props.episodes.map( episode => {
        return (
            <Card
                key={episode.episode}
                episode={episode.episode}
                name={episode.name}
                airDate={episode.airDate}
                characters={episode.characters}
            />
        );
    });

    return (
        <div className="card-container">
            {cards}
        </div>
    );
}

export default CardContainer;