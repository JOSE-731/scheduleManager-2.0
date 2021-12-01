import React, { useState, useEffect } from "react";
import axios from "axios";
// CSS
import { Row, Col, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function Usuario() {

  //State de usuarios
  const [stUsers, setUsers] = React.useState('');

  useEffect(() => {

    UsersApi();

  }, []);

  const UsersApi = async () => {

    const users = 'https://app-gestion-aunar.herokuapp.com/usuarios';
    const resUsers = await axios.get(users);
    setUsers(resUsers.data);

  }

  // COLUMNAS DE LAS TABLAS
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };
  const columnas = [
    {
      title: "Id",
      dataIndex: "idUsuario",
      key: "idUsuario",
    },
    {
      title: "Nombre",
      dataIndex: "nombreUsuario",
      key: "nombreUsuario",
    },
    {
      title: "Apellido",
      dataIndex: "apellidoUsuario",
      key: "apellidoUsuario",
    },
    {
      title: "Email institucional",
      dataIndex: "correo",
      key: "correo",
    },
    {
      title: "Numero de cédula",
      dataIndex: "numIdentificacion",
      key: "numIdentificacion",
    },
    {
      title: "Tipo usuario",
      dataIndex: "Roles_idRol",
      key: "Roles_idRol",
    },
    {
      title: "Editar",
      render: (datos, index) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<EditOutlined />} onClick={() => editUsuario(datos, index)} />
          </Col>
        </Row>
      )
    },
    {
      title: "Borrar",
      render: (datos, index) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<DeleteOutlined />} onClick={() => deleteUsuario(datos, index)} />
          </Col>
        </Row>
      )
    }
  ];
  const editUsuario = (datos, index) => {
    console.log(datos, index, 'boton de editar')
  }
  const deleteUsuario = (datos, index) => {
    console.log(datos, index, 'boton de eliminar')
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
              {stUsers ? (
                <Table dataSource={stUsers} columns={columnas} />

              ) : null

              }
            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}