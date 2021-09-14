import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class Cart extends Component
{
    render() {

        let total = 0;
        console.log(this.props.cart);
        this.props.cart.map(item => total += item.product.price * item.quantity);
        if(this.props.cart.length === 0) return <p className='title'>Cart is empty!</p>

        
        const mycart =  this.props.cart.map(item => {
                            return (
                                <div className="d-inline-block" key={item.product.skuId}>
                                    <Item item={item} />
                                </div>
                            )
                        })
                    
        // const cart  = this.props.cart.length > 0? (
        //     <>
        //         {
        //             this.props.cart.map(item => {
        //                     return (
        //                         <div key={item.product.id}>
        //                             <Item item={item} />
        //                         </div>
        //                     )
        //                 })
        //             }
        //         <h4 className="title text-right">Total <strong>${total.toFixed(3)}</strong></h4>
        //     </>

        // ) : (<p className='title'>Cart is empty!</p>)

        return (<div > { mycart } 
                <div className="card">
                    <h4>Your total is ₹: <strong className="title-success"> {total.toFixed(3)}</strong></h4>
                
                </div>
        </div>)
    }
}

const mapStateToProps = (state) => {

  return {
      cart: state.cart.cart
  }
};

export default connect(mapStateToProps)(Cart);