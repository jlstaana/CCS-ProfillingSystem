import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      padding: "10px 20px",
      background: "#0a6c50",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Student Login</Link>
        <Link to="/faculty" style={{ color: "white", textDecoration: "none" }}>Faculty Login</Link>
      </div>
      <div>
        <span>CCS Profiling System</span>
      </div>
    </nav>
  );
};

export default Navbar;