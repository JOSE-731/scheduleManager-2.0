import React from "react";
import { Route} from "react-router-dom";

//SCREENS

import AdminHome from "../screens/Administrador/AdminHome"
import AdminSubHome from "../screens/Administrador/AdminSubHome"
import CrearProgramas from "../screens/Administrador/CrearProgramas"
import CrearSalones from "../screens/Administrador/CrearSalones"
import CrearUsuarios from "../screens/Administrador/CrearUsuarios"
import Programas from "../screens/Administrador/Programas"
import Salones from "../screens/Administrador/Salones"
import Usuarios from "../screens/Administrador/Usuarios";
import Verplanesacademicos from "../screens/Administrador/Verplanesacademicos"
import PeriodoPlan from "../screens/Administrador/PeriodoPlan";
import CrearAsignacion from "../screens/Administrador/CrearAsignacion";

// COMPONENTS
import Navbar from "../components/Navbar";

export default function AdministradorRouter() {

  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Administrador/">
        <AdminHome />
      </Route>
      <Route exact path="/Administrador/AdminSubHome">
        <AdminSubHome />
      </Route>
      <Route exact path="/Administrador/CrearProgramas">
        <CrearProgramas />
      </Route>
      <Route exact path="/Administrador/CrearSalones">
        <CrearSalones />
      </Route>
      <Route exact path="/Administrador/CrearUsuarios">
        <CrearUsuarios/>
      </Route>
      <Route exact path="/Administrador/Programas">
        <Programas />
      </Route>
      <Route exact path="/Administrador/Salones">
        <Salones />
      </Route>
      <Route exact path="/Administrador/Usuarios">
        <Usuarios />
      </Route>
      <Route exact path="/Administrador/VerAsignaciones">
        <Verplanesacademicos />
      </Route>
      <Route exact path="/Administrador/PeriodoPlan">
        <PeriodoPlan />
      </Route>
      <Route exact path="/Administrador/CrearAsignacion">
        <CrearAsignacion />
      </Route>
    </React.Fragment>
  );
}     