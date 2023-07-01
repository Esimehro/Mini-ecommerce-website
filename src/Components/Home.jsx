import { useContext } from "react";
import { data } from "./HomeData";
import { Cart} from "../Context";


export const Home = ({prod}) => {

  const { cartItem, setCartItem } = useContext(Cart);

  return (
    <div className="products">
      {data.map((prod) => (
        <div key={prod.id} className="product">
          <img src={prod.image} alt="" />
          <p className="money">${prod.price}</p>
          <div>
            <button className="add" onClick={() => setCartItem([...cartItem, prod])}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
