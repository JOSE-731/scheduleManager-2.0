import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// SCREENS
import AdminHome from "../screens/Admin/AdminHome";
import PlaneacionAcademica from "../screens/Admin/Planesacademicosperiodo";
import VerPlaneacionAcademica from "../screens/Admin/Verplanesacademicos";
import PeriodoPlan from "../screens/Admin/PeriodoPlan";
import CrearperidoPlan from "../screens/Admin/CrearperiodoPlan";
import Usuarios from "../screens/Admin/Usuarios";
import Crearusuarios from "../screens/Admin/Crearusuarios";
import Actualizarusuarios from "../screens/Admin/Actualizarusuario";


// COMPONENTS
import Navbar from "../components/Navbar";
import CreateUser from "../screens/Login/CreateUser";

export default function AdminRouter() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Administrador/">
        <AdminHome />
      </Route>
      <Route exact path="/Administrador/PeriodoPlan">
        <PeriodoPlan />
      </Route>
      <Route exact path="/Administrador/Crearperidoplan">
        <CrearperidoPlan />
      </Route>
      <Route exact path="/Administrador/VerPlaneacionAcademica">
        <VerPlaneacionAcademica />
      </Route>
      <Route exact path="/Administrador/PlaneacionAcademica">
        <PlaneacionAcademica />
      </Route>
      <Route exact path="/Administrador/Usuarios">
        <Usuarios />
      </Route>
      <Route exact path="/Administrador/CrearUsuarios">
        <Crearusuarios />
      </Route>
      <Route exact path="/Administrador/ActualizarUsuarios">
        <Actualizarusuarios />
      </Route>
      <Route exact path="/Administrador/Createuser">
       <CreateUser/>
      </Route>
    </React.Fragment>
  );
}
