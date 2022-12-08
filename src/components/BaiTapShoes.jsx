import React, { Component } from "react";
import data from "../data/datashoes.json";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class BaiTapShoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,

      arrayShoes: data[0],
    };
  }

  showDetailShoes = (item) => {
    this.setState({
      arrayShoes: item,
    });
  };

  render() {
    let {
      products,
      nameShoes,
      alias,
      price,
      description,
      shortDescription,
      quantity,
    } = this.state;
    return (
      <>
        <h1 className="text-center">Shoes shop</h1>
        <ProductList
          showDetailShoes={this.showDetailShoes}
          products={products}
        />
        <Modal arrayShoes={this.state.arrayShoes} />
      </>
    );
  }
}
