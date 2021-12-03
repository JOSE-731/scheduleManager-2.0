import React from "react";
// CSS
import { Row, Col, Input, Typography, Button} from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';

export default function CrearperidoPlan() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col span={4}>
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} >
                Salir
              </Button>
            </Col>
            <Col span={20} className="d-flex justify-content-center">
              <span className="titulos">Crear plan académico</span>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={10} className="select-space">
              <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography.Text>Ingrese el periodo del plan a crear:</Typography.Text>
                <Input placeholder="2021-2" />
              </Input.Group>
            </Col>
            <Col span={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <SaveOutlined className="font-size-18" />
              <span>Guardar</span>
            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}