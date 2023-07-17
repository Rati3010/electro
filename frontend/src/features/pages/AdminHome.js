
import AdminProductList from "../admin/component/AdminProductList";
import NavBar from "../navbar/Navbar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
        </div>
     );
}

export default AdminHome;