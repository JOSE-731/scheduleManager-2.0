import React, { useState, useEffect } from "react";
// CSS
import { Row, Col, Input, Typography, Button, Form, Modal, Select } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


export default function CrearUsuarios() {

  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };

  useEffect(() => {
    const getUsuarios = () => {
      fetch('https://app-gestion-aunar.herokuapp.com/roles')
        .then(res => res.json())
        .then(res => setRoles(res))
    }
    getUsuarios();
  }, [])

  const [roles, setRoles] = useState([]);
  const [usuario, setUsuario] = useState({
    nombreUsuario: '',
    apellidoUsuario: '',
    correo: '',
    Roles_idRol: ''
  });

  const handleChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeRol = e => {
    setUsuario({
      ...usuario,
      Roles_idRol: e
    })
  }

  const handleSubmit = () => {
    usuario.Roles_idRol = parseInt(usuario.Roles_idRol, 10);
    //validación datos
    if (usuario.nombreUsuario === '' || usuario.apellidoUsuario === '' || usuario.correo === '' || usuario.Roles_idRol === 0) {
      alert('Todos los campos son necesarios');
      return
    }

    //enviar datos
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    }
    fetch('https://app-gestion-aunar.herokuapp.com/usuarios', requestInit)
      .then(res => res.text())
      .then(res => console.log(res))

    setUsuario({
      nombreUsuario: '',
      apellidoUsuario: '',
      correo: '',
      Roles_idRol: 0
    });

    Modal.info({
      title: "Usuario Creado con Exito",
      onOk: () => {
        gotoScreen("/Administrador/Usuarios")
      }
    });
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col span={4}>
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Administrador/Usuarios/")}>
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Crear usuarios</span>
            </Col>
            <Col span={4}></Col>
          </Row>

          <Row style={{ width: "100%" }}>
            <Form layout="inline">
              <Form.Item label="Nombre del Usuario" span={8} className="select-space">
                <Input placeholder="Diana Carolina" onChange={handleChange} name="nombreUsuario" value={usuario.nombreUsuario} />
              </Form.Item>

              <Form.Item label="Apellido del Usuario" span={8} className="select-space">
                <Input placeholder="Escobar" onChange={handleChange} name="apellidoUsuario" value={usuario.apellidoUsuario} />
              </Form.Item>

              <Form.Item label="E-mail Institucional" span={8} className="select-space">
                <Input placeholder="diana.escobar@aunarvillavicencio.edu.co" onChange={handleChange} name="correo" value={usuario.correo} />
              </Form.Item>

              <Form.Item label="Tipo Institución" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeRol}>
                  {
                    roles ? (roles.map((data) =>
                      <Select.Option value={data.idRol}>{data.nombreRol}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Col span={24} className="margin-left-2">
                <Typography.Paragraph>
                  Nota: Tenga en cuenta que para el ingreso al sistema, debe ingresar en "Usuario" el correo institucional y la "contraseña" es Aunar.123, Recuerde cambiar la contraseña la primera vez que ingrese al sistema para mayor seguridad de la información.
                </Typography.Paragraph>
              </Col>

              <Col span={23} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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