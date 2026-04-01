import React from 'react';

class Product extends React.Component {

    render(){
        return(
            <div>
                <h3>Product Details</h3>

                <p>Title : Girl Before Mirror</p>
                <img src="/images/GirlBeforeAMirror.jpg" width="100" height="100"/>
                <p>Price : Rs100000</p>
                <br/>
                <button>Add to Cart</button>

            </div>
        );
    }
}

export default Product;
