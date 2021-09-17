import Product from './Product';
import {   RootStateOrAny, useSelector} from 'react-redux';
import { CartType, ProductType} from './Types.type';


const ProductList = () =>
{

    const products = useSelector((state:RootStateOrAny)=>state.product.products); //reducer values
    const cart = useSelector((state:CartType)=>state.cart); //reducer values
//  console.log(cart);
    return(
        <div>
            <div className="row">
                {
                //    <label>HI</label>
                   products.map((product:ProductType) => <Product product={product}  inCart={cart.length>0 && cart.filter((e:ProductType)=> e.skuId=== product.skuId).length > 0} key={product.skuId}/>)  
                  // products.map((product:ProductType) => <Product product={product} inCart={false} key={product.skuId}/>)  
                }
            </div>
            
        </div>
    )
}
export default ProductList