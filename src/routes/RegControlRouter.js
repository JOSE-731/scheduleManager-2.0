import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// SCREENS
import RegControlHome from "../screens/RegControl/RegHome";
import PlaneacionAcademica from "../screens/RegControl/Planesacademicosperiodo";
import VerPlaneacionAcademica from "../screens/RegControl/Verplanesacademicos";
import PeriodoPlan from "../screens/RegControl/PeriodoPlan";


// COMPONENTS
import Navbar from "../components/Navbar";

export default function RegControlRouter() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/RegControl/">
        <RegControlHome />
      </Route>
      <Route exact path="/RegControl/PeriodoPlan">
        <PeriodoPlan />
      </Route>
      <Route exact path="/RegControl/VerPlaneacionAcademica">
        <VerPlaneacionAcademica />
      </Route>
      <Route exact path="/RegControl/PlaneacionAcademica">
        <PlaneacionAcademica />
      </Route>
    </React.Fragment>
  );
}
