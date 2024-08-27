import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Local Brand</a>
      </div>
      <div className="navbar-menu">
        <a href="#">Danh Mục Sản Phẩm</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Tìm kiếm sản phẩm" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="navbar-info">
        <a href="#">Thông tin của tôi</a>
      </div>
      <div className="navbar-cart">
        <button>Giỏ hàng</button>
      </div>
    </nav>
  );
};

export default Navbar;
