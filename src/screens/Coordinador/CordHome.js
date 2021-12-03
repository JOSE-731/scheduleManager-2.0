import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
//Redirigir
import { withRouter } from "react-router-dom"
// CSS
import { Row, Col } from "antd";
import { BookOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const  CordHome = (props) => {
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };

  //Ruta protegida
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log('existe el usuario')
    } else {
      console.log('no existe');
      props.history.push('/')
    }
  },[])

  return (
    <div className="d-flex align-center justify-content-center flex-direction-columm" style={{ height: "100%" }}>
      <Row style={{ width: "100%" }}>
        <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <BookOutlined
            className="font-size-100 justify-content-center font-color-FFFFFF"
            onClick={() => gotoScreen("/Coordinador/PeriodoPlan")}
            label="Planes académicos"
          />
          <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Planes Académicos</span>
        </Col>
        <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <UsergroupAddOutlined
            className="font-size-100 justify-content-center font-color-FFFFFF"
            onClick={() => gotoScreen("/Coordinador/Docentes")}
            label="Docentes"
          />
          <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Docentes</span>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(CordHome)