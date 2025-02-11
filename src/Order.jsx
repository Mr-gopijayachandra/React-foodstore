import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Order() {
    let orderobj = useSelector(state => state.purchase);

    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <div className="container mt-4">
                <h3 className="text-center text-success">📦 Your Orders</h3>
                {orderobj.length > 0 ? (
                    orderobj.map((purchases, index) => (
                        <div key={index} className="card p-4 shadow-lg mb-4">
                            <h4 className="text-primary">📝 Order Details</h4>
                            <p><strong>📅 Date:</strong> {purchases.date}</p>
                            <p><strong>💰 Total Amount:</strong> ₹{purchases.total}</p>
                            <p><strong>🛒 Items:</strong></p>
                            <ul className="list-group">
                                {purchases.items.map((arg, idx) => (
                                    <li key={idx} className="list-group-item d-flex align-items-center">
                                        <img 
                                            src={arg.image} 
                                            alt={arg.name} 
                                            className="rounded me-3" 
                                            style={{ width: "60px", height: "60px", objectFit: "cover" }} 
                                        />
                                        <div>
                                            <strong>{arg.name}</strong> - ₹{arg.price} x {arg.quantity}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <h5 className="text-center text-muted">No orders placed yet.</h5>
                )}
            </div>
        </div>
    );
}

export default Order;
