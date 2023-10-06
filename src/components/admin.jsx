import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

function Admin() {

  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupon] = useState({});

  function handleSaveProduct() {
    console.log(product);

    let fixedProd = {...product};
    fixedProd.price = parseFloat(fixedProd.price);

    
    let service = new DataService();
    service.saveProduct(fixedProd);
    

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  function productChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    console.log("Text Change", e.target.value);

    let copy = {...product};
    copy[name] = value;
    setProduct(copy);
  }

  function handleSaveCoupon() {
    console.log(coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  function couponChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    console.log("Text Change", e.target.value);

    let copy = {...coupon};
    copy[name] = value;
    setCoupon(copy);
  }

  return (
    <div className="admin page">
      <h1>Who We Are</h1>
      <h4>Get to know us</h4>

      <div className="forms-container">
        <div className="form">
          <h3>Create Product</h3>

          <div>
            <label className="form-label">Title</label>
            <input type="text" onChange={productChange} name="title" className="form-control" />
          </div>

          <div>
            <label className="form-label">Category</label>
            <input type="text" onChange={productChange} name="category" className="form-control" />
          </div>

          <div>
            <label className="form-label">Image</label>
            <input type="text" onChange={productChange}  name="image" className="form-control" />
          </div>

          <div>
            <label className="form-label">Price</label>
            <input type="text" onChange={productChange} name="price" className="form-control" />
          </div>

          <div>
            <button onClick={handleSaveProduct} className="btn btn-dark">Save Product</button>
          </div>
        </div>

        <ul>
          {allProducts.map(prod => <li key={prod.title}>{prod.title} - ${prod.price}</li>)}
        </ul>



        <div className="form">
          <h3>Create Coupon Code</h3>

          <div>
            <label className="form-label">Code</label>
            <input type="text" onChange={couponChange} name="code" className="form-control" />
          </div>

          <div>
            <label className="form-label">Discount</label>
            <input type="text" onChange={couponChange} name="discount" className="form-control" />
          </div>

          <div>
            <button onClick={handleSaveCoupon} className="btn btn-dark">Save Product</button>
          </div>
        </div>

        <ul>
          {allCoupons.map(c => <li key={c.code}>{c.code} - ${c.discount}</li>)}
        </ul>

      </div>
    </div>
  );
}

export default Admin;
