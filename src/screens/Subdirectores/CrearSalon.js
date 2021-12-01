import React, { useState, useEffect, Component, state } from "react";
import axios from "axios";
// CSS
import { Row, Col, Input, Typography, Select, Button, Checkbox } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Crearsalon() {

    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };

    //nuevo codigo crear salon
    const [salon, setsalon] = useState({
        tipoSalon: '',
        capacidad: '',
        nomenclatura: ''
    });

    const handlechange1 = e => {
        setsalon({
            ...salon,
            [e.target.name]: e.target.value
        })
    }

    //envio de datos
    const handleSubmit = () => {
        console.log('ingreso todo');
        //validación de datos
        if(salon.tipoSalon === '' || salon.capacidad === '' || salon.nomenclatura === ''){
            alert('Todos los campos son necesarios');
            return
        }

        //consulta para enviar datos
        const requestInit = {
            method: 'post',
            Headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(salon)
        }
        fetch('https://app-gestion-aunar.herokuapp.com/salones', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        //reiniciando state del salon
        setsalon({
            tipoSalon: '',
            capacidad: '',
            nomenclatura: ''
        })
    }

    //State de salones 
    const [stSalones, setSalones] = React.useState('');
    const [stTipo, setTipo] = React.useState('');
    const [stCapacidad, setCapacidad] = React.useState('');
    const [stSalon, setSalon] = useState({
        capacidad: '',
        tipo: '',
        nomeclatura: ''
   })

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

    const handleChange = e =>{
        console.log('hola mudno');
        stSalon({
            [e.target.name]: e.target.value
        })
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
                        <Col span={6} className="select-space">
                            <Input.Group>
                                <Typography.Text>Tipo:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                                    {stSalones ? (stSalones.map((data) =>
                                        <Select.Option value={data.tipoSalon} key={data.idSalon} name={data.tipoSalon} onChange={handlechange1}>{data.tipoSalon}</Select.Option>
                                    )
                                    ) : null}
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={5} className="select-space">
                            <Input.Group  style={{ display: 'flex', flexDirection: 'row' }} onChange={handlechange1} name="capacidad" value='capacidad' type="text" id="capacidad">
                                <Typography.Text>Capacidad:</Typography.Text>
                                <Input />
                            </Input.Group>
                        </Col>
                        <Col span={5} className="select-space">
                            <Input.Group name="nomenclatura" value="nomenclatura" type="text" id="nomenclatura" style={{ display: 'flex', flexDirection: 'row' }} onChange={handlechange1}>
                                <Typography.Text >Nomenclatura:</Typography.Text>
                                <Input />
                            </Input.Group>
                        </Col>
                        <Col span={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
                            <SaveOutlined className="font-size-18" />
                           <boton type="submit">Guardar</boton>
                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}