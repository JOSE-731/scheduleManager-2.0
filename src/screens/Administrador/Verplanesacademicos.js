import React, {useState, useEffect} from "react";
// CSS
import { Row, Col, Table, Button, Modal } from "antd";
import { LeftCircleOutlined, DeleteOutlined, EditOutlined, } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


export default function VerPlaneacionAcademica() {

    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };

    const columnas = [
        {
            title: "Programa",
            dataIndex: "progAcademico",
            key: "progAcademico",
            width: "20%",
        },
        {
            title: "Asignatura",
            dataIndex: "nomAsiganatura",
            key: "nomAsiganatura",
            width: "20%",
        },
        {
            title: "Semestre",
            dataIndex: "semestre",
            key: "semestre",
            width: "20%",
        },
        {
            title: "Jornada",
            dataIndex: "jornada1",
            key: "jornada1",
            width: "20%",
        },
        {
            title: "Profesor",
            dataIndex: "nomProfesor",
            key: "nomProfesor",
            width: "20%",
        },
        {
            title: "Día",
            dataIndex: "dia",
            key: "dia",
            width: "20%",
        },
        {
            title: "Salón",
            dataIndex: "salon",
            key: "salon",
            width: "20%",
        },
        {
            title: "Hora Inicio",
            dataIndex: "horaInicio",
            key: "horaInicio",
            width: "20%",
        },
        {
            title: "Hora Final",
            dataIndex: "horaFinal",
            key: "horaFinal",
            width: "20%",
        },
        {
            title: "Editar",
            render: (datos) => (
                <Row>
                    <Col>
                        <Button shape="circle" icon={<EditOutlined />} onClick={() => handleUpdate(datos.idAsignacion)} />
                    </Col>
                </Row>
            )
        },
        {
            title: "Borrar",
            render: (datos) => (
                <Row>
                    <Col>
                        <Button shape="circle" icon={<DeleteOutlined />} onClick={() => handleDelete(datos.idAsignacion)} />
                    </Col>
                </Row>
            )
        }
    ];

    //state de Docentes
    const [asignaciones, setAsignaciones] = useState([]);
    const [listactualizada, setListaactualizada] = useState(false);

    useEffect(() => {
        const getAsignaciones = () => {
            fetch('https://app-gestion-aunar.herokuapp.com/asignacion')
                .then(res => res.json())
                .then(res => setAsignaciones(res))
        }
        getAsignaciones();
        setListaactualizada(false);
    }, [listactualizada])

    const handleDelete = id => {
        Modal.confirm({
            title: "Estas seguro de eliminar el Docente",
            okText: "Si",
            okType: "danger",
            onOk: () => {
                const requestInit = {
                    method: 'DELETE'
                }
                fetch('https://app-gestion-aunar.herokuapp.com/asignacion/' + id, requestInit)
                    .then(res => res.text())
                    .then(res => console.log(res))
                setListaactualizada(true);
            }
        });
    }

    const handleUpdate = id => {
        /*const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        }
        fetch('https://app-gestion-aunar.herokuapp.com/asignacion/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        alert('Editado Exitosamente');

        setListaactualizada(true);*/
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
                <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
                    <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
                        <Col span={4}>
                            <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Administrador/PeriodoPlan")} >
                                Salir
                            </Button>
                        </Col>
                        <Col span={16} className="d-flex justify-content-center">
                            <span className="titulos">Asignaciónes del Periodo Académico</span>
                        </Col>
                        <Col span={4}></Col>
                    </Row>

                    <Row style={{ width: "100%" }}>
                        <Col span={24} className="select-space">
                            {
                                asignaciones ? (<Table pagination={{ position: ["bottomRight"], pageSize: 4 }} columns={columnas} dataSource={asignaciones} />) : null
                            }

                        </Col>
                    </Row>
                </Row>
            </div>
        </React.Fragment>
    );
}
