import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if(isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
  return (
    <section className="py-4 container">
        <div className="row justify-content-center">
            <div className="col-12">
                <h5> Cart ({ totalUniqueItems }) total Items: ({ totalItems }) </h5>

                <table className="table table-light table-hover m-0">
                <tbody>
                    {items.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td>
                                <img src={item.path} style={{height: '6rem'}}/>
                            </td>
                            <td>{item.Name}</td>
                            <td>{item.Price}</td>
                            <td>Quantity ({item.Quantity})</td>
                            <td>
                                <button className="btn btn-info ms-2">-</button>
                                <button className="btn btn-info ms-2">+</button>
                                <button className="btn btn-danger ms-2">Remove Item</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
};

export default Cart;
