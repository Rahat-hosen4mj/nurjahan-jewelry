import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/Shared/NotFound";

import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Pages/Shared/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Dashboard/MyReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";

import AllJewelry from "./Pages/AllJewelry/AllJewelry";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        
        <Route
          path="/blog"
          element={
            <Blog />
          }
        ></Route>
        <Route path="/jewelar" element={<AllJewelry />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          
          <Route path="myReview" element={<MyReview />}></Route>
          
         
          <Route path="addProduct" element={<RequireAdmin><AddProduct /> </RequireAdmin>}></Route>
          
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
