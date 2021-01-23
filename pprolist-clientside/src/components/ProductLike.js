import React from "react"

class ProductLike extends React.Component {
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

  export default ProductLike