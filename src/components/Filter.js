import { FilterBar, Button } from './StyledComponents';

function Filter(props) {
    let filterInput;

    return (
        <div>
            <FilterBar 
                type="text" 
                placeholder="Filter by name"
                onChange={evt => filterInput = evt.target.value} 
            />
            <Button
                type="filter"
                onClick={() => props.onClick(filterInput)}
            >
                Filter
            </Button>
        </div>
    );
}

export default Filter;