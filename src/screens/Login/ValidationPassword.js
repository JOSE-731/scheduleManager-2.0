import React from "react";
import { Row, Col, Input, Typography, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

export default function ValidarUser() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center" style={{ height: '100%' }}>
      <Row className="form-content-login border-radius-20 box-shadow">
        <Row className="content-login">
          <Col className="padding-2">
            <Typography.Title className="no-margin font-size-18 d-flex justify-content-center">¿Olvidaste contraseña?</Typography.Title>
          </Col>
          <Col className="padding-2">
            <Input size="large" placeholder="Ingrese correo institucional" prefix={<MailOutlined />} />
          </Col>
          <Col className="padding-2 d-flex justify-content-center">
            <Button type="primary" shape="round" className="background-color-002053 border-color-002053">
              Validar
            </Button>
          </Col>
        </Row>
      </Row>
      </div>
    </React.Fragment>
  );
}
