export const addToCart = (product:Object) => {

    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: 1
        }
    }
};

export const removeFromCart = (productId:Number) => {

    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId: productId
        }
    }
};

export const updateCartQuantity = (productId:Number, quantity:Number) => {

  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
  }
};