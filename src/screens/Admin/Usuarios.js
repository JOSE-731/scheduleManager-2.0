import React from "react";
// CSS
import { Row, Col, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const dataS = [
  {
    key: "1",
    nombre_usuario: "Andrea Cerquera Lopez",
    tipo: "Profesor",
    numero_cedula: 100000001,
    email_institucional: "profesor@correo.com"
  },
  {
    key: "2",
    nombre_usuario: "Andrea Martinez Lopez",
    tipo: "Profesor",
    numero_cedula: 100000002,
    email_institucional: "profesor@correo.com"
  },
];


export default function Usuarios() {
  // COLUMNAS DE LAS TABLAS
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };
  const columnas = [
    {
      title: "Nombre",
      dataIndex: "nombre_usuario",
      key: "nombre_usuario",
    },
    {
      title: "Tipo usuario",
      dataIndex: "tipo",
      key: "tipo",
    },
    {
      title: "Numero de cédula",
      dataIndex: "numero_cedula",
      key: "numero_cedula",
    },
    {
      title: "Email institucional",
      dataIndex: "email_institucional",
      key: "email_institucional",
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
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Administrador")}>
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Usuarios</span>
            </Col>
            <Col span={4}>
              <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => gotoScreen("/Administrador/CrearUsuarios")}>
                Crear usuario
              </Button>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              <Table dataSource={dataS} columns={columnas} />
            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}