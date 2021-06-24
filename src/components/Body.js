import React from 'react';
import { BodyStyled, BodyTitle, BodyLine } from './StyledComponents';
import EpisodesList from './EpisodesList';
import GeneralInfo from './GeneralInfo';
import Pagination from './Pagination';
import Filter from './Filter';
import getData from '../mockData';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            filter: "",
        }
    }

    goToPreviousPage() {
        const page = this.state.currentPage;
        if (page > 1) {
            const updatedPage = page - 1;
            this.setState({
                currentPage: updatedPage,
                filter: this.state.filter,
            });
        } 
        else alert("There is no more previous pages.");
    }

    goToNextPage(maxPage) {
        const page = this.state.currentPage;
        if (page < maxPage) {
            const updatedPage = page + 1;
            this.setState({
                currentPage: updatedPage,
                filter: this.state.filter,
            });
        } 
        else alert("There is no more previous pages.");
    }

    goToPageNumber(pageNumber) {
        this.setState({
            currentPage: pageNumber,
            filter: this.state.filter,
        });
    }

    filterByName(input) {
        this.setState({
            currentPage: 1,
            filter: input,
        });
    }

    render() {

        const data = getData(this.state.currentPage, this.state.filter);

        const pagination = <Pagination
                                currentPage={this.state.currentPage}
                                maxPage={data.info.maxPage}
                                goToPrev={() => this.goToPreviousPage()}
                                goToNext={() => this.goToNextPage(data.info.maxPage)}
                                goToNumb={(number) => this.goToPageNumber(number)}
                            />

        return (
            <BodyStyled>
                <BodyTitle>LIST OF EPISODES</BodyTitle>
                <GeneralInfo listed={data.episodes.length} total={data.info.total} />
                <Filter onClick={(input) => this.filterByName(input)}/>
                {pagination}
                <BodyLine />
                <EpisodesList episodes={data.episodes} />
                <BodyLine />
                {pagination}
            </BodyStyled>
        );
    }
}

export default Body;