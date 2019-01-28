import React from 'react';
import { Link } from 'react-router-dom';

import './PaginationItem.scss';

const PaginationItem = ({ data, activePage, type }) => {
  let linkClass = "PaginationItem";
  let link = data;
  if(data === activePage) {
    linkClass += " active"
  }

  if(type === 'arrow-back') {
    link = activePage - 1;
  } else if(type === 'arrow-forward') {
    link = activePage + 1;
  }

  return (
      <Link className={linkClass} to={'/page/' + link}>
        {data}
      </Link>
  );
}

export default PaginationItem;
