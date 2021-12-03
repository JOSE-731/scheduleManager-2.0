import React, {useEffect, useState} from "react";
// CSS
import { Row, Col, Table, Button, Modal } from "antd";
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function PeriodoPlan() {
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };

  const columnas = [
    {
      title: "Peridodo del plan",
      dataIndex: "nombrePlanAcademico",
      key: "nombrePlanAcademico",
    },
    {
      title: "Ver",
      render: (datos) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<EyeOutlined />} onClick={() => gotoScreen("/Administrador/VerAsignaciones")}/>
          </Col>
        </Row>
      )
    },
    {
      title: "Editar",
      render: (datos) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<EditOutlined />} onClick={() => handleUpdate(datos.idPlanAcademico)} />
          </Col>
        </Row>
      )
    },
    {
      title: "Borrar",
      render: (datos) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<DeleteOutlined />} onClick={() => handleDelete(datos.idPlanAcademico)} />
          </Col>
        </Row>
      )
    }
  ];

  //state de Docentes
  const [periodos, setPeriodos] = useState([]);
  const [listactualizada, setListaactualizada] = useState(false);

  useEffect(() => {
    const getPeriodos = () => {
      fetch('https://app-gestion-aunar.herokuapp.com/periodoacademico')
        .then(res => res.json())
        .then(res => setPeriodos(res))
    }
    getPeriodos();
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
        fetch('https://app-gestion-aunar.herokuapp.com/periodoacademico/' + id, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
        setListaactualizada(true);
      }
    });
  }

  const handleUpdate = id => {
    const requestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    }
    fetch('https://app-gestion-aunar.herokuapp.com/periodoacademico/' + id, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))
    alert('Editado Exitosamente');

    setListaactualizada(true);
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col span={4}>
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Administrador/")}>
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Planes academicos</span>
            </Col>
            <Col span={4}>
              <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => gotoScreen("/Administrador/CrearAsignacion")}>
                Crear Asignación
              </Button>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              <Table dataSource={periodos} columns={columnas} />
            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}