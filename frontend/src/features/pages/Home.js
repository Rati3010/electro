import { Link } from "react-router-dom";
import NavBar from "../navbar/Navbar";
import ProductList from "../product-list/component/ProductList";
import Footer from "../common/Footer";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;