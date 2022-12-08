import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let { products, showDetailShoes } = this.props;
    return (
      <div className="container">
        <div className="row">
          {products.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <ProductItem showDetailShoes={showDetailShoes} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
