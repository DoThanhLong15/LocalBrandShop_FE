import React, { createContext, useReducer } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import UserProfilePage from "./pages/UserProfilePage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./components/Navbar";
import "./App.css";
import MyUserReducer from "./reducers/MyUserReducer";
import { Container, Button } from "react-bootstrap";

export const MyUserContext = createContext();
export const MyDispatchContext = createContext();
export const MyCartContext = createContext();

const App = () => {
  const [user, dispatch] = useReducer(MyUserReducer, null);

  return (
    <MyUserContext.Provider value={user}>
      <MyDispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <nav>
            <Link to="/">Trang chủ</Link> |
            {user === null ? (
              <>
                <Link className="nav-link text-success" to="/login">
                  &#129489; Đăng nhập
                </Link>
                <Link className="nav-link text-success" to="/register">
                  &#129489; Đăng ký
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link text-success" to="/login">
                  Chào {user.firstName}!
                </Link>
                <Button
                  variant="danger"
                  onClick={() => dispatch({ type: "logout" })}>
                  Đăng xuất
                </Button>
              </>
            )} |
            <Link to="/products">Sản phẩm</Link> |
            <Link to="/user-info">Thông tin của tôi</Link>
          </nav>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/user-info" element={<UserProfilePage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </MyDispatchContext.Provider>
    </MyUserContext.Provider>
  );
};

export default App;
