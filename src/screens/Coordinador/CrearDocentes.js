import React, { useState, useEffect } from "react";

// CSS
import { Row, Col, Input, Select, Button, Form, Modal } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


export default function CrearDocentes() {
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };

  const { Option } = Select;

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const getRoles = () => {
      fetch('https://app-gestion-aunar.herokuapp.com/roles')
        .then(res => res.json())
        .then(res => setRoles(res))
    }
    getRoles();
  }, [])

  const [docente, setDocente] = useState({
    nombreprofesor: '',
    apellidoProfesor: '',
    tipoProfesor: '',
    Roles_idRol: ''
  });

  const handleChange = e => {
    setDocente({
      ...docente,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeTipo = e => {
    setDocente({
      ...docente,
      tipoProfesor: e
    })
  }

  const handleChangeRol = e => {
    setDocente({
      ...docente,
      Roles_idRol: e
    })
  }

  const handleSubmit = () => {

    docente.Roles_idRol = parseInt(docente.Roles_idRol, 10);
    //validación datos
    if (docente.nombreprofesor === '' || docente.apellidoProfesor === '' || docente.tipoProfesor === '' || docente.Roles_idRol === '') {
      alert('Todos los campos son necesarios');
      return
    }

    //enviar datos
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(docente)
    }
    fetch('https://app-gestion-aunar.herokuapp.com/profesores', requestInit)
      .then(res => res.text())
      .then(res => console.log(res))
    setDocente({
      nombreprofesor: '',
      apellidoProfesor: '',
      tipoProfesor: '',
      Roles_idRol: ''
    });

    Modal.info({
      title: "Docente Creado con Exito",
      onOk: () => {
        gotoScreen("/Coordinador/Docentes")
      }
    });
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col span={4}>
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Coordinador/Docentes")}>
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Crear Docente</span>
            </Col>
            <Col span={4}></Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Form layout="inline">

              <Form.Item label="Nombre Profesor" span={8} className="select-space">
                <Input placeholder="Carlos Yamir" onChange={handleChange} name="nombreprofesor" value={docente.nombreprofesor} />
              </Form.Item>

              <Form.Item label="Apellido Profesor" span={8} className="select-space">
                <Input placeholder="Montenegro Garces" onChange={handleChange} name="apellidoProfesor" value={docente.apellidoProfesor} />
              </Form.Item>

              <Form.Item label="Tipo Profesor" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeTipo}>
                  <Option value="TC" >Tiempo Completo</Option>
                  <Option value="MT" >Medio Tiempo</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Tipo Rol" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeRol}>
                  {
                    roles ? (roles.map((data) =>
                      <Select.Option value={data.idRol} key={docente.Roles_idRol}>{data.nombreRol}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SaveOutlined className="font-size-18" onClick={handleSubmit} />
                <span>Guardar</span>
              </Col>
            </Form>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}