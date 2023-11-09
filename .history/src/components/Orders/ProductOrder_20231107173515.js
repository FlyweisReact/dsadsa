/** @format */

import React, { useEffect, useState } from "react";
import { getProductOrder } from "../../Repository/Api";

const ProductOrder = () => {
  const [order, setOrder] = useState([]);

  const fetchHandler = () => {
    getProductOrder(setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(order);

  return (
    <div className="user_product_order">
      <div className="title_account_second">Product Order history</div>

      {order?.map((item) =>
        item?.products?.map((i, index) => (
          <div className="Items" key={index}>
            <img
              src={i.productId?.productImages?.[0]?.image}
              alt=""
              className="thumb"
            />
            <div className="content">
              <p className="title">{i?.productId?.name}</p>{" "}
              <p className="description">
                {i?.productId?.description?.substr(0, 200)}...
              </p>{" "}
              <p className="orderId">OrderId : {item?.orderId}</p>{" "}
              <p className="subTotal"> Sub-Total {item?.subTotal}</p>{" "}
              <p className="membership">{item?.memberShip}</p>{" "}
              <p className="total">{item?.total}</p>
              <button>Track</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductOrder;