function Product(props) { //PROPS IS PROPERTIES
  return (  //props is an object containing data passed from parent (your List component)
    <div>
      <h1>Product Details</h1>
      <p>Title: {props.title}</p>
      <img src={props.imageurl} alt={props.title} width="150" />
      <p>Description: {props.description}</p>
      <p>Price: Rs{props.unitprice}</p>
      <p>Quantity: {props.quantity}</p>
      <p>Likes: {props.likes}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;