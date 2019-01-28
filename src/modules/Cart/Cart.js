import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPresentation from './CartPresentation';
import Money from 'money-math';
import parseCurrency from '../../util/parseCurrency';
import { addDiscountCode, deleteDiscountCode, updateCartAmount, deleteFromCart } from './CartActions';

const parse = (floatValue) => {
  return Money.floatToAmount(floatValue);
}

const add = (a, b) => {
  return Money.add(parse(a), Money.mul(parse(b.product.price), parse(b.amount)));
}

class Cart extends Component {
  constructor(props) {
    const isDiscountCode = Object.values(props.discountCode).length !== 0;
    super(props);
    this.state = {
      cartSum: 0,
      isDiscountCode: isDiscountCode,
      discountCodeInput: "",
      discountInfo: isDiscountCode ? this.defineDiscountInfo() : "",
      discountCodeError: false,
      errorMessage: "",
    }

    this.defineDiscountInfo = this.defineDiscountInfo.bind(this);
    this.discountCodeChangeHandler = this.discountCodeChangeHandler.bind(this);
    this.checkDiscountCode = this.checkDiscountCode.bind(this);
    this.popupExitHandler = this.popupExitHandler.bind(this);
  }

  defineDiscountInfo(discount = this.props.discountCode.discount, unit = this.props.discountCode.unit) {
    let discountInfo = "";
    discountInfo = "-" + discount;

    if(unit === "PLN") {
      discountInfo += " zł";
    } else {
      discountInfo += unit;
    }

    return discountInfo;
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    let cartSum = Money.format("PLN", parse(nextProps.products.reduce(add, 0)));
    const isDiscountCode = Object.values(nextProps.discountCode).length !== 0;

    if(isDiscountCode) {
      if(!nextProps.discountCode.limit || cartSum >= parse(nextProps.discountCode.limit)) {
        switch(nextProps.discountCode.unit) {
          case '%':
            cartSum = parseCurrency(Money.mul(cartSum, parse(
              Money.mul(
                Money.subtract(parse(100), parse(nextProps.discountCode.discount)), parse(0.01)
              )
            )));
            break;
          case 'PLN':
            cartSum = parseCurrency(Money.subtract(cartSum, parse(nextProps.discountCode.discount)));
            break;
          default:
            break;
        }
      }
    }
    return {
      ...nextState,
      cartSum,
      isDiscountCode,
    };
  }

  discountCodeChangeHandler(event) {
    this.setState({
      ...this.state,
      discountCodeInput: event.target.value,
    });
  }

  checkDiscountCode() { // Checking the code provided by the user is correct
    let isCodeCorrect = false;
    let newState = { ...this.state };

    for(let element of this.props.discountCodes) {
      if(element.code === this.state.discountCodeInput) { // Code is in the base
        isCodeCorrect = true;
        if(element.limit && this.state.cartSum < element.limit) { // Check the code usage limit
          newState.errorMessage = "Aby wykorzystać kod musisz zrobić zakupy za minimum " + element.limit + "zł";
          newState.discountCodeError = true;
        }
        this.props.addDiscountCode({
          code: element.code,
          discount: element.discount,
          unit: element.unit,
          limit: element.limit,
        });
        newState.isDiscountCode = true;
        newState.discountInfo =  this.defineDiscountInfo(element.discount, element.unit);
        break;
      }
    }

    if(!isCodeCorrect) { // Code is not in the base
      newState.isDiscountCode = false;
      newState.errorMessage = "Podany kod jest nieprawidłowy";
      newState.discountCodeError = true;
    }

    newState.discountCodeInput = "";
    this.setState(newState);
  }

  popupExitHandler() {
    this.setState({
      ...this.state,
      discountCodeError: false,
      errorMessage: ""
    });
  }

  render() {
    //console.log('ERROR: ' + this.state.discountCodeError);
    return (
      <CartPresentation
      products={this.props.products}
      state={this.state}
      discountCodeChangeHandler={this.discountCodeChangeHandler}
      checkDiscountCode={this.checkDiscountCode}
      deleteDiscountCode={this.props.deleteDiscountCode}
      popupExitHandler={this.popupExitHandler}
      updateCartAmount={this.props.updateCartAmount}
      deleteFromCart={this.props.deleteFromCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.cart.products),
    discountCode: state.cart.discountCode,
    discountCodes: Object.values(state.discountCodes),
  }
}

const mapDispatchToProps = {
  addDiscountCode,
  deleteDiscountCode,
  updateCartAmount,
  deleteFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
