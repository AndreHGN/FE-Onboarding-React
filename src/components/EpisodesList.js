import styled from 'styled-components';
import Card from "./Card";

const EpisodesListStyled = styled.div`
    display: grid;
    margin : 20px 0px;
    text-align: left;
    grid-template-columns: repeat(2, 48%);
    column-gap: 4%;
    row-gap: 20px;
`;

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