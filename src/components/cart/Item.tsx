import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../../store/actions/cartActions';
import {itemProps} from '../Types.type';


const Item = (props:itemProps) =>
{
    const [state, setState] = useState({ quantity: props.item.quantity,
            btnVisible: false})
        
    const dispatch = useDispatch();
    
    const { item } = props;
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => { //when quantity is updated
        
        if(parseInt((e.target as HTMLInputElement).value) <= 0) {
            alert("Quantity must be greater than or equal to 1");
            return;
        }

        
        if(state.quantity !== parseInt((e.target as HTMLInputElement).value)) { // if user makes any changes to the quantity
            setState({
                quantity: parseInt((e.target as HTMLInputElement).value),
                btnVisible: true  //for update button 
            });
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //runs when update button is clicked
        e.preventDefault();
        dispatch(updateCartQuantity(item.skuId, state.quantity));
        setState({
            quantity:parseInt((e.target as HTMLInputElement).value),
            btnVisible: false  //hide update button
        });
    }

    const handleRemove = () => { 
        dispatch(removeFromCart(item.skuId));
    }




      return (

          <div className='card' id="product-card">
              <div className='card-img'>
                    <img className="product-img" src={item.imgUrl} alt={item.ProductName}></img>
                    </div>
                    <hr/>
                    <h5 className="card-title"><strong>{item.ProductName}</strong></h5>
                    <h5><strong className='title-success'>Rs. {item.price}</strong></h5> 
                    <form onSubmit={handleSubmit}>
                      <div>
                          <label className="text-muted">Quantity:
                          <input type="number" className="form-control input-sm" onChange={handleChange} value={state.quantity}/></label>
                      </div>

                      {
                          state.btnVisible?(
                              <div>
                                  <button type="submit" className="btn btn-info">Update</button>
                              </div>
                          ) : null
                      }

                      <div>
                          <button type="button" onClick={handleRemove} className="btn btn-xs">
                              Remove Item from cart
                          </button>
                      </div>
                  </form>
              </div>
      
      )
  }
 export default Item;
