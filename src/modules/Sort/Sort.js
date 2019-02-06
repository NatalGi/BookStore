import React from 'react';
import { connect } from 'react-redux';
import { sortAsc, sortDesc } from '../Product/ProductActions';

import './Sort.scss';

const Sort = props => {
  return (
    <div className="Sort">
      <h4 className="header">Sortuj:</h4>
      <button aria-label="Sortuj wg tytułu od A do Z" onClick={() => props.sortAsc("title")}>Tytuł A-Z</button>
      <button aria-label="Sortuj wg tytułu od Z do A" onClick={() => props.sortDesc("title")}>Tytuł Z-A</button>
      <button aria-label="Sortuj wg ceny rosnąco" onClick={() => props.sortAsc("price")}>Cena rosnąco</button>
      <button aria-label="Sortuj wg ceny malejąco" onClick={() => props.sortDesc("price")}>Cena malejąco</button>
    </div>
  );
}

const mapDispatchToProps = {
  sortAsc,
  sortDesc,
}

export default connect(null, mapDispatchToProps)(Sort);
