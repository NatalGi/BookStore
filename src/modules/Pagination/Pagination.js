import React from 'react';
import PaginationItem from './PaginationItem';

import './Pagination.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const renderPaginationItems = (fromPage, toPage, activePage, pageCount) => {
  let paginationItems = [];

  if(activePage > 1) {
    paginationItems.push(<PaginationItem key={0} data={<FiChevronLeft />} activePage={activePage} type='arrow-back'/>);
  }

  for(let i = fromPage; i <= toPage; i++) {
    paginationItems.push(<PaginationItem key={i} data={i} activePage={activePage}  type='number'/>);
  }

  if(activePage < pageCount) {
    paginationItems.push(<PaginationItem key={toPage + 1} data={<FiChevronRight />} activePage={activePage}  type='arrow-forward'/>);
  }

  return paginationItems;
}

const Pagination = ({ page, pageCount }) => {
  const paginationRadius = 2;
  page = parseInt(page);
  let fromPage = 1;
  if(page > (paginationRadius + 1)) {
    if(page <= (pageCount - paginationRadius)) {
      fromPage = page - paginationRadius;
    } else if(pageCount > (paginationRadius * 2 + 1)) {
      fromPage = pageCount - (paginationRadius * 2);
    }
  }

  let toPage = pageCount;
  if(page < (paginationRadius + 1)) {
    if(pageCount >= (paginationRadius * 2 + 1)) {
      toPage = paginationRadius * 2 + 1;
    }
  } else if(page < (pageCount - paginationRadius)) {
    toPage = page + paginationRadius;
  }

  return (
    <div className="Pagination">
      {renderPaginationItems(fromPage, toPage, page, pageCount)}
    </div>
  );
}

export default Pagination;
