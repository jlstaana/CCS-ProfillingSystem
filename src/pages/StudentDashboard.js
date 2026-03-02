import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const StudentDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
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
          background-color: #0a6c50;
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
          background: #f0f8ff;
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
          color: #0a6c50;
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
          color: #0a6c50;
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
          <h2>Student Panel</h2>
          <Link to="/student-dashboard/student-info">Student Info</Link>
          <Link to="/student-dashboard/instruction">Instruction</Link>
          <Link to="/student-dashboard/scheduling">Scheduling</Link>
          <Link to="/student-dashboard/events">Events</Link>
          <Link to="/student-dashboard/search">Search/Filter</Link>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="header">
            <h1>Welcome, {user?.username || "Student"}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Student Information</h3>
              <p>Review your profile, enrollment, and academic history.</p>
            </div>
            <div className="card">
              <h3>Instruction</h3>
              <p>See your course syllabus, lessons and curriculum details.</p>
            </div>
            <div className="card">
              <h3>Scheduling</h3>
              <p>Check class timings, rooms and lab schedules.</p>
            </div>
            <div className="card">
              <h3>Events</h3>
              <p>Browse curricular and extra‑curricular events.</p>
            </div>
            <div className="card">
              <h3>Search / Filter</h3>
              <p>Lookup courses, faculty or schedules with custom filters.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;