import { ProductType } from "../../components/Types.type";

export const addToCart = (product:ProductType) => {
    return {
       type: 'ADD',
    product: product,
  quantity:1
        }
    
};

export const removeFromCart = (product:ProductType) => {

    return {
        type: 'REMOVE',
        product:product
    
    }
};

export const updateCartQuantity = (product:ProductType, quantity:Number) => {

     return {
      type: 'UPDATE',
          product:product,
          quantity: quantity
      
  }
};