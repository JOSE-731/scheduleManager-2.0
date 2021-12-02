import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import { Row, Col, Table, Button, Input, Select, Typography } from "antd";
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const dataS = [
    {
        key: "1",
        nombre_programa: "Fundamentos de contabilidad",
        codigo: "31232131",
        semestre: 2
    },
    {
        key: "2",
        nombre_programa: "Matematicas II",
        codigo: "34445553",
        semestre: 5
    },
];


export default function Programas() {

    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
      };


    const [stFacultades, setFacultades] = React.useState('');
    const [stInstitucion, setInstitucion] = React.useState('');
    const [stPrograma, setPrograma] = React.useState('')

    useEffect(() => {

        facultadApi();
        consultarAPI();
        programasApi();

    }, []);

    const programasApi = async () => {

        const programa = 'https://app-gestion-aunar.herokuapp.com/programa';
        const resPrograma = await axios.get(programa);
        setPrograma(resPrograma.data);

    }


    const facultadApi = async () => {

        const facultades = 'https://app-gestion-aunar.herokuapp.com/facultades';
        const resFacultades = await axios.get(facultades);
        setFacultades(resFacultades.data);

    }

    const consultarAPI = async () => {

        const tipoInstitucion = 'https://app-gestion-aunar.herokuapp.com/tipo-institucion';
        const resTipoInstitucion = await axios.get(tipoInstitucion);
        setInstitucion(resTipoInstitucion.data);

    }

    // COLUMNAS DE LAS TABLAS
    const columnas = [
        {
            title: "Id",
            dataIndex: "idPrograma",
            key: "idPrograma",
        },
        {
            title: "Nombre del programa",
            dataIndex: "nombrePrograma",
            key: "nombrePrograma",
        },
        {
            title: "Numero del semestre",
            dataIndex: "numSemestres",
            key: "numSemestres",
        },
        {
            title: "Codigo del programa",
            dataIndex: "codPrograma",
            key: "codPrograma",
        },
        {
            title: "Jornada",
            dataIndex: "jornada",
            key: "jornada",
        },
        {
            title: "Facultad",
            dataIndex: "Facultad_idFacultad",
            key: "Facultad_idFacultad",
        },
        {
            title: "Institucion",
            dataIndex: "Facultad_TipoInstitucion_idTipoInstitucion",
            key: "Facultad_TipoInstitucion_idTipoInstitucion",
        },
        {
            title: "Ver",
            render: (datos, index) => (
                <Row>
                    <Col>
                        <Button shape="circle" icon={<EyeOutlined />} onClick={() => verProgramas(datos, index)} />
                    </Col>
                </Row>
            )
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
    const verProgramas = (datos, index) => {
        console.log(datos, index, 'boton de editar')
    }
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
                            <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Subdirector/HomeGestion")} >
                                Salir
                            </Button>
                        </Col>
                        <Col span={16} className="d-flex justify-content-center">
                            <span className="titulos">Programas académicos</span>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => gotoScreen("/Subdirector/CrearProgramasAcademicos")} >
                                Crear programa
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%" }}>
                        <Col span={12} className="select-space">
                            <Input.Group>
                                <Typography.Text>Tipo institución:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 180 }}>
                                    {stInstitucion ? (stInstitucion.map((data) =>
                                        <Select.Option value={data.idTipoInstitucion} key={data.idTipoInstitucion}>{data.nombreInstitucion}</Select.Option>
                                    )
                                    ) : null}
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={12} className="select-space">
                            <Input.Group>
                                <Typography.Text>Facultad:</Typography.Text>
                                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 180 }}>
                                    {stFacultades ? (stFacultades.map((data) =>
                                        <Select.Option value={data.idFacultad} key={data.idFacultad}>{data.nombreFacultad}</Select.Option>
                                    )
                                    ) : null}
                                </Select>
                            </Input.Group>
                        </Col>
                        <Col span={24} className="select-space">
                            <Table dataSource={stPrograma} columns={columnas} />
                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}