import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/faculty");
  };

  return (
    <>
      <style>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        /* SIDEBAR */
        .sidebar {
          width: 250px;
          background-color: #1f2f70;
          color: white;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .sidebar h2 {
          margin-bottom: 30px;
          font-size: 22px;
        }

        .sidebar a {
          color: white;
          text-decoration: none;
          margin-bottom: 15px;
          font-size: 16px;
          transition: 0.2s;
        }

        .sidebar a:hover {
          color: #1cc88a;
        }

        /* MAIN CONTENT */
        .main-content {
          flex: 1;
          background: #f8f9fc;
          padding: 30px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .header h1 {
          font-size: 28px;
          color: #1f2f70;
        }

        .header button {
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          background: #1cc88a;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: 0.2s;
        }

        .header button:hover {
          background: #17a673;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .card h3 {
          margin-bottom: 10px;
          color: #1f2f70;
        }

        .card p {
          font-size: 14px;
          color: #555;
        }

        @media (max-width: 900px) {
          .dashboard-container {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            flex-direction: row;
            overflow-x: auto;
          }

          .sidebar h2 {
            margin-bottom: 0;
            margin-right: 20px;
          }

          .sidebar a {
            margin-right: 15px;
          }
        }
      `}</style>

      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Faculty Panel</h2>
          <a href="#courses">Courses</a>
          <a href="#students">Students</a>
          <a href="#analytics">Analytics</a>
          <a href="#settings">Settings</a>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="header">
            <h1>Welcome, {user?.username || "Faculty"}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="cards">
            <div className="card" id="courses">
              <h3>Courses</h3>
              <p>Manage your courses, create assignments, and update content.</p>
            </div>
            <div className="card" id="students">
              <h3>Students</h3>
              <p>View enrolled students, track progress, and contact them.</p>
            </div>
            <div className="card" id="analytics">
              <h3>Analytics</h3>
              <p>Monitor performance metrics and classroom analytics.</p>
            </div>
            <div className="card" id="settings">
              <h3>Settings</h3>
              <p>Update profile, change password, and manage notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyDashboard;