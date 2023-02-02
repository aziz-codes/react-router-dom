import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Home, About, Contact, Users, Page404, Login } from "./pages/index";
import ProtectedRoutes from "./components/Navigation/ProtectedRoutes";
import { appStore } from "./Context/AppContext";
const App = () => {
  const { user, setUser } = appStore();

  useLayoutEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    user ? setUser(true) : setUser(false);
  }, []);
  return (
    <BrowserRouter>
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route element={<ProtectedRoutes auth={user} />}>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={About} />
              <Route path="/contact" element={Contact} />
              <Route path="/users" element={Users} />
              <Route path="*" element={Page404} />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
};

export default App;
