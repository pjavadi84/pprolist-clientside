import React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../actions/deleteProduct";
import ProductLike from "../components/ProductLike"
class ProductsShow extends React.Component {
  handleDelete = product => {
    this.props.deleteProduct(product.id, product.vendor_id);
  };

  render() {
    return (
      <div>
        {this.props.products &&
          this.props.products.map(product => (
            <div key={product.id}>
            <ProductLike
              product={product}
              onDelete={() => this.handleDelete(product)}
            />
            </div>
          ))}
      </div>
    );
  }
}



export default connect(null, {deleteProduct})(ProductsShow)
