import React, { useState, useEffect } from "react";
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

export default function VerPlanAcademico() {

  //State de la apis que se consumen
  const [stInstitucion, setInstitucion] = React.useState('');
  const [stFacultades, setFacultades] = React.useState('');
  const [stProgramas, setProgramas] = React.useState('');
  const [stSemestres, setSemestres] = React.useState('');

  useEffect(() => {


    consultarAPI();
    facultadApi();
    programaAPI();
    semestresApi();

  }, []);

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

  const programaAPI = async () => {

    const programas = 'https://app-gestion-aunar.herokuapp.com/programa';
    const resProgramas = await axios.get(programas);
    setProgramas(resProgramas.data);
    console.log(resProgramas);

  }

  const semestresApi = async () => {

    const semestres = 'https://app-gestion-aunar.herokuapp.com/semestres';
    const resSemestres = await axios.get(semestres);
    setSemestres(resSemestres.data);
    console.log(stSemestres);

  }


  const guardarPlanacademico = () => {
    console.log('guardando plan academico');
  };

  return (
    <>
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
                    {stInstitucion ? (stInstitucion.map((data) =>
                      <Select.Option value={data.idTipoInstitucion} key={data.idTipoInstitucion}>{data.nombreInstitucion}</Select.Option>
                    )
                    ) : null}
                  </Select>
                </Input.Group>
              </Col>
              <Col span={8} className="select-space">
                <Input.Group>
                  <Typography.Text>Facultad:</Typography.Text>
                  <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                    {stFacultades ? (stFacultades.map((data) =>
                      <Select.Option value={data.idFacultad} key={data.idFacultad}>{data.nombreFacultad}</Select.Option>
                    )
                    ) : null}
                  </Select>
                </Input.Group>
              </Col>
              <Col span={8} className="select-space">
                <Input.Group>
                  <Typography.Text>Programa:</Typography.Text>
                  <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                    {stProgramas ? (stProgramas.map((data) =>
                      <Select.Option value={data.idPrograma} key={data.idPrograma}>{data.nombrePrograma}</Select.Option>
                    )
                    ) : null}
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
                  {stSemestres ? (stSemestres.map((data) =>
                      <Select.Option value={data.idSemestre} key={data.idSemestre}>{data.numSemestre}</Select.Option>
                    )
                    ) : null}
                  </Select>
                </Input.Group>
              </Col>
              
            </Row>
            <Row className="box-table">
              <Table columns={columnas} dataSource={dataS} />
            </Row>
          </Row>
        </div>
      </React.Fragment>
    </>
  );
}
