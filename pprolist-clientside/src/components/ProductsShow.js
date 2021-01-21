import React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../actions/deleteProduct";

class ProductsShow extends React.Component {
  handleDelete = product => {
    this.props.deleteProduct(product.id, product.vendor_id);
  };

  render() {
    return (
      <div>
        {this.props.products &&
          this.props.products.map(product => (
            <Product
              product={product}
              onDelete={() => this.handleDelete(product)}
            />
          ))}
      </div>
    );
  }
}

class Product extends React.Component {
  state = {
    like: 0
  };

  handleLike = () => {
    this.setState({
      like: this.state.like + 1
    });
  };

  render() {
    const { product, onDelete } = this.props;
    return (
      <div className="product_info" key={product.id} id={product.id}>
        <h3 id="prod_name_header">{product.name}</h3>
        <li>Description: {product.description}</li>
        <li> price: ${product.price}</li>
        <li key={product.kind}> Kind: {product.kind}</li>
        <li key={product.discount_rate}>
          {" "}
          discount-rate: {product.discount_rate}
        </li>
        <br />
        <button onClick={onDelete}>Delete</button>
        <button onClick={this.handleLike}>Likes: {this.state.like}</button>
      </div>
    );
  }
}

export default connect(null, {deleteProduct})(ProductsShow)
