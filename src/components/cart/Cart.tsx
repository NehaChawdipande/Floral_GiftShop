import Item from './Item';
import {   RootStateOrAny, useSelector } from 'react-redux';
import { CartType,  ProductType } from '../Types.type';


const Cart = ()=>
{
        let total = 0;
    
        const cart:CartType = useSelector((state:RootStateOrAny)=>state.cart);
       // let cart = useSelector((state:CartType)=>state.cart) ;
       
        console.log(cart);
        cart.cart.map((item:ProductType) => total += item?.price * item.quantity); //total calculation
        if(cart.cart.length === 0) return <h5 className='title'>Cart is empty!</h5> 

        
       const mycart =  cart.cart.map((item:ProductType) => {
                            return (
                                <div className="d-inline-block" key={item.skuId} >
                                <Item item={item} quantity = {item.quantity} 
                                />
                                </div>
                            )
                        })

        return (<div >
            { mycart } 
                <div className="card">
                    <h4>Your total is ₹: <strong className="title-success"> {total}</strong></h4>
                
                </div>
        </div>)
    }

export default Cart;