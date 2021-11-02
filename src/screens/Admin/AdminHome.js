import React from "react";
import { useHistory } from "react-router-dom";
// CSS
import { Row, Col } from "antd";
import { BookOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export default function AdminHome() {
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };
  return (
    <div className="d-flex align-center justify-content-center flex-direction-columm" style={{ height: "100%" }}>
      <Row>
        <Col>
          <BookOutlined
            className="font-size-100 justify-content-center font-color-FFFFFF"
            onClick={() => gotoScreen("/Administrador/Planesacademicos")}
            label="Planes académicos"
          />
          <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Planes Académicos</span>
        </Col>
        <Col>
          <UsergroupAddOutlined className="font-size-100 font-color-FFFFFF" onClick={() => gotoScreen("/Administrador/Usuarios")} />
          <span className="d-flex no-margin justify-content-center font-color-FFFFFF">
            Usuarios
          </span>
        </Col>
      </Row>
    </div>
  );
}
