import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// SCREENS
import RegHome from "../screens/RegControl/RegHome";
import PlaneacionAcademica from "../screens/RegControl/Planesacademicosperiodo";
import VerPlaneacionAcademica from "../screens/RegControl/Verplanesacademicos";
import PeriodoPlan from "../screens/RegControl/PeriodoPlan";


// COMPONENTS
import Navbar from "../components/Navbar";

export default function RegControlRouter() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/Registro_y_Control/">
        <RegHome />
      </Route>
      <Route exact path="/Registro_y_Control/PeriodoPlan">
        <PeriodoPlan />
      </Route>
      <Route exact path="/Registro_y_Control/VerPlaneacionAcademica">
        <VerPlaneacionAcademica />
      </Route>
      <Route exact path="/Registro_y_Control/PlaneacionAcademica">
        <PlaneacionAcademica />
      </Route>
    </React.Fragment>
  );
}
