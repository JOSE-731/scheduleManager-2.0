import React from "react";
// ROUTER
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// VISTAS
import Login from "../screens/Login/Login";
import ValidarUser from "../screens/Login/ValidationPassword";
import CreatePassword from "../screens/Login/CreatePassword";
import ChangePassword from "../screens/Login/ChangePassword";
// ADMIN ROUTER
import AdminRouter from "./AdminRouter";
import SubdirectoresRouter from "./SubdirectoresRouter";
// ANT-DESIGN
import { Layout } from "antd";

export default function LoginRouter() {
  return (
    <Layout className="image-background-opacity">
      <div style={{ height:'100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <Router>
          <Switch>
            <Route path="/Administrador/">
              <AdminRouter />
            </Route>
            <Route path="/Subdirector/">
              <SubdirectoresRouter />
            </Route>
            <Route path="/Olvidastecontraseña">
              <ValidarUser />
            </Route>
            <Route path="/Crearcontraseña">
              <CreatePassword />
            </Route>
            <Route path="/Cambiarcontraseña">
              <ChangePassword />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </Layout>
  );
}
