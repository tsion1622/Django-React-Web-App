import React, { useState } from "react";  // Ensure `useState` is imported
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/protectedRoute";  

function Logout() {
  localStorage.clear();
  return <Navigate to="/Login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}




function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>  
              <Home />
            </ProtectedRoute>
          }
        />
         
        <Route path="/Register" element={<RegisterAndLogout />} />
        <Route path="*" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;