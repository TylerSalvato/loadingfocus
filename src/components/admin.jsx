import "./admin.css";

function Admin() {
  return (
    <div className="admin">
      <h1>Who We Are</h1>
      <h4>Get to know us</h4>

      <div className="forms-container">
        <div className="form">
          <h3>Create Product</h3>

          <div>
            <label className="form-label">Title</label>
            <input type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Category</label>
            <input type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Image</label>
            <input type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Price</label>
            <input type="text" className="form-control" />
          </div>

          <div>
            <button className="btn btn-dark">Save Product</button>
          </div>
        </div>
        <div className="form">
          <h3>Create Coupon Code</h3>

          <div>
            <label className="form-label">Code</label>
            <input type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Discount</label>
            <input type="text" className="form-control" />
          </div>

          <div>
            <button className="btn btn-dark">Save Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
