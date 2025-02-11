import { useDispatch, useSelector } from "react-redux";
import { addToparchase, clear, decrement, increment, remove } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
    let dispatch = useDispatch();
    let cartItems = useSelector(state => state.cart);

    let [discount, setDiscount] = useState(0);
    let [couponCode, setCouponCode] = useState('');
    let [couponCodeDiscount, setCouponCodeDiscount] = useState(0);

    let totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    let discountPrice = (discount * totalPrice) / 100;
    let couponDiscountPrice = (couponCodeDiscount * totalPrice) / 100;
    let finalAmount = totalPrice - discountPrice - couponDiscountPrice;
    let purchaseDate = new Date().toDateString();

    let handleCoupon = () => {
        switch (couponCode.toUpperCase()) {
            case "RATAN10": setCouponCodeDiscount(10); break;
            case "RATAN20": setCouponCodeDiscount(20); break;
            case "RATAN30": setCouponCodeDiscount(30); break;
            case "RATAN40": setCouponCodeDiscount(40); break;
            default: alert("Invalid coupon");
                setCouponCodeDiscount(0);
        }
    };

    let handlePurchaseDetails = () => {
        let purchaseDetails = { items: [...cartItems], total: finalAmount, date: purchaseDate };
        dispatch(addToparchase(purchaseDetails));
        dispatch(clear());
    };

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "20px" }}>
            <div className="container">
                {cartItems.length > 0 ? (
                    <div className="card p-4 shadow w-75 mx-auto">
                        <h2 className="text-center">Shopping Cart</h2>
                        <ul className="list-group mb-3">
                            {cartItems.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} alt={item.name} className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }} />
                                        <div>
                                            <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm btn-primary me-2" onClick={() => dispatch(increment(item))}>+</button>
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => dispatch(decrement(item))}>-</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => dispatch(remove(item))}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <p><strong>Discount:</strong> ₹{discountPrice.toFixed(2)}</p>
                        <p><strong>Coupon Discount:</strong> ₹{couponDiscountPrice.toFixed(2)}</p>
                        <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>
                        <h4 className="text-success"><strong>Final Amount: ₹{finalAmount.toFixed(2)}</strong></h4>

                        <div className="mb-3">
                            <button className='btn btn-outline-primary me-2' onClick={() => setDiscount(10)}>Apply 10% Discount</button>
                            <button className='btn btn-outline-primary me-2' onClick={() => setDiscount(20)}>Apply 20% Discount</button>
                            <button className='btn btn-outline-primary' onClick={() => setDiscount(30)}>Apply 30% Discount</button>
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control w-50 d-inline"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter coupon"
                            />
                            <button className="btn btn-success ms-2" onClick={handleCoupon}>Apply Coupon</button>
                        </div>

                        <button className="btn btn-primary w-100" onClick={handlePurchaseDetails}>Complete Purchase</button>
                    </div>
                ) : (
                    <div className="alert alert-warning text-center w-50 mx-auto">Your cart is empty</div>
                )}
            </div>
        </div>
    );
}

export default Cart;
