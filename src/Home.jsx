import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const backgroundStyle = {
        backgroundImage: "url('/image.png')", // Corrected path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        margin: "0",
        overflow: "hidden"
    };

    return (
        <div style={backgroundStyle}>
            <div className="text-center">
                <h1>Food Store...<span><i class="bi bi-shop  text-warning"></i></span></h1>
                <h1 className="text-light">Welcome to Our Website</h1>
                <p className="lead">Discover amazing content and services tailored just for you.</p>
            </div>
        </div>
    );
}

export default Home;
