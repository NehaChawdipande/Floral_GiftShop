import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
export default function Home(){
   
    return(
        <div >
        
            <div className="myCard">
                <h1>Welcome to Floral Affairs!</h1>
                <hr/>
                <p>Propelled by our affection for flowers and energy about nature, it is our obsession to make creative and noteworthy plant and new flower courses of action. We trust that the best, freshest flowers deliver the most noteworthy presentations.
Floral Affairs is glad to give quality flowers and plants to our customers. Our retail premises opened in 2012 after much interest from the London open who respected our orchids at the Chelsea Flower Show. From that point forward, we have bloomed into a full administration flower specialist with both private and corporate customers. We owe quite a bit of our prosperity to our extraordinary customers who move us to make unique and dazzling structures. Our master staff is here to enable all customers to pick the best flowers and plants for all events and purposes</p>
                <hr/>
                <Link to="/ProductList"><button className="btn btn-dark">Get started!</button></Link>

            </div>
            
        </div>
        
        
    );
}