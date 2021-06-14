import React from 'react';
import './MainContent.css';
import CardContainer from './CardContainer';
import GeneralInfo from './GeneralInfo';

class MainContent extends React.Component {
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
            <div className="main-content">
                <h1 className="title">LIST OF EPISODES</h1>
                <GeneralInfo info={info}/>
                <hr className="container-line"/>
                <CardContainer episodes={episodes}/>
                <hr className="container-line" />
            </div>
        );
    }
}

export default MainContent;