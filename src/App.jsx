import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Home, About, Contact, Users, Page404, Login } from "./pages/index";
import ProtectedRoutes from "./components/Navigation/ProtectedRoutes";
const App = () => {
  let user = false;
  return (
    <BrowserRouter>
      {user ? (
        <>
          {" "}
          <Navbar />
          <Routes>
            <Route element={<ProtectedRoutes auth={user} />}>
              <Route path="/" exact component={Home} user={user} />
              <Route path="/about" component={About} user={user} />
              <Route path="/contact" component={Contact} user={user} />
              <Route path="/users" component={Users} user={user} />
              <Route path="*" component={Page404} />
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
