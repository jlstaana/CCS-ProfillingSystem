import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import StudentInfo from "./pages/StudentInfo";
import FacultyInfo from "./pages/FacultyInfo";
import Instruction from "./pages/Instruction";
import Scheduling from "./pages/Scheduling";
import Events from "./pages/Events";
import SearchFilter from "./pages/SearchFilter";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentLogin />} />
          <Route path="/faculty" element={<FacultyLogin />} />

          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-dashboard/student-info"
            element={
              <ProtectedRoute role="student">
                <StudentInfo />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-dashboard/instruction"
            element={
              <ProtectedRoute role="student">
                <Instruction />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-dashboard/scheduling"
            element={
              <ProtectedRoute role="student">
                <Scheduling />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-dashboard/events"
            element={
              <ProtectedRoute role="student">
                <Events />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student-dashboard/search"
            element={
              <ProtectedRoute role="student">
                <SearchFilter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty-dashboard"
            element={
              <ProtectedRoute role="faculty">
                <FacultyDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty-dashboard/faculty-info"
            element={
              <ProtectedRoute role="faculty">
                <FacultyInfo />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty-dashboard/instruction"
            element={
              <ProtectedRoute role="faculty">
                <Instruction />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty-dashboard/scheduling"
            element={
              <ProtectedRoute role="faculty">
                <Scheduling />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty-dashboard/events"
            element={
              <ProtectedRoute role="faculty">
                <Events />
              </ProtectedRoute>
            }
          />

          <Route
            path="/faculty-dashboard/search"
            element={
              <ProtectedRoute role="faculty">
                <SearchFilter />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;