import React, { useState, useEffect } from "react";
import axios from "axios";
// CSS
import { Row, Col, Input, Typography, Select, Button, Checkbox } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';

export default function Crearsalon() {

    //State de salones
    const [stSalones, setSalones] = React.useState('');

    useEffect(() => {

        salonesApi();

    }, []);

    const salonesApi = async () => {

        const salones = 'https://app-gestion-aunar.herokuapp.com/salones';
        const resSalones = await axios.get(salones);
        setSalones(resSalones.data);

    }



    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
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
                        <Col span={16} className="d-flex justify-content-center">
                            <span className="titulos">Crear salon</span>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Col span={6} className="select-space">
                            <Input.Group>
                                <Typography.Text>Bloque:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                    {stSalones ? (stSalones.map((data) =>
                                        <Select.Option value={data.idSalon} key={data.idSalon}>{data.bloque}</Select.Option>
                                    )
                                    ) : null}
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={6} className="select-space">
                            <Input.Group>
                                <Typography.Text>Tipo:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                {stSalones ? (stSalones.map((data) =>
                                        <Select.Option value={data.idSalon} key={data.idSalon}>{data.tipoSalon}</Select.Option>
                                    )
                                    ) : null}
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={5} className="select-space">
                            <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography.Text>Nomenclatura:</Typography.Text>
                                <Input />
                            </Input.Group>
                        </Col>
                        <Col span={5} className="select-space">
                            <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography.Text>Capacidad:</Typography.Text>
                                <Input />
                            </Input.Group>
                        </Col>
                        <Col span={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <SaveOutlined className="font-size-18" />
                            <span>Guardar</span>
                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}