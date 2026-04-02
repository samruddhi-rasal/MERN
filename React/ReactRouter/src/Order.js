import React from 'react';

class Order extends React.Component {
  render() {
    return (
      <div>
        <h3>Order Details</h3>
        <h4>Customer: {this.props.customer}</h4>
        <hr />

        <p>Id: {this.props.id}</p>
        <p>Order Date: {this.props.orderdate}</p>
        <p>Amount: {this.props.amount}</p>
        <p>Status: {this.props.status}</p>

        <br />
        <button>Add to cart</button>
      </div>
    );
  }
}

export default Order;