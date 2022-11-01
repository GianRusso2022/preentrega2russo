import { UserLayout } from "../components/UserLayout"
import { useParams, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";

export const DetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {
    getProduct(productId).then((data) => setProduct(data))
  }, [productId])
  return (


    <div>
      <div className="card w-50 container">
        <img src={product.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">asd</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>

  );
};
