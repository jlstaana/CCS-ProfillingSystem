import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const FacultyLogin = () => {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login("faculty", username);
    navigate("/faculty-dashboard");
  };

  return (
    <>
      <style>{`
        .split-container {
          display: flex;
          height: 100vh;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        /* LEFT SIDE - FORM */
        .left-side {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f4f6fb;
        }

        .login-card {
          width: 380px;
          padding: 40px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
        }

        .login-title {
          margin-bottom: 5px;
          color: #1f2f70;
        }

        .login-subtitle {
          margin-bottom: 25px;
          font-size: 14px;
          color: #555;
        }

        .login-form {
          display: flex;
          flex-direction: column;
        }

        .login-form input {
          margin-bottom: 15px;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
          transition: 0.3s;
        }

        .login-form input:focus {
          border-color: #1f2f70;
          outline: none;
          box-shadow: 0 0 8px rgba(31, 47, 112, 0.4);
        }

        .login-form button {
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #1f2f70, #0a6c50);
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
        }

        .login-footer {
          margin-top: 15px;
          font-size: 13px;
        }

        .login-footer a {
          color: #1f2f70;
          text-decoration: none;
          font-weight: 500;
        }

        .login-footer a:hover {
          text-decoration: underline;
        }

        /* RIGHT SIDE - BLENDED BACKGROUND IMAGE */
        .right-side {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          padding: 40px;
          text-align: center;

          background-image: 
            linear-gradient(
              135deg,
              rgba(31, 47, 112, 0.85),
              rgba(10, 108, 80, 0.85)
            ),
            url("https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1350&q=80");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-blend-mode: overlay;
        }

        .right-content h1 {
          font-size: 34px;
          margin-bottom: 15px;
        }

        .right-content p {
          font-size: 16px;
          max-width: 400px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .split-container {
            flex-direction: column;
          }

          .right-side {
            height: 40vh;
          }

          .left-side {
            height: 60vh;
          }
        }
      `}</style>

      <div className="split-container">
        {/* LEFT - LOGIN FORM */}
        <div className="left-side">
          <div className="login-card">
            <h2 className="login-title">Faculty Login</h2>
            <p className="login-subtitle">
              Access your faculty dashboard
            </p>

            <form onSubmit={handleSubmit} className="login-form">
              <input
                type="text"
                placeholder="Faculty ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                required
              />

              <button type="submit">Login</button>
            </form>

            <p className="login-footer">
              Student? <a href="/">Login here</a>
            </p>
          </div>
        </div>

        {/* RIGHT - BLENDED IMAGE + GRADIENT */}
        <div className="right-side">
          <div className="right-content">
            <h1>Welcome Faculty</h1>
            <p>
              Manage courses, academic records, and student performance
              efficiently from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyLogin;