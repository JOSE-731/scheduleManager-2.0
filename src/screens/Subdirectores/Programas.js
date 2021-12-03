import React, { useState, useEffect } from "react";

// CSS
import { Row, Col, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


export default function Programas() {

    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };

    // COLUMNAS DE LAS TABLAS
    const columnas = [
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
            title: "Editar",
            render: (datos) => (
                <Row>
                    <Col>
                        <Button shape="circle" icon={<EditOutlined />} onClick={() => handleUpdate(datos.idPrograma)} />
                    </Col>
                </Row>
            )
        },
        {
            title: "Borrar",
            render: (datos) => (
                <Row>
                    <Col>
                        <Button shape="circle" icon={<DeleteOutlined />} onClick={() => handleDelete(datos.idPrograma)} />
                    </Col>
                </Row>
            )
        }
    ];

    //state de usuarios
    const [programas, setProgramas] = useState([]);
    const [listactualizada, setListaactualizada] = useState(false);

    useEffect(() => {
        const getProgramas = () => {
            fetch('https://app-gestion-aunar.herokuapp.com/programa')
                .then(res => res.json())
                .then(res => setProgramas(res))
        }
        getProgramas();
        setListaactualizada(false);
    }, [listactualizada])

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('https://app-gestion-aunar.herokuapp.com/programa/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        alert('Eliminado Exitosamente');

        setListaactualizada(true);
    }

    const handleUpdate = id => {
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        }
        fetch('https://app-gestion-aunar.herokuapp.com/programa/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        alert('Editado Exitosamente');

        setListaactualizada(true);
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%", paddingTop: "7%" }}>
                <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
                    <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Subdirector/")} >
                                Salir
                            </Button>
                        </Col>
                        <Col span={16} className="d-flex justify-content-center">
                            <span className="titulos">Programas Académicos</span>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => gotoScreen("/Subdirector/CrearProgramasAcademicos")} >
                                Crear Programa
                            </Button>
                        </Col>
                    </Row>

                    <Row style={{ width: "100%" }}>
                        <Col span={24} className="select-space">
                            {
                                programas ? (<Table pagination={{ position: ["bottomRight"], pageSize: 4 }} columns={columnas} dataSource={programas} />) : null
                            }
                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}