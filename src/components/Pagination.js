import { PaginationStyled, Button } from './StyledComponents';

function Pagination(props) {
    const numericButtons = Array(props.maxPage).fill().map((_, index) => {
        const pageNumber = index + 1;
        return (
            <Button
                className={props.currentPage === pageNumber && "selected"}
                key={pageNumber}
                type="numeric"
                onClick={() => props.goToNumb(pageNumber)}
            >
                {pageNumber}
            </Button>
        );
    });

    return (
        <PaginationStyled>
            <Button onClick={props.goToPrev}>
                Previous
            </Button>
            {numericButtons}
            <Button onClick={props.goToNext}>
                Next
            </Button>
        </PaginationStyled>       
    );
}

export default Pagination;