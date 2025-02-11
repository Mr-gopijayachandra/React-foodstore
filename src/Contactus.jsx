import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent Successfully!");
    };

    return (
        <div style={{ width: "100vw", height: "100vh", padding: "20px", overflow: "hidden" }}>
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="card p-4 shadow w-50">
                    <h2 className="text-center text-primary">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea 
                                className="form-control" 
                                name="message" 
                                rows="4" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
