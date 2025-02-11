import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
    const nonvegItems = useSelector(state => state.products.nonveg);
    const dispatch = useDispatch();

    const [above100, setAbove100] = useState(false);
    const [below100, setBelow100] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Filter based on price and search query
    const filteredItems = nonvegItems.filter(item => {
        if (above100 && below100) return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (above100 && item.price > 100) return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (below100 && item.price <= 100) return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (!above100 && !below100) return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return false;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container mt-4 flex-grow-1">
                <h2 className="text-center text-danger mb-4">🍗 Non-Veg Items</h2>

                {/* Search Bar */}
                <div className="d-flex justify-content-center mb-3">
                    <input 
                        type="text" 
                        className="form-control w-50" 
                        placeholder="Search items..." 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filter Section */}
                <div className="d-flex justify-content-center mb-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={above100}
                            onChange={() => setAbove100(!above100)}
                            style={{ accentColor: "black" }}
                        />
                        <label className="form-check-label text-dark fw-bold">Above ₹100</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={below100}
                            onChange={() => setBelow100(!below100)}
                            style={{ accentColor: "black" }}
                        />
                        <label className="form-check-label text-dark fw-bold">Below ₹100</label>
                    </div>
                </div>

                {/* Non-Veg Items Grid */}
                <div className="row">
                    {paginatedItems.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-3 mb-4">
                            <div className="card shadow-sm h-100">
                                <img 
                                    src={item.image} 
                                    className="card-img-top p-2" 
                                    alt={item.name} 
                                    style={{ height: "200px", objectFit: "cover" }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-success fw-bold">₹{item.price}</p>
                                    <button 
                                        className="btn btn-danger w-100" 
                                        onClick={() => dispatch(addtocart(item))}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-4">
                        <button 
                            className="btn btn-outline-secondary me-2" 
                            disabled={currentPage === 1} 
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            ⬅️ Previous
                        </button>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, index) => (
                            <button 
                                key={index} 
                                className={`btn mx-1 ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"}`} 
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button 
                            className="btn btn-outline-secondary ms-2" 
                            disabled={currentPage === totalPages} 
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next ➡️
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nonveg;
