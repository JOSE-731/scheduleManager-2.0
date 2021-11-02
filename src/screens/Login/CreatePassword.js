import React from "react";
import { Row, Col, Input, Typography, Button } from "antd";
import { UnlockOutlined } from "@ant-design/icons";

export default function CreatePassword() {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-center" style={{ height: '100%' }}>
                <Row className="form-content-login border-radius-20 box-shadow">
                    <Row className="content-login">
                        <Col className="padding-2">
                            <Typography.Title className="no-margin font-size-18 d-flex justify-content-center">Crear nueva contraseña</Typography.Title>
                        </Col>
                        <Col className="padding-2">
                            <Input size="large" placeholder="Ingrese su nueva contraseña" prefix={<UnlockOutlined />} />
                        </Col>
                        <Col className="padding-2">
                            <Input size="large" placeholder="Repita contraseña" prefix={<UnlockOutlined />} />
                        </Col>
                        <Col className="padding-2 d-flex justify-content-center">
                            <Button type="primary" shape="round" className="background-color-002053 border-color-002053">
                                Cambiar contraseña
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}