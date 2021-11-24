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
    </React.Fragment>
  );
}