import React, { useState, useEffect } from "react";
// CSS
import { Row, Col, Table, Button, Modal } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Docentes() {

  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };

  // COLUMNAS DE LAS TABLAS
  const columnas = [
    {
      title: "Nombres",
      dataIndex: "nombreprofesor",
      key: "nombreprofesor",
    },
    {
      title: "Apellidos",
      dataIndex: "apellidoProfesor",
      key: "apellidoProfesor",
    },
    {
      title: "Tipo Docente",
      dataIndex: "tipoProfesor",
      key: "tipoProfesor",
    },
    {
      title: "Editar",
      render: (datos) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<EditOutlined />} onClick={() => handleUpdate(datos.idProfesor)} />
          </Col>
        </Row>
      )
    },
    {
      title: "Borrar",
      render: (datos) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<DeleteOutlined />} onClick={() => handleDelete(datos.idProfesor)} />
          </Col>
        </Row>
      )
    }
  ];

  //state de Docentes
  const [docentes, setDocentes] = useState([]);
  const [listactualizada, setListaactualizada] = useState(false);

  useEffect(() => {
    const getDocentes = () => {
      fetch('https://app-gestion-aunar.herokuapp.com/profesores')
        .then(res => res.json())
        .then(res => setDocentes(res))
    }
    getDocentes();
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
        fetch('https://app-gestion-aunar.herokuapp.com/profesores/' + id, requestInit)
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
    fetch('https://app-gestion-aunar.herokuapp.com/profesores/' + id, requestInit)
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
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Coordinador/")} >
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Docentes</span>
            </Col>
            <Col span={4}>
              <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => gotoScreen("/Coordinador/CrearDocentes")} >
                Crear Docente
              </Button>
            </Col>
          </Row>

          <Row style={{ width: "100%" }}>
            <Col span={24} className="select-space">
              {
                docentes ? (<Table pagination={{ position: ["bottomRight"], pageSize: 4 }} columns={columnas} dataSource={docentes} />) : null
              }

            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}