import React, { useState, useEffect } from "react";
import axios from "axios";
// CSS
import { Row, Col, Input, Typography, Select, Button} from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


export default function Crearusuarios() {
  const history = useHistory();

   //State de roles
   const [stRoles, setRoles] = React.useState('');

   useEffect(() => {
 
     rolesApi();
 
   }, []);
 
   const rolesApi = async () => {
 
     const roles= 'https://app-gestion-aunar.herokuapp.com/roles';
     const resRoles = await axios.get(roles);
     setRoles(resRoles.data);
 
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
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Administrador/Usuarios")}>
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Crear usuarios</span>
            </Col>
            <Col span={4}></Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col span={8} className="select-space">
              <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography.Text>Nombre del usuario:</Typography.Text>
                <Input placeholder="Diana Carolina Escobar" />
              </Input.Group>
            </Col>
            <Col span={6} className="select-space">
              <Input.Group>
                <Typography.Text>Tipo usuario:</Typography.Text>
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }}>
                {stRoles ? (stRoles.map((data) =>
                      <Select.Option value={data.idRol} key={data.idRol}>{data.nombreRol}</Select.Option>
                    )
                    ) : null}
                </Select>
              </Input.Group>
            </Col>
            <Col span={8} className="select-space">
              <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography.Text>Numero de cedula:</Typography.Text>
                <Input placeholder="1111111" />
              </Input.Group>
            </Col>
            <Col span={8} className="select-space">
              <Input.Group style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography.Text>E-mail institución:</Typography.Text>
                <Input placeholder="usuarios@campusvitual.aunarvillavicencio.com" />
              </Input.Group>
            </Col>
            <Col span={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <SaveOutlined className="font-size-18" />
              <span>Guardar</span>
            </Col>

            <Col span={24} className="margin-left-2">
              <Typography.Paragraph>
                Nota: Tenga en cuenta que para el ingreso al sistema, debe ingresar en el correo institucional y la contraseña es su numero de cedula, Recuerde cambiar la contraseña la primera vez que ingrese al sistema para mayor seguridad de la información.
              </Typography.Paragraph>
            </Col>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}