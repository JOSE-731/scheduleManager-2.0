import React, { useState} from "react";
// CSS
import { Row, Col, Input, Button, Form } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Crearsalon() {

    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };

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
        alert('Guardado Exitosamente');

        setSalon({
            tipoSalon: '',
            capacidad: '',
            nomenclatura: ''
        });

        gotoScreen("/Subdirector/Salones")
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
                <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
                    <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Subdirector")}>
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
                                <select name="tipoSalon" style={{ width: 120 }} onChange={handleChange}>
                                    <option value="1">Salon normal</option>
                                    <option value="2">Sala de Sistemas</option>
                                </select>
                            </Form.Item>

                            <Form.Item label="Capacidad del Salón" span={8} className="select-space">
                                <Input placeholder="20 - 30" onChange={handleChange} name="capacidad" value={salon.capacidad} />
                            </Form.Item>

                            <Form.Item label="Nomenclatura del Salón" span={8} className="select-space">
                                <Input placeholder="105" onChange={handleChange} name="nomenclatura" value={salon.nomenclatura} />
                            </Form.Item>
                            
                            <Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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