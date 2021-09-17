import { CartType,  ProductType} from "../../components/Types.type";
const initialState = {
  cart: []
};

export interface AddAction {
  type: 'ADD';
  product: ProductType;
  quantity:number
}
export interface UpdateAction {
  type: 'UPDATE';
  product: ProductType;
  quantity:number
}
export interface RemoveAction {
  type: 'REMOVE';
  product: ProductType;
}

// Action is a union of all the possible actions
type Action = AddAction | UpdateAction | RemoveAction;


const cartReducer = (state:CartType=initialState, action:Action) => {

    const cart:ProductType[] =  state.cart;

    switch(action.type) {
        case 'ADD':
            let prod = {action}
            let AddProd= (prod.action.product)
            let newcrt = cart;
            newcrt.push(AddProd);
           
            return {
                ...state,
                cart:newcrt
            };
           

        case 'UPDATE':
            let update = {action}
            let item =  cart.find((i:ProductType) => i.skuId === update.action.product.skuId);
            let newCart = cart.filter((item) => item.skuId !== update.action.product.skuId);
            item!.quantity = update.action.quantity;
            newCart.push(item!);
            return {
                ...state,
                cart: newCart
            };

        case 'REMOVE':
              let rem = {action}          
            return {
                ...state,
                cart: cart.filter((i:ProductType) => i.skuId !== rem.action.product.skuId)
            };

            
        default:
            return state;
    }
};

export default cartReducer; 