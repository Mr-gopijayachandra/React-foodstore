import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "20px" }}>
            <div className="container">
                <div className="card shadow-lg w-75 mx-auto">
                    <div className="card-header bg-primary text-white text-center">
                        <h1>About Us</h1>
                    </div>
                    <div className="card-body text-center">
                        <p className="lead">Welcome to our website! We are dedicated to providing the best services and products to our customers.</p>
                        <p>Our team is passionate about innovation, quality, and customer satisfaction.</p>
                    </div>
                    <div className="card-footer text-center bg-dark text-white">
                        <p>&copy; 2025 Our Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
