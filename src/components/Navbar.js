import React from "react";
// CSS
import { Menu, Grid, Button, Drawer, Image } from "antd";
// IMAGE
import Logo from "./../assets/logo.png";

export default function Navbar() {
  const [visible, setVisible] = React.useState(false);
  const onClose = () => setVisible(false);
  const showDrawer = () => setVisible(true);
  return (
    <nav className="menuBar">
      <div className="logo">
        <Image src={Logo} height={60} />
      </div>
      <div className="menuCon">
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer title="Basic Drawer" placement="right" closable={false} onClose={onClose} visible={visible}>
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
}

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      {/* <Menu.Item key="mail">
        <a href="">Cambiar contraseña</a>
      </Menu.Item> */}
      <Menu.Item key="setting:1">Nombre usuario</Menu.Item>
      <Menu.Item key="setting:2">Cambiar contraseña </Menu.Item>
      <Menu.Item key="setting:3">Cerrar Sesión </Menu.Item>
    </Menu>
  );
};


