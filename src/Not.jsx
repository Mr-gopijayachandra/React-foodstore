import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/Home");
        }, 5000);
    }, [navigate]);

    return (
        <div className="container text-center mt-5">
            <h2 className="text-danger">404 - Page Not Found</h2>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqY6fPdAE7H8kya3Hhxt_gBOR_NFNjQCHUqw&s" 
                alt="Not Found" 
                className="img-fluid mt-3"
                style={{ maxWidth: "50%" }}
            />
            <p className="mt-3 text-muted">Redirecting to the home page in 5 seconds...</p>
        </div>
    );
}

export default NotFound;