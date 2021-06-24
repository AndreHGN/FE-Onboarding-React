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

const ep3 = {
    episode: "S01E03",
    name: "Anatomy Park",
    airDate: "December 16, 2013",
    characters: ["Rick Sanchez", "Morty Smith", "Alexander", "Jerry Smith"],
};

const ep4 = {
    episode: "S01E04",
    name: "M. Night Shaym-Aliens!",
    airDate: "December 23, 2013",
    characters: ["Rick Sanchez", "Morty Smith", "Beth Smith", "Jerry Smith", "Cynthia", "Kevin"],
};

const ep5 = {
    episode: "S01E05",
    name: "Meeseeks and Destroy",
    airDate: "December 30, 2013",
    characters: ["Rick Sanchez", "Morty Smith", "Meeseeks"],
};

const episodes = [ep1, ep2, ep3, ep4, ep5]

function getData(currentPage, filter) {
    const filteredEpisodes = episodes.filter(ep => ep.name.toLowerCase().includes(filter.toLowerCase()));

    const total = filteredEpisodes.length;
    const epPerPage = 2;
    const maxPage = Math.ceil(total/epPerPage);
    const startIndex = (currentPage-1)*2;
    const endIndex = startIndex + epPerPage > total ? total : startIndex + epPerPage;

    const data = {
        episodes: filteredEpisodes.slice(startIndex, endIndex),
        info: {
            total: total,
            maxPage: maxPage,
        }
    }

    return data;
}

export default getData;