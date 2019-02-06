import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Cart/CartActions';
import parseCurrency from '../../util/parseCurrency';
import Swipeable from 'react-swipeable';

import './ProductDetails.scss';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: props.match.params.id,
      itemIndex: props.location.state ? props.location.state.itemIndex : false,
      idsTab: props.location.state ? props.location.state.idsTab : false,
    }

    this.swipLeft = this.swipLeft.bind(this);
    this.swipRight = this.swipRight.bind(this);
  }

  swipLeft() {
    if(this.state.itemIndex === (this.state.idsTab.length - 1)) {
      this.setState({
        ...this.state,
        itemIndex: 0,
        itemId: this.state.idsTab[0],
      });
    } else {
      const newItemIndex = this.state.itemIndex + 1;
      this.setState({
        ...this.state,
        itemIndex: newItemIndex,
        itemId: this.state.idsTab[newItemIndex],
      });
    }
  }

  swipRight() {
    if(this.state.itemIndex === 0) {
      this.setState({
        ...this.state,
        itemIndex: this.state.idsTab.length - 1,
        itemId: this.state.idsTab[this.state.idsTab.length - 1],
      });
    } else {
      const newItemIndex = this.state.itemIndex - 1;
      this.setState({
        ...this.state,
        itemIndex: newItemIndex,
        itemId: this.state.idsTab[newItemIndex],
      });
    }
  }

  render() {
    let product = {};

    if(this.props.products[this.state.itemId]) {
      product = { ...this.props.products[this.state.itemId] };
      product.desc = product.desc.split('\n').map(function(item, key) {
        return (
          <p key={key}>
            {item}
            <br/>
          </p>
        )
      });
    }

    return (

      <Swipeable className="ProductDetails"
        onSwipedLeft={() => (this.state.itemIndex !== false ? this.swipLeft() : "")}
        onSwipedRight={() => (this.state.itemIndex !== false ? this.swipRight() : "")}
      >
        <div className="section-one">
          <div className="pic-container">
            <img className="pic" src={product.pic ? require(`../../data${product.pic}`) : ""} alt={product.title} />
          </div>
          <div className="info-container">
            {product.state !== "false" ? <div className="state">{product.state}</div> : ""}
            <h5 className="author">{product.author}</h5>
            <h2 className="title">{product.title}</h2>
            <h3 className="subtitle">{product.subtitle}</h3>
            <h5 className="info">Rok wydania: {product.year}</h5>
            <h5 className="divider"> | </h5>
            <h5 className="info">Wydawnictwo: {product.publisher}</h5>
            <h5 className="divider"> | </h5>
            <h5 className="info">Ilość stron: {product.pages}</h5>
            <h5 className="divider"> | </h5>
            <h5 className="info">Oprawa: {product.cover}</h5>
            <h3 className="price">{product.price ? parseCurrency(product.price) : 0} zł</h3>
            <button className="basket-btn" onClick={() => this.props.addToCart(product)}>Dodaj do koszyka</button>
          </div>
        </div>
        <div className="section-two">
          <div className="description">
            <div className="desc">{product.desc}</div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.productList,
  }
}

const mapDispatchToProps = {
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
