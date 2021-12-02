import React, { useState, useEffect } from "react";
// CSS
import { Row, Col, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Usuario() {

  // COLUMNAS DE LAS TABLAS
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };

  const columnas = [
    {
      title: 'Nombre Usuario',
      dataIndex: 'nombreUsuario',
      key: 'nombreUsuario'
    },
    {
      title: 'Apellido Usuario',
      dataIndex: 'apellidoUsuario',
      key: 'apellidoUsuario'
    },
    {
      title: 'Email Institucional',
      dataIndex: 'correo',
      key: 'correo'
    },
    {
      title: "Editar",
      render: (datos) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<EditOutlined />} onClick={() => handleUpdate(datos.idUsuario)} />
          </Col>
        </Row>
      )
    },
    {
      title: "Eliminar",
      render: (datos) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<DeleteOutlined />} onClick={() => handleDelete(datos.idUsuario)} />
          </Col>
        </Row>
      )
    }
  ];

  //state de usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [listactualizada, setListaactualizada] = useState(false);

  //obtiene todos los usuarios de la base de datos
  useEffect(() => {
    const getUsuarios = () => {
      fetch('https://app-gestion-aunar.herokuapp.com/usuarios')
        .then(res => res.json())
        .then(res => setUsuarios(res))
    }
    getUsuarios();
    setListaactualizada(false);
  }, [listactualizada])

  //metodo para eliminar un usuario
  const handleDelete = id => {
    const requestInit = {
      method: 'DELETE'
    }
    fetch('https://app-gestion-aunar.herokuapp.com/usuarios/' + id, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))
    alert('Eliminado Exitosamente');

    setListaactualizada(true); //actualiza la tabla con los datos
  }

  //metodo para editar datos, aun no esta funcional
  const handleUpdate = id => {
    const requestInit = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify()
    }
    fetch('https://app-gestion-aunar.herokuapp.com/usuarios/' + id, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))
    alert('Eliminado Exitosamente');

    setListaactualizada(true);
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
              <span className="titulos">Usuarios</span>
            </Col>
            <Col span={4}>
              <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => gotoScreen("/Subdirector/CrearUsuarios")}>
                Crear usuario
              </Button>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              {
                usuarios ? (<Table columns={columnas} dataSource={usuarios} />) : null
              }

            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}