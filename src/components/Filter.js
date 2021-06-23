import { FilterBar, Button } from './StyledComponents';

function Filter() {
    return (
        <div>
            <FilterBar 
                type="text" 
                placeholder="Filter by name" 
            />
            <Button type="filter">Filter</Button>
        </div>
    );
}

export default Filter;