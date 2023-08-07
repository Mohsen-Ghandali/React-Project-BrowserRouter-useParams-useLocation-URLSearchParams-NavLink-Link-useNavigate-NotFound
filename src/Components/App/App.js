import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import About from "../About/About";
import Blog from '../Blog/Blog';
import NotFound from "../NotFound/NotFound";
import ProductsShow from "../Products/ProductsShow";
import { memo } from "react";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:id' element={<ProductsShow />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default memo(App);