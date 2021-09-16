import Product from './Product';
import { RootStateOrAny, useSelector} from 'react-redux';
import { ProductType } from './Types.type';

const ProductList = () =>
{
    const products = useSelector((state:RootStateOrAny)=>state.product.products);
    const cart = useSelector((state:RootStateOrAny)=>state.cart.cart);

    return(
        <div>
            <div className="row">
                {
                    products.map((product:ProductType)=> <Product product={product}  inCart={cart.length>0 && cart.filter((e:any)=> e.product.skuId=== product.skuId).length>0} key={product.skuId}/>)  
                }
            </div>
            
        </div>
    )
}
export default ProductList