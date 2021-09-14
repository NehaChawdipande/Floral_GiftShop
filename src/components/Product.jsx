import React, { useState } from 'react';


 const Product = (props) =>{
     const [state,setState] = useState({ inCart : props.inCart}); //to define status of products
     
    
     const addToCart = (e)=>{
        e.preventDefault();
        props.addToCart(props.product)
        setState({inCart:true})
    }
    const product = props.product;
//    console.log(product);
    return(
        <div>
                <div className="card" id="product-card" key={product.skuId}>
                    <div className='card-img'>
                    <img className="product-img" src={product.imgUrl} alt={product.ProductName}></img>
                    </div>
                    <hr/>
                    <h5 className="card-title"><strong>{product.ProductName}</strong></h5>
                    <div className="card-body">{product.desc}</div>
                    <h5><strong className='title-success'>Rs. {product.price}</strong></h5>
                    <hr/>       
                    {state.inCart?(<span className="btn btn-success">Added to Cart</span>):(<button className="btn btn-dark" onClick={addToCart}>Add to Cart</button>)}    
                    
                </div>
            <br/>
        </div>
    );


}//end of component
export default Product;