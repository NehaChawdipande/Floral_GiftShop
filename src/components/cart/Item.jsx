import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../../store/actions/cartActions';


class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.quantity,
            btnVisible: false
        };
    }

    handleChange = (e) => {

        if(e.target.value <= 0) {
            alert("Quantity must be greater than or equal to 1");

            return;
        }

        if(e.target.value > this.props.item.product.amount) {
            alert("You have exceeded the available items of this product!");

            return;
        }

        if(this.state.quantity !== e.target.value) {
            this.setState({
                quantity: e.target.value,
                btnVisible: true
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.updateCartQuantity(this.props.item.product.skuId, this.state.quantity);

        this.setState({
            btnVisible: false
        });
    }

    handleRemove = (e) => {
        this.props.removeFromCart(this.props.item.product.skuId);
    }

  render() {

      const { item } = this.props;

      return (

          <div className='card' id="product-card">
              <div className='card-img'>
                    <img className="product-img" src={item.product.imgUrl} alt={item.product.ProductName}></img>
                    </div>
                    <hr/>
                    <h5 className="card-title"><strong>{item.product.ProductName}</strong></h5>
                    <h5><strong className='title-success'>Rs. {item.product.price}</strong></h5> 
                    <form onSubmit={this.handleSubmit}>
                      <div>
                          <label className="text-muted">Quantity:
                          <input type="number" className="form-control input-sm" onChange={this.handleChange} value={this.state.quantity}/></label>
                      </div>

                      {
                          this.state.btnVisible?(
                              <div>
                                  <button type="submit" className="btn btn-info">Update</button>
                              </div>
                          ) : null
                      }

                      <div>
                          <button type="button" onClick={this.handleRemove} className="btn btn-xs">
                              Remove Item from cart
                          </button>
                      </div>
                  </form>
              </div>
      
      )
  }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }
};

export default connect(null, mapDispatchToProps)(Item);