import { EpisodesListStyled } from './StyledComponents';
import Card from "./Card";

function EpisodesList(props) {

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
        <EpisodesListStyled>
            {cards}
        </EpisodesListStyled>
    );
}

export default EpisodesList;