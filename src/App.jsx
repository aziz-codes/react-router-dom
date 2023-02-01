import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Home, About, Contact, Users, Page404, Login } from "./pages/index";
import ProtectedRoutes from "./components/Navigation/ProtectedRoutes";
const App = () => {
  let user = false;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <ProtectedRoutes path="/" index component={Home} user={user} />
        <ProtectedRoutes path="/about" component={About} user={user} />
        <ProtectedRoutes path="/contact" component={Contact} user={user} />
        <ProtectedRoutes path="/users" component={Users} user={user} />
        <ProtectedRoutes path="*" component={Page404} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
