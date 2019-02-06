import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import Pagination from '../Pagination/Pagination';
import compareObjects from '../../util/compareObjects';

import './ProductList.scss';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToPage: 6,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    const rangeFrom = (nextProps.page - 1) * nextState.itemsToPage;
    const rangeTo = (nextProps.page * nextState.itemsToPage);
    const productsTab = nextProps.products;
    const subProductsTab = productsTab.slice(rangeFrom, rangeTo);
    const pageCount = Math.ceil(productsTab.length/nextState.itemsToPage);
    const idsTab = nextProps.products.map(product => product.id);

    return {
      ...nextState,
      subProductsTab,
      pageCount,
      idsTab,
    }
  }

  render() {
    return (
      <div className="container">
        <div className="ProductList">
          {this.state.subProductsTab.map(
            (product, key) =>
            <ProductListItem
              key={product.id}
              product={product}
              idsTab={this.state.idsTab}
              itemIndex={(this.props.page-1) * this.state.itemsToPage + key} />
          )}
        </div>
        {this.props.page <= this.state.pageCount ? <Pagination className="Pagination" page={this.props.page} pageCount={this.state.pageCount}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products.productList).sort(compareObjects(state.products.displayOrder.field, state.products.displayOrder.direction)),
  }
}

export default connect(mapStateToProps)(ProductList);
