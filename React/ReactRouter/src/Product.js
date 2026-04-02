import Counter from "./Counter";
import React from 'react';

class Product extends React.Component {

  constructor(props) {
    super(props);

    this.state = { likes: props.likes };

    this.handler = this.handler.bind(this);
  }

  handler(data) {
    this.setState({ likes: data });
  }

  render() {
    return (
      <div>
        <h1><u>Product Details</u></h1>

        <p>Title: {this.props.title}</p>

        <img 
          src={this.props.imageurl} 
          alt={this.props.title} 
          width="150" 
        />

        <p>Description: {this.props.description}</p>
        <p>Price: Rs{this.props.unitprice}</p>
        <p>Quantity: {this.props.quantity}</p>

        {/* ✅ USE STATE HERE */}
        <p>Likes: {this.state.likes}</p>

        {/* ✅ PASS STATE + HANDLER */}
        <Counter 
          count={this.state.likes} 
          handler={this.handler}
        />

        <button>Add to Cart</button>
      </div>
    );
  }
}

export default Product;