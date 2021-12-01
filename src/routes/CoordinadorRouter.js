import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// SCREENS
import CoordinadorHome from "../screens/Coordinadores/CoordHome";
import PlaneacionAcademica from "../screens/Coordinadores/Planesacademicosperiodo";
import PeriodoPlan from "../screens/Coordinadores/PeriodoPlan";
import Usuarios from "../screens/Coordinadores/Usuarios";
import Crearusuario from "../screens/Coordinadores/CreateUser";
import CreateUsers from "../screens/Coordinadores/CreateUser";
import VerPlanAcademico from "../screens/Coordinadores/VerPlanAcademico";
import Actualizarusuarios from "../screens/Coordinadores/Actualizarusuario";


// COMPONENTS
import Navbar from "../components/Navbar";

export default function CoordinadorRouter() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Coordinador/">
        <CoordinadorHome />
      </Route>
      <Route exact path="/Coordinador/PeriodoPlan">
        <PeriodoPlan />
      </Route>
      <Route exact path="/Coordinador/VerPlanAcademico">
        <VerPlanAcademico />
      </Route>
      <Route exact path="/Coordinador/PlaneacionAcademica">
        <PlaneacionAcademica />
      </Route>
      <Route exact path="/Coordinador/Usuarios">
       <Usuarios/>
      </Route>
      <Route exact path="/Coordinador/CrearUsuarios">
        <Crearusuario />
      </Route>
      <Route exact path="/Coordinador/ActualizarUsuarios">
        <Actualizarusuarios />
      </Route>
      <Route exact path="/Coordinador/Createuser">
       <CreateUsers/>
      </Route>
    </React.Fragment>
  );
}
