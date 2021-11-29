import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
// SCREENS
import SubdirectorHome from "../screens/Subdirectores/SubdirectorHome"
import SubHomeGestion from "../screens/Subdirectores/SubHomeGestion"
import ProgramasAcademico from "../screens/Subdirectores/Programas"
import Salones from "../screens/Subdirectores/Salon"
import CrearSalones from "../screens/Subdirectores/CrearSalon"
import CrearProgramas from "../screens/Subdirectores/CrearProgramas"

import RegHome from "../screens/RegControl/RegHome"

// COMPONENTS
import Navbar from "../components/Navbar";
import VerPlaneacionAcademica from "../screens/Admin/Verplanesacademicos";
import VerPlanAcademico from "../screens/Subdirectores/VerPlanAcademico";
import Usuarios from "../screens/Subdirectores/Usuarios";
import Usuario from "../screens/Subdirectores/Usuarios";
import CreateUser from "../screens/Login/CreateUser";
import CreateUsers from "../screens/Subdirectores/CreateUser";
import Crearusuario from "../screens/Subdirectores/CreateUser";

export default function SubdirectoresRouter() {

  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Subdirector/">
        <SubdirectorHome />
      </Route>
      <Route exact path="/Subdirector/HomeGestion">
        <SubHomeGestion />
      </Route>
      <Route exact path="/Subdirector/ProgramasAcademicos">
        <ProgramasAcademico />
      </Route>
      <Route exact path="/Subdirector/CrearProgramasAcademicos">
        <CrearProgramas />
      </Route>
      <Route exact path="/Subdirector/Salones">
        <Salones />
      </Route>
      <Route exact path="/Subdirector/CrearSalones">
        <CrearSalones />
      </Route>
      <Route exact path="/Subdirector/Homeregistrocontrol">
        <RegHome />
      </Route>
      <Route exact path="/Subdirector/VerPlaneacionAcademica">
        <VerPlanAcademico/>
      </Route>
      <Route exact path="/Subdirector/Usuarios">
        <Usuario/>
      </Route>
      <Route exact path="/Subdirector/Createuser">
      <CreateUser/>
      </Route>
      <Route exact path="/Subdirector/CrearUsuarios">
       <Crearusuario/>
      </Route>
    </React.Fragment>
  );
}