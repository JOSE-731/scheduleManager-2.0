import React from "react";
// CSS
import { Row, Col, Table, Button, Input, Select, Typography } from "antd";
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';


const dataS = [
    {
        key: "1",
        nomenclatura: "1- S1",
        capacidad: "35"
    },
    {
        key: "2",
        nomenclatura: "2- D2",
        capacidad: "38"
    }
];


export default function Salones() {
    // COLUMNAS DE LAS TABLAS
    const columnas = [
        {
            title: "Nomenclatura",
            dataIndex: "nomenclatura",
            key: "nomenclatura",
        },
        {
            title: "Capacidad",
            dataIndex: "capacidad",
            key: "capacidad",
        },
        {
            title: "Editar",
            render: (datos, index) => (
                <Row>
                    <Col>
                        <Button shape="circle" icon={<EditOutlined />} onClick={() => editProgramas(datos, index)} />
                    </Col>
                </Row>
            )
        },
        {
            title: "Borrar",
            render: (datos, index) => (
                <Row>
                    <Col>
                        <Button shape="circle" icon={<DeleteOutlined />} onClick={() => deleteProgramas(datos, index)} />
                    </Col>
                </Row>
            )
        }
    ];
    const editProgramas = (datos, index) => {
        console.log(datos, index, 'boton de editar')
    }
    const deleteProgramas = (datos, index) => {
        console.log(datos, index, 'boton de eliminar')
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
                            <span className="titulos">Salones</span>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<PlusOutlined />} >
                                Crear Salon
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Col span={12} className="select-space">
                            <Input.Group>
                                <Typography.Text>Bloque:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 180 }}>
                                    <Select.Option value="jack">Jack</Select.Option>
                                    <Select.Option value="lucy">Lucy</Select.Option>
                                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={12} className="select-space">
                            <Input.Group>
                                <Typography.Text>Tipo:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 180 }}>
                                    <Select.Option value="jack">Jack</Select.Option>
                                    <Select.Option value="lucy">Lucy</Select.Option>
                                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={24} className="select-space">
                            <Table dataSource={dataS} columns={columnas} />
                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}