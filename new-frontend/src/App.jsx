import React from "react"
import {BrowserRouter, Routes ,Route, Navigate} from "react-router-dom"
import Login from "./pages/login" 
import Register from "./pages/Register" 
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import protectedRoute from "./assets/components/protectedRoute"


function Logout (){
  localStorage.clear()
  return <Navigate to="/Login"/>
}


 function RegisterAndLogout() {
  localStorage.clear()
  return <Register/>
 }
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
      <Route
  path="/"
  element={
    <protectedRoute>
      <Home/>
    </protectedRoute>
  }
      />
<Route path="/Login" element={<Login />} />
<Route path="/Register" element={<RegisterAndLogout />} />
<Route path="*" element={<NotFound />} />

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
