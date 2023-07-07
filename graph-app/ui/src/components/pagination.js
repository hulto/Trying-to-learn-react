import React from 'react'
import { Pagination } from 'semantic-ui-react'


const MyPagination = ({setPageRef, pagesCount, activePage}) => {
    console.log(activePage);
    const handleClick = (event, data) => {
        console.log(event);
        setPageRef(data['activePage']);
    }
    return (
        <Pagination onPageChange={handleClick} defaultActivePage={1} totalPages={pagesCount-1} activePage={activePage} />
    )
}

export default MyPagination;
