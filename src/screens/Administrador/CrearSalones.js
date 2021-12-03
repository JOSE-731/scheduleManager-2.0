import React, { useState } from "react";
// CSS
import { Row, Col, Input, Button, Form, Modal, Select } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Crearsalones() {

    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };

    const { Option } = Select;

    const [salon, setSalon] = useState({
        tipoSalon: '',
        capacidad: '',
        nomenclatura: ''
    });

    const handleChange = e => {
        setSalon({
            ...salon,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeTipoSalon = e => {
        setSalon({
            ...salon,
            tipoSalon: e
        })
    }

    const handleSubmit = () => {
        salon.tipoSalon = parseInt(salon.tipoSalon, 10);
        //validación datos
        if (salon.tipoSalon === '' || salon.capacidad === '' || salon.nomenclatura === '') {
            alert('Todos los campos son necesarios');
            return
        }

        //enviar datos
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(salon)
        }
        fetch('https://app-gestion-aunar.herokuapp.com/salones', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setSalon({
            tipoSalon: '',
            capacidad: '',
            nomenclatura: ''
        });

        Modal.info({
            title: "Salón Creado con Exito",
            onOk: () => {
                gotoScreen("/Administrador/Salones")
            }
        });
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
                <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
                    <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Administrador/Salones")}>
                                Salir
                            </Button>
                        </Col>
                        <Col span={16} className="d-flex justify-content-center">
                            <span className="titulos">Crear salon</span>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Form layout="inline">

                            <Form.Item label="Tipo Salón" span={8} className="select-space">
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeTipoSalon}>
                                    <Option value="1" >Salón Normal</Option>
                                    <Option value="2" >Salón de Sistemas</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Capacidad del Salón" span={8} className="select-space">
                                <Input placeholder="20 - 30" onChange={handleChange} name="capacidad" value={salon.capacidad} />
                            </Form.Item>

                            <Form.Item label="Nomenclatura del Salón" span={8} className="select-space">
                                <Input placeholder="105" onChange={handleChange} name="nomenclatura" value={salon.nomenclatura} />
                            </Form.Item>

                            <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <SaveOutlined className="font-size-18" onClick={handleSubmit} />
                                <span>Guardar</span>
                            </Col>
                        </Form>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}