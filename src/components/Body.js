import React from 'react';
import styled from 'styled-components';
import EpisodesList from './EpisodesList';
import GeneralInfo from './GeneralInfo';

const BodyStyled = styled.div`
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

const Title = styled.h1`
    margin-bottom: 20px;
`;

const BodyLine = styled.hr`
    border: 1px solid var(--lightblue);
`;

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
        };

        const episodes = [ep1, ep2];

        return (
            <BodyStyled>
                <Title>LIST OF EPISODES</Title>
                <GeneralInfo info={info} />
                <BodyLine />
                <EpisodesList episodes={episodes} />
                <BodyLine />
            </BodyStyled>
        );
    }
}

export default Body;