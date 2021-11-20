import React, {useState, useEffect} from "react";
// CSS
import { Row, Col, Table, Input, Select, Typography, Button } from "antd";
import axios from "axios";

const columnas = [
  {
    title: "Tipo institución",
    dataIndex: "tipo_institucion",
    key: "tipo_institucion",
    width: "20%",
  },
  {
    title: "Facultad",
    dataIndex: "facultad",
    key: "facultad",
    width: "20%",
  },
  {
    title: "Programa",
    dataIndex: "programa",
    key: "programa",
    width: "20%",
  },
  {
    title: "Jornada",
    dataIndex: "jornada",
    key: "jornada",
    width: "20%",
  },
  {
    title: "Semestre",
    dataIndex: "semestre",
    key: "semestre",
    width: "20%",
  }
];

const dataS = [
  {
    key: "1",
    tipo_institucion: "FFFFFFFF",
    facultad: "Ingenieria",
    programa: "Ingenieria informatica",
    jornada: "Nocturna",
    semestre: "Noveno",
  },
  
];

export default function PlaneacionAcademica() {

  useEffect(() =>{

    const consultarAPI = async () =>{
      const  tipoInstitucion = 'https://app-gestion-aunar.herokuapp.com/tipo-institucion';
     
      const resultado1 = await axios.get(tipoInstitucion);
      console.log(resultado1);

    }

    const consultarAPI2 = async () =>{
      const facultades = 'https://app-gestion-aunar.herokuapp.com/facultades';
      const resultado2 = await axios.get(facultades);
     
      console.log(resultado2);
    }
    consultarAPI();
    consultarAPI2();

  }, []);

  const guardarPlanacademico = () => {
    console.log('guardando plan academico');
  };



  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col>
              <span className="titulos">Planes académicos del periodo</span>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={8} className="select-space">
              <Input.Group>
                <Typography.Text>Tipo institución:</Typography.Text>
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
              </Input.Group>
            </Col>
            <Col span={8} className="select-space">
              <Input.Group>
                <Typography.Text>Facultad:</Typography.Text>
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
              </Input.Group>
            </Col>
            <Col span={8} className="select-space">
              <Input.Group>
                <Typography.Text>Programa:</Typography.Text>
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
              </Input.Group>
            </Col>
            <Col span={8} className="select-space">
              <Input.Group>
                <Typography.Text>Jornada:</Typography.Text>
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
              </Input.Group>
            </Col>
            <Col span={8} className="select-space">
              <Input.Group>
                <Typography.Text>Semestre:</Typography.Text>
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
              </Input.Group>
            </Col>
            <Col span={8} className="padding-2">
              <Button
                type="primary"
                shape="round"
                className="background-color-002053 border-color-002053"
                onClick={guardarPlanacademico}
              >
                Guardar
              </Button>
            </Col>
          </Row>
          <Row className="box-table">
            <Table columns={columnas} dataSource={dataS} />
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}
