import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    let username = useRef(null);
    let password = useRef(null);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "gopi" && password.current.value === "Gopi@123") {
            dispatch(login(username.current.value));
            navigate("/home");
        } else {
            alert("Your credentials are wrong. Check once!");
        }
    };

    return (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center overflow-hidden position-fixed top-0 start-0">
            <div className="card shadow-lg rounded-4 p-4" style={{ width: '22rem', background: '#f7f9fc' }}>
                <h2 className="text-center mb-4 text-primary">🔑 Welcome Back!</h2>
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        ref={username} 
                        className="form-control shadow-sm" 
                        id="username" 
                        placeholder="Enter your username" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        ref={password} 
                        className="form-control shadow-sm" 
                        id="password" 
                        placeholder="Enter your password" 
                    />
                </div>
                <button 
                    className="btn btn-primary w-100 shadow-sm mt-3" 
                    onClick={loginCheck}
                    style={{ height: '3.2rem' }}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
