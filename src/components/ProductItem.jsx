import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, showDetailShoes } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={item.image} alt="#" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}$</p>
          <button
            onClick={() => showDetailShoes(item)}
            data-toggle="modal"
            data-target="#modelId"
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
