import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ProductsShow.css";
import { memo } from "react";

const ProductShow = () => {

    let navigate = useNavigate();
    const clickBtn = () => {
        navigate("/products")
    }

    const { id } = useParams();
    const data = useLocation().search;
    const query = new URLSearchParams(data)

    return (
        <main className="productShow">
            <h1>Here is {id} page</h1>
            <p>
                <b>From useLocation and URLSearchParams:</b><br /><br />
                <b>Product name:</b> {query.get("productName")} <br />
                <b>Brand:</b> {query.get("brand")} <br />
                <b>size:</b> {query.get("size")}
            </p>
            <button onClick={clickBtn}>Back to products page</button>
        </main>
    );
}

export default memo(ProductShow);


// --------Another method------------------------------------------

// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import "./ProductsShow.css";
// import { memo } from "react";

// const ProductShow = () => {

//     let navigate = useNavigate();
//     const clickBtn = () => {
//         navigate("/products")
//     }

//     const { id } = useParams();
//     const data = useLocation().search;
//     const query = new URLSearchParams(data)

//     return (
//         <main className="productShow">
//             <h1>Here is {id} page</h1>
//             <p>
//                 <b>From useLocation and URLSearchParams:</b><br />
//                 <b>Product name:</b> {query.get("productName")} <br />
//                 <b>Brand:</b> {query.get("brand")} <br />
//                 <b>size:</b> {query.get("size")} </p>
//             <button onClick={clickBtn}>Back to products page</button>
//         </main>
//     );
// }

// export default memo(ProductShow);