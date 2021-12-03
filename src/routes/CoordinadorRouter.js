import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// SCREENS
import CordHome from "../screens/Coordinador/CordHome";
import Actualizarusuario from "../screens/Coordinador/Actualizarusuario";
import CrearDocentes from "../screens/Coordinador/CrearDocentes";
import CrearperidoPlan from "../screens/Coordinador/CrearperiodoPlan";
import Docentes from "../screens/Coordinador/Docentes";
import PeriodoPlan from "../screens/Coordinador/PeriodoPlan";
import CrearAsignacion from "../screens/Coordinador/CrearAsignacion";
import Verplanesacademicos from "../screens/Coordinador/Verplanesacademicos";


// COMPONENTS
import Navbar from "../components/Navbar";
import CreateUser from "../screens/Login/CreateUser";

export default function CoordinadorRouter() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Coordinador/">
        <CordHome />
      </Route>
      <Route exact path="/Coordinador/Actualizarusuario">
        <Actualizarusuario />
      </Route>
      <Route exact path="/Coordinador/CrearDocentes">
        <CrearDocentes />
      </Route>
      <Route exact path="/Coordinador/Crearperioplan">
        <CrearperidoPlan />
      </Route>
      <Route exact path="/Coordinador/Docentes">
        <Docentes />
      </Route>
      <Route exact path="/Coordinador/PeriodoPlan">
        <PeriodoPlan />
      </Route>
      <Route exact path="/Coordinador/CrearAsignacion">
        <CrearAsignacion />
      </Route>
      <Route exact path="/Coordinador/Verplanesacademicos">
        <Verplanesacademicos />
      </Route>
      <Route exact path="/Coordinador/Createuser">
       <CreateUser/>
      </Route>
    </React.Fragment>
  );
}
