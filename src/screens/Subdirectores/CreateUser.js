import React, { useState} from "react";
// CSS
import { Row, Col, Input, Typography, Button, Form } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


export default function Crearusuario() {
  const history = useHistory();

  //nuevo código

  const [usuario, setUsuario] = useState({
    nombreUsuario: '',
    apellidoUsuario: '',
    correo: '',
    Roles_idRol: 0
  });

  const handleChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
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
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(usuario)
    }
    fetch('https://app-gestion-aunar.herokuapp.com/usuarios', requestInit)
    .then(res => res.text())
    .then(res => console.log(res))
    alert('Guardado Exitosamente');

    setUsuario({
      nombreUsuario: '',
      apellidoUsuario: '',
      correo: '',
      Roles_idRol: 0
    });
  }

  const gotoScreen = (screen) => {
    return history.push(screen);
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col span={4}>
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Subdirector/")}>
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
                <Input placeholder="Escobar" onChange={handleChange} name="apellidoUsuario" value={usuario.apellidoUsuario}/>
              </Form.Item>

              <Form.Item label="E-mail Institucional" span={8} className="select-space">
                <Input placeholder="diana.escobar@aunarvillavicencio.edu.co" onChange={handleChange} name="correo" value={usuario.correo}/>
              </Form.Item>

              <Form.Item label="Tipo Usuario" span={8} className="select-space">
                <Input placeholder=" 1 - 4" onChange={handleChange} name="Roles_idRol" value={usuario.Roles_idRol} />
              </Form.Item>

              <Col span={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <SaveOutlined className="font-size-18" onClick={handleSubmit} />
                <span>Guardar</span>
              </Col>

              <Col span={24} className="margin-left-2">
                <Typography.Paragraph>
                  Nota: Tenga en cuenta que para el ingreso al sistema, debe ingresar en "Usuario" el correo institucional y la "contraseña" es Aunar.123, Recuerde cambiar la contraseña la primera vez que ingrese al sistema para mayor seguridad de la información.
                </Typography.Paragraph>
              </Col>
            </Form>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}