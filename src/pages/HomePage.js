import React from "react";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MyCartContext, MyDispatchContext, MyUserContext } from "../App";
import APIs, { endpoints } from "../config/APIs";

const HomePage = () => {
  const [products, setProducts] = useState(null);
  const [q] = useSearchParams();

  const [page, setPage] = useState(1);

  const loadProducts = async () => {
    try {
      let url = `${endpoints["products"]}/?page=${page}`;

      let cId = q.get("cateId");
      if (cId !== null) {
        setPage(1);
        url = `${url}&cateId=${cId}`;
      }

      let k = q.get("kw");
      if (k !== null) {
        setPage(1);
        url = `${url}&q=${k}`;
      }

      let res = await APIs.get(url);

      console.info(res.data.data);

      if (page === 1) setProducts(res.data.data);
      else setProducts((current) => [...current, ...res.data.data]);
    } catch (ex) {
      console.error(ex);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [page, q]);

  const loadMore = () => {
    setPage(page + 1);
  };

  if (products === null) return <Spinner animation="grow" variant="primary" />;

  return (
    <>
      <div className="homepage">
        <section className="section">
          <h2>SẢN PHẨM MỚI</h2>
          <div className="product-grid">
            {products &&
              products.map((p) => <ProductCard product={p} key={p.id} />)}
          </div>
        </section>

        <div className="mt-2 text-center mb-1">
          <Button onClick={loadMore} variant="primary">
            Xem thêm
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
