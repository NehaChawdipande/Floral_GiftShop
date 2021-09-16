import Item from './Item';
import {  RootStateOrAny, useSelector } from 'react-redux';
// import {   CartType, itemProps } from '../Types.type';


const Cart = ()=>
{
        let total = 0;
    
            const cart = useSelector((state:RootStateOrAny)=>state.cart.cart);


       
        cart.map((item:any) => total += item.product.price * item.quantity); //total calculation
        if(cart.length === 0) return <h5 className='title'>Cart is empty!</h5> 

        
        const mycart =  cart.map((item:any) => {
                            return (
                                <div className="d-inline-block" key={item.product.skuId} >
                                 
                                <Item
                                item={item.product}
                                  quantity = {item.quantity}
                                />
                                </div>
                            )
                        })

        return (<div > { mycart } 
        {console.log(cart)}
                <div className="card">
                    <h4>Your total is ₹: <strong className="title-success"> {total}</strong></h4>
                
                </div>
        </div>)
    }

export default Cart;