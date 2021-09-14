import Product from './Product';
import {connect} from 'react-redux';
import { addToCart } from '../store/actions/cartActions';


const ProductList = (props) =>
{
    const addToCart = (product) =>{
        props.addToCart(product);
    }
    return(
        <div>
            <div className="row">
                {
                    props.products.map(product=> <Product product={product} addToCart={addToCart} inCart={props.cart.length>0 && props.cart.filter(e=> e.product.skuId=== product.skuId).length>0} key={product.skuId}/>)
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        products:state.product.products,
        cart:state.cart.cart
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart:(product)=>{
            dispatch(addToCart(product));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)