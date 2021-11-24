import React from "react";

import { Input, Select, Row, Col, Typography } from "antd";
import { SaveOutlined } from '@ant-design/icons';

export default function Campos() {
    return (
        <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
            <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
                <Row style={{ width: "100%" }}>
                    <Col span={8} className="select-space">
                        <Input.Group>
                            <Typography.Text>Materia:</Typography.Text>
                            <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>
                        </Input.Group>
                    </Col>
                    <Col span={8} className="select-space">
                        <Input.Group>
                            <Typography.Text>Profesor:</Typography.Text>
                            <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>
                        </Input.Group>
                    </Col>
                    <Col span={8} className="select-space">
                        <Input.Group>
                            <Typography.Text>Salon:</Typography.Text>
                            <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>
                        </Input.Group>
                    </Col>
                    <Col span={8} className="select-space">
                        <Input.Group>
                            <Typography.Text>Dia:</Typography.Text>
                            <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>
                        </Input.Group>
                    </Col>
                    <Col span={8} className="select-space">
                        <Input.Group>
                            <Typography.Text>Hora:</Typography.Text>
                            <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>
                        </Input.Group>
                    </Col>
                </Row>
            </Row>
        </div>
    );
}