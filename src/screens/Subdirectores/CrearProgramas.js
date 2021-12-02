import React, { useState, useEffect } from "react";
import axios from "axios";
// CSS
import { Row, Col, Input, Typography, Select, Button, Checkbox } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Crearprogramas() {
    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };

    const [stFacultades, setFacultades] = React.useState('');
    const [stInstitucion, setInstitucion] = React.useState('');

    useEffect(() => {


        consultarAPI();
        facultadApi();


    }, []);

    const consultarAPI = async () => {

        const tipoInstitucion = 'https://app-gestion-aunar.herokuapp.com/tipo-institucion';
        const resTipoInstitucion = await axios.get(tipoInstitucion);
        setInstitucion(resTipoInstitucion.data);

    }

    const facultadApi = async () => {

        const facultades = 'https://app-gestion-aunar.herokuapp.com/facultades';
        const resFacultades = await axios.get(facultades);
        setFacultades(resFacultades.data);

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
                            <Button type="primary" shape="round" icon={<LeftCircleOutlined />}   onClick={() => gotoScreen("/Subdirector/Programas")}>
                                Salir
                            </Button>
                        </Col>
                        <Col span={16} className="d-flex justify-content-center">
                            <span className="titulos">Crear programas academicos</span>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Col span={7} className="select-space">
                            <Input.Group>
                                <Typography.Text>Tipo institución:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                    {stInstitucion ? (stInstitucion.map((data) =>
                                        <Select.Option value={data.idTipoInstitucion} key={data.idTipoInstitucion}>{data.nombreInstitucion}</Select.Option>
                                    )
                                    ) : null}
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={7} className="select-space">
                            <Input.Group>
                                <Typography.Text>Facultad:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                    {stFacultades ? (stFacultades.map((data) =>
                                        <Select.Option value={data.idFacultad} key={data.idFacultad}>{data.nombreFacultad}</Select.Option>
                                    )
                                    ) : null}
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={10} className="select-space">
                            <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography.Text>Nombre del programa:</Typography.Text>
                                <Input />
                            </Input.Group>
                        </Col>
                        <Col span={8} className="select-space">
                            <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography.Text>Codigo del programa:</Typography.Text>
                                <Input />
                            </Input.Group>
                        </Col>
                        <Col span={5} className="select-space">
                            <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography.Text>Nro. de Semestre:</Typography.Text>
                                <Input />
                            </Input.Group>
                        </Col>
                        <Col span={8} className="select-space">
                            <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                <Typography.Text>Jornada:</Typography.Text>
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="A">Diurna</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="B">Nocturna</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="C">Sabatina</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Col>
                        <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <SaveOutlined className="font-size-18" />
                            <span>Guardar</span>
                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}