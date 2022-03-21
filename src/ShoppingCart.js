import { Component } from "react";

class ShoppingCart extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div onClick={this.props.onDisplayCart} className='btn btn-primary'>Shopping Cart: <span className='badge bg-light text-dark'>{this.props.totalItems}</span></div>
        </div>
      </nav>
    );
  }
}

export default ShoppingCart;