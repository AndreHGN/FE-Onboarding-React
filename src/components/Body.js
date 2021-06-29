import React, { useState } from 'react';
import { BodyStyled, BodyTitle, BodyLine, Loader, SmallLoader, Error } from './StyledComponents';
import EpisodesList from './EpisodesList';
import GeneralInfo from './GeneralInfo';
import Pagination from './Pagination';
import Filter from './Filter';
import useQuery from '../useQuery';

function Body()  {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("");
    
    const queryGetEpisodesInfo = `
        query getEpisodesInfo{
            episodes (page: ${currentPage}, filter: {name:"${filter}"}) {
                info{
                    count
                }
                results{
                    id
                    name
                    air_date
                    episode
                    characters {
                        id
                        name
                    }
                }
            }
        }
    `;
    
    const [loadingEpisodesInfo, errorEpisodesInfo, episodes] = useQuery(queryGetEpisodesInfo);

    const episodesInfo = errorEpisodesInfo ? (
        <Error>{errorEpisodesInfo.message}</Error> 
    ) : (
        <div>
            <GeneralInfo listed={episodes?.results.length} total={episodes?.info.count} />
            <EpisodesList episodes={episodes?.results} />
        </div>
    );
    
    function goToPreviousPage() {
        if (loadingEpisodesInfo) return;
        if (currentPage > 1) {
            const updatedPage = currentPage - 1;
            setCurrentPage(updatedPage);
        } 
        else alert("There is no more previous pages.");
    }
    
    function goToNextPage(maxPage) {
        if (loadingEpisodesInfo) return;
        if (currentPage < maxPage) {
            const updatedPage = currentPage + 1;
            setCurrentPage(updatedPage);
        } 
        else alert("There is no more next pages.");
    }

    function goToPageNumber(pageNumber) {
        if (loadingEpisodesInfo) return; 
        setCurrentPage(pageNumber);
    }

    function filterByName(input) {
        if (loadingEpisodesInfo) return;
        setCurrentPage(1);
        setFilter(input);
    }

    const queryGetMaxPage = `
        query getMaxPage {
            episodes (filter: {name:"${filter}"}) {
                info {
                    pages
                }
            }
        }
    `;

    const [loadingPagination, errorPagination, dataPagination] = useQuery(queryGetMaxPage);
    
    const pagination = errorPagination ? (
        <Error>Error loading pages</Error>
    ) : (
        <Pagination
            currentPage={currentPage}
            maxPage={dataPagination?.info.pages}
            goToPrev={() => goToPreviousPage()}
            goToNext={() => goToNextPage(dataPagination?.info.pages)}
            goToNumb={(number) => goToPageNumber(number)}
        />
    );

    return (
        <BodyStyled>
            <BodyTitle>LIST OF EPISODES</BodyTitle>
            <Filter onClick={(input) => filterByName(input)}/>
            {loadingPagination ? <SmallLoader /> : pagination}
            <BodyLine />
            {loadingEpisodesInfo ? <Loader /> : episodesInfo}
            <BodyLine />
            {loadingPagination ? <SmallLoader /> : pagination}
        </BodyStyled>
    );
}

export default Body;