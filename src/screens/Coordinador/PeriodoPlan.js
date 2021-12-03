import React from "react";
// CSS
import { Row, Col, Table, Button } from "antd";
import { DeleteOutlined, EyeOutlined, EditOutlined, PlusOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const dataS = [
  {
    key: "1",
    periodo_plan: "2021-02",
    tipo: "Profesor"
  },
  {
    key: "2",
    periodo_plan: "2021-01",
    tipo: "Profesor"
  },
];

export default function PeriodoPlan() {
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };
  const columnas = [
    {
      title: "Peridodo del plan",
      dataIndex: "periodo_plan",
      key: "nombre_usuario",
    },
    {
      title: "Ver",
      render: (datos, index) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<EyeOutlined />} onClick={() => verplanesacademicos(datos, index)} />
          </Col>
        </Row>
      )
    },
    {
      title: "Editar",
      render: (datos, index) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<EditOutlined />} onClick={() => editplanesacademicos(datos, index)} />
          </Col>
        </Row>
      )
    },
    {
      title: "Borrar",
      render: (datos, index) => (
        <Row>
          <Col>
            <Button shape="circle" icon={<DeleteOutlined />} onClick={() => deleteplanesacedemicos(datos, index)} />
          </Col>
        </Row>
      )
    }
  ];
  const verplanesacademicos = (datos, index) => {
    console.log(datos, index, 'boton de ver')
 
  }
  const editplanesacademicos = (datos, index) => {
    console.log(datos, index, 'boton de editar')
  }
  const deleteplanesacedemicos = (datos, index) => {
    console.log(datos, index, 'boton de eliminar')
  }
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col span={4}>
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Coordinador/")}>
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Planes academicos</span>
            </Col>
            <Col span={4}>
              <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={() => gotoScreen("/Coordinador/CrearAignacion")}>
                Crear Asignación
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