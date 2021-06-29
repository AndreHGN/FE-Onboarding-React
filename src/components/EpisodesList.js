import { EpisodesListStyled, Error } from './StyledComponents';
import Card from "./Card";

function EpisodesList(props) {

    const cards = props.episodes?.map( episode => {
        return (
            <Card
                key={episode.id}
                episode={episode.episode}
                name={episode.name}
                airDate={episode.air_date}
                characters={episode.characters}
            />
        );
    });

    return (
        props.episodes ? (
            <EpisodesListStyled>
                {cards}
            </EpisodesListStyled>
        ) : (
            <Error>Not found</Error>
        )
    );
}

export default EpisodesList;