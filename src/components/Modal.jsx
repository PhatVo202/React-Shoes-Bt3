import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { arrayShoes } = this.props;
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Detail Shoes</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    <p>Name: {arrayShoes.name}</p>
                    <p>Price: {arrayShoes.price}$</p>
                    <p>Description: {arrayShoes.description}</p>
                    <p>Quantity: {arrayShoes.quantity}</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
