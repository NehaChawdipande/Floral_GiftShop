
const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {

    let cart = state.cart
    let newVal = cart; 
    // {console.log(action)}
    switch(action.type) {

        case 'ADD_TO_CART':

            newVal.push(action.payload);
            return {
                ...state,
                cart: newVal
            };

        case 'UPDATE_CART_QUANTITY':

       
       
            let item = cart.find((item) => item.product.skuId === action.payload.productId);

            let newCart = cart.filter((item) => item.product.skuId !== action.payload.productId);

            item.quantity = action.payload.quantity;

            newCart.push(item);

            return {
                ...state,
                cart: newCart
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: cart.filter((item) => item.product.skuId !== action.payload.productId)
            };

            
        default:
            return state;
    }
};

export default cartReducer; 