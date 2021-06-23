import { PaginationStyled, Button } from './StyledComponents';

function Pagination(props) {
    const numericButtons = Array(props.maxPage).fill().map((_, index) => {
        const pageNumber = index + 1;
        return (
            <Button key={pageNumber} type="numeric"> {pageNumber} </Button>
        );
    });

    return (
        <PaginationStyled>
            <Button>Previous</Button>
            {numericButtons}
            <Button>Next</Button>
        </PaginationStyled>       
    );
}

export default Pagination;