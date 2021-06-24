import React from 'react';
import { BodyStyled, BodyTitle, BodyLine } from './StyledComponents';
import EpisodesList from './EpisodesList';
import GeneralInfo from './GeneralInfo';
import Pagination from './Pagination';
import Filter from './Filter';

class Body extends React.Component {

    render() {

        const ep1 = {
            episode: "S01E01",
            name: "Pilot",
            airDate: "December 2, 2013",
            characters: ["Rick Sanchez", "Morty Smith", "Beth Smith", "Jerry Smith", "Summer Smith"],
        };

        const ep2 = {
            episode: "S01E02",
            name: "Lawnmower Dog",
            airDate: "December 9, 2013",
            characters: ["Rick Sanchez", "Morty Smith", "Beth Smith", "Jerry Smith", "Creepy Little Girl"],
        };

        const info = {
            listed: 2,
            total: 41,
            maxPage: 3,
        };

        const episodes = [ep1, ep2];

        return (
            <BodyStyled>
                <BodyTitle>LIST OF EPISODES</BodyTitle>
                <GeneralInfo info={info} />
                <Filter />
                <Pagination maxPage={info.maxPage} />
                <BodyLine />
                <EpisodesList episodes={episodes} />
                <BodyLine />
                <Pagination maxPage={info.maxPage} />
            </BodyStyled>
        );
    }
}

export default Body;