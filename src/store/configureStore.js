import { createStore } from 'redux';

var defaultCart = {itemsInCart:[]}

function cartReducer(state = defaultCart, action) {
//    console.log("in cart reducer, STATE: "+state+" ACTION.DATA: "+action.data);
       if (action.type === 'ADD_TO_CART'){
         
        return {
                ...state,
                itemsInCart:[...state.itemsInCart,action.data]} 
       
         }

        else if (action.type === 'REMOVE_FROM_CART')
            console.log("remove from cart.");

        else return state;
}
var store = createStore(cartReducer);
export default store;

