import React from "react";
// CSS
import { Row, Col, Table, Input, Select, Typography, Button } from "antd";
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

export default function VerperiodoPlan() {
    
    const guardarPlanacademico = () => {
      console.log('guardando plan academico');
    };
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
          <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
            <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
              <Col>
                <span className="titulos">Planes académicos del periodo</span>
              </Col>
            </Row>
            <Row style={{ width: "100%" }}>
              <Col span={8} className="select-space">
                <Input.Group>
                  <Typography.Text>Periodo del Plan:</Typography.Text>
                  <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                    <Select.Option value="jack">2021-2</Select.Option>
                    <Select.Option value="lucy">2021-1</Select.Option>
                    <Select.Option value="Yiminghe">2020-2</Select.Option>
                  </Select>
                </Input.Group>
              </Col>
              <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <PlusOutlined className="font-size-18" />
                <span>Crear plan</span>
              </Col>
              <Col span={4}></Col>
              <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <EyeOutlined className="font-size-18" />
                <span>Ver plan</span>
              </Col>
              <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <EditOutlined className="font-size-18" />
                <span>Editar plan</span>
              </Col>
              <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <DeleteOutlined className="font-size-18" />
                <span>Eliminar</span>
              </Col>
            </Row>
          </Row>
        </div>
      </React.Fragment>
    );
  }