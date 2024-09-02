import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <input type="search" placeholder="search products" />
      <nav>
        <Link to="Featured">Featured</Link>
        <Link to="newproducts">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Product;
