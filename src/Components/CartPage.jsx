import { useContext, useEffect, useState } from "react";
import { Cart } from "../Context";


export const CartPage = () => {

  const { cartItem } = useContext(Cart);
  const [total, setTotal] = useState(0);
  const [cartItemsMap, setCartItemsMap] = useState({});

  useEffect(() => {
    const updatedCartItemsMap = {};
    let updatedTotal = 0;

    cartItem.forEach((prod) => {
      if (updatedCartItemsMap[prod.id]) {
        updatedCartItemsMap[prod.id].quantity += 1;
      } else {
        updatedCartItemsMap[prod.id] = {
          product: prod,
          quantity: 1,
        };
      }
      updatedTotal += Number(prod.price);
    });

    setCartItemsMap(updatedCartItemsMap);
    setTotal(updatedTotal);
  }, [cartItem]);

  return (
    <div className="cartPage">
      <h4>Total: ${total}</h4>
      <div className="cartItems">
        {Object.values(cartItemsMap).map((item) => (
          <div key={item.product.id}>
            <img src={item.product.image} alt="" />
            <div className="carttags">
            <p>{item.product.name}</p>
            <p> <span className="quan">Quantity:</span> {item.quantity}</p>
            <p className="total_amt">Total Amount: ${item.product.price * item.quantity}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
