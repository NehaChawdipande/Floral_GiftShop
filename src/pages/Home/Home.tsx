import { Link } from "react-router-dom";
import "./Home.scss";
import ProductList from "../../components/ProductList";

export default function Home() {
  return (
    // <div className="home">
    <>
      {" "}
      <img
        className="banner"
        src="https://images.unsplash.com/photo-1476293889456-abfb7492a29f"
        alt="banner"
      ></img>
      <div className="overlay" />
      <div className="myCard">
        <h1 style={{ fontWeight: "bold" }}>Welcome to Floral Affairs!</h1>
        <hr />
        <h2>Send flowers like you mean it!</h2>
        <h5 id="siteDesc">
          Floral Affairs is glad to give quality flowers and plants to our
          customers. Our retail premises opened in 2012 after much interest from
          the London open who respected our orchids at the Chelsea Flower Show.
          From that point forward, we have bloomed into a full administration
          flower specialist with both private and corporate customers.
        </h5>
        {/* <p>
          Propelled by our affection for flowers and energy about nature, it is
          our obsession to make creative and noteworthy plant and new flower
          courses of action. We trust that the best, freshest flowers deliver
          the most noteworthy presentations. Floral Affairs is glad to give
          quality flowers and plants to our customers. Our retail premises
          opened in 2012 after much interest from the London open who respected
          our orchids at the Chelsea Flower Show. From that point forward, we
          have bloomed into a full administration flower specialist with both
          private and corporate customers. We owe quite a bit of our prosperity
          to our extraordinary customers who move us to make unique and dazzling
          structures. Our master staff is here to enable all customers to pick
          the best flowers and plants for all events and purposes
        </p> */}
        <hr />
        {/* <Link to="/ProductList"> */}
        <button className="viewBtn">View Products</button>
        {/* </Link> */}
      </div>
      <div>
        <ProductList />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui architecto
        consequatur rem labore! Quae minima provident voluptatibus, ad a
        cupiditate nemo modi numquam, itaque odio nostrum. Dolorem dignissimos
        labore dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Reiciendis quae quaerat quos natus animi voluptas vero similique!
        Alias sequi recusandae quibusdam nobis, dolores aliquid necessitatibus,
        est veritatis eius a commodi.
      </div>
    </>
  );
}
