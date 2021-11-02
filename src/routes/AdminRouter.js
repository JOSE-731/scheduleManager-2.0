import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// SCREENS
import AdminHome from "../screens/Admin/AdminHome";
import PlaneacionAcademica from "../screens/Admin/Planesacademicosperiodo";
import VerperiodoPlan from "../screens/Admin/VerperiodoPlan";
import CrearperidoPlan from "../screens/Admin/CrearperiodoPlan";

// COMPONENTS
import Navbar from "../components/Navbar";

export default function AdminRouter() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Administrador/">
        <AdminHome />
      </Route>
      <Route exact path="/Administrador/VerperiodoPlan">
        <VerperiodoPlan />
      </Route>
      <Route exact path="/Administrador/Crearperidoplan">
        <CrearperidoPlan />
      </Route>
      <Route exact path="/Administrador/PlaneacionAcademica">
        <PlaneacionAcademica />
      </Route>
    </React.Fragment>
  );
}
