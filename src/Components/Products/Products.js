import { Link } from "react-router-dom";
import "./Products.css"
import { memo } from "react";

const Products = () => {
    return (
        <main className="products">
            <h1>Products</h1>

            <section>
                <div>
                    <div>
                        <p>Slider</p>
                    </div>
                </div>
            </section>

            <section>

                <div>
                    <div>
                        <p>Image</p>
                    </div>
                    <div>
                        <Link to="/products/productOne?productName=T-shirt&brand=adidas&size=xl"><h2 >Product one</h2></Link>
                        <p>Lorem ipsum, dolor sit amet consectetur libero?</p>
                        <p>Price: 100€</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Image</p>
                    </div>
                    <div>
                        <h2>Product two</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur libero?</p>
                        <p>Price: 200€</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Image</p>
                    </div>
                    <div>
                        <h2>Product three</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur libero?</p>
                        <p>Price: 300€</p>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default memo(Products);