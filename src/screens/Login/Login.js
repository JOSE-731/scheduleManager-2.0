import React from "react";
import { Row, Col, Input, Typography, Button } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";

export default function Login() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center" style={{ height: '100%' }}>
        <Row className="form-content-login border-radius-20 box-shadow">
          <Row className="content-login">
            <Col className="padding-2">
              <Typography.Title className="no-margin font-size-18 d-flex justify-content-center">Ingreso de usuarios</Typography.Title>
            </Col>
            <Col className="padding-2">
              <Input size="large" placeholder="Ingrese usuario" prefix={<UserOutlined />} />
            </Col>
            <Col className="padding-2">
              <Input size="large" placeholder="Ingrese contraseña" prefix={<UnlockOutlined />} />
            </Col>
            <Col className="padding-2 d-flex justify-content-center">
              <Typography.Text>¿Olvidaste tu contraseña?</Typography.Text>
            </Col>
            <Col className="padding-2 d-flex justify-content-center">
              <Button type="primary" shape="round" className="background-color-002053 border-color-002053">
                Iniciar sesión
              </Button>
            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}
