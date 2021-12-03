import React, { useState, useEffect } from "react";

// CSS
import { Row, Col, Input, Space, Button, Checkbox, Form } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Crearprogramas() {
    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };

    const [instituciones, setInstituciones] = useState([]);
    const [facultades, setFacultades] = useState([]);
    const [programa, setPrograma] = useState({
        nombrePrograma: '',
        numSemestres: '',
        codPrograma: '',
        jornada1: '0',
        jornada2: '0',
        jornada3: '0',
        Facultad_idFacultad: '',
        Facultad_TipoInstitucion_idTipoInstitucion: '',
        Facultad_TipoInstitucion_PlanesAcademicos_idPlanAcademico: 1
    });

    useEffect(() => {
        const getInfacul = () => {
            fetch('https://app-gestion-aunar.herokuapp.com/tipo-institucion')
                .then(res => res.json())
                .then(res => setInstituciones(res))

            fetch('https://app-gestion-aunar.herokuapp.com/facultades')
                .then(res => res.json())
                .then(res => setFacultades(res))
        }
        getInfacul();
    }, [])

    const handleChange = e => {
        setPrograma({
            ...programa,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        programa.numSemestres = parseInt(programa.numSemestres, 10);
        programa.codPrograma = parseInt(programa.codPrograma, 10);
        programa.jornada1 = parseInt(programa.jornada1, 10);
        programa.jornada2 = parseInt(programa.jornada2, 10);
        programa.jornada3 = parseInt(programa.jornada3, 10);
        programa.Facultad_idFacultad = parseInt(programa.Facultad_idFacultad, 10);
        programa.Facultad_TipoInstitucion_idTipoInstitucion = parseInt(programa.Facultad_TipoInstitucion_idTipoInstitucion, 10);
        //validación datos
        if (programa.nombrePrograma === '' || programa.codPrograma === '' || programa.numSemestres === '') {
            alert('Todos los campos son necesarios');
            return
        }

        //enviar datos
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(programa)
        }
        fetch('https://app-gestion-aunar.herokuapp.com/programa', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        alert('Guardado Exitosamente');

        setPrograma({
            nombrePrograma: '',
            numSemestres: '',
            codPrograma: '',
            jornada1: '0',
            jornada2: '0',
            jornada3: '0',
            Facultad_idFacultad: '',
            Facultad_TipoInstitucion_idTipoInstitucion: '',
            Facultad_TipoInstitucion_PlanesAcademicos_idPlanAcademico: 1
        });

        gotoScreen("/Subdirector/Programas")
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
                <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
                    <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Subdirector/Programas")}>
                                Salir
                            </Button>
                        </Col>
                        <Col span={16} className="d-flex justify-content-center">
                            <span className="titulos">Crear Programas Académicos</span>
                        </Col>
                        <Col span={4}></Col>
                    </Row>

                    <Row style={{ width: "100%" }}>
                        <Form layout="inline">
                            <Form.Item label="Nombre Programa" span={8} className="select-space">
                                <Input placeholder="Diseño Visual" onChange={handleChange} name="nombrePrograma" value={programa.nombrePrograma} />
                            </Form.Item>

                            <Form.Item label="N° Semestres" span={8} className="select-space">
                                <Input placeholder="8" onChange={handleChange} name="numSemestres" value={programa.numSemestres} />
                            </Form.Item>

                            <Form.Item label="Código Programa" span={8} className="select-space">
                                <Input placeholder="109012" onChange={handleChange} name="codPrograma" value={programa.codPrograma} />
                            </Form.Item>

                            <Form.Item label="Facultad" span={8} className="select-space">
                                <select name="Facultad_idFacultad" onChange={handleChange}>
                                    {
                                        facultades ? (facultades.map((data) =>
                                            <option value={data.idFacultad}>{data.nombreFacultad}</option>
                                        )) : null
                                    }
                                </select>
                            </Form.Item>

                            <Form.Item label="Tipo Institución" span={8} className="select-space">
                                <select name="Facultad_TipoInstitucion_idTipoInstitucion" onChange={handleChange}>
                                    {
                                        instituciones ? (instituciones.map((data) =>
                                            <option value={data.idTipoInstitucion}>{data.nombreInstitucion}</option>
                                        )) : null
                                    }
                                </select>
                            </Form.Item>

                            <Form.Item label="Jornada" span={8} className="select-space">
                                <Space>
                                    <Checkbox name="jornada1" onChange={handleChange} value="1" >Diurna</Checkbox>
                                    <Checkbox name="jornada2" onChange={handleChange} value="2" >Nocturna</Checkbox>
                                    <Checkbox name="jornada3" onChange={handleChange} value="3" >Sabatina</Checkbox>
                                </Space>
                            </Form.Item>

                            <Col span={24} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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