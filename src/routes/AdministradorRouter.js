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
import VerPlanAcademico from "../screens/Administrador/VerPlanAcademico"

// COMPONENTS
import Navbar from "../components/Navbar";

export default function AdministradorRouter() {

  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Administrador1/">
        <AdminHome />
      </Route>
      <Route exact path="/Administrador1/AdminSubHome">
        <AdminSubHome />
      </Route>
      <Route exact path="/Administrador1/CrearProgramas">
        <CrearProgramas />
      </Route>
      <Route exact path="/Administrador1/CrearSalones">
        <CrearSalones />
      </Route>
      <Route exact path="/Administrador1/CrearUsuarios">
        <CrearUsuarios/>
      </Route>
      <Route exact path="/Administrador1/Programas">
        <Programas />
      </Route>
      <Route exact path="/Administrador1/Salones">
        <Salones />
      </Route>
      <Route exact path="/Administrador1/Usuarios">
        <Usuarios />
      </Route>
      <Route exact path="/Administrador1/VerPlanAcademico">
        <VerPlanAcademico />
      </Route>
    </React.Fragment>
  );
}     