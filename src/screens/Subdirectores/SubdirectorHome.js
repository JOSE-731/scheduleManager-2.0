import React from "react";
import { useHistory } from "react-router-dom";
// CSS
import { Row, Col } from "antd";
import { BookOutlined, UsergroupAddOutlined, BankOutlined} from "@ant-design/icons";

export default function SubdirectorHome() {
    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };
    return (
        <div className="d-flex align-center justify-content-center flex-direction-columm" style={{ height: "100%" }}>
            <Row style={{ width: "100%" }}>
                <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <BookOutlined
                    className="font-size-100 justify-content-center font-color-FFFFFF" 
                    onClick={() => gotoScreen("/Administrador/PeriodoPlan")}
                    label="Planes académicos"
                    />
                    <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Planes Académicos</span>
                </Col>
                <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <UsergroupAddOutlined
                    className="font-size-100 justify-content-center font-color-FFFFFF" 
                    onClick={() => gotoScreen("/Administrador/Usuarios")}
                    label="usuarios"
                    />
                    <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Usuarios</span>
                </Col>
                <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <BankOutlined
                    className="font-size-100 justify-content-center font-color-FFFFFF" 
                    onClick={() => gotoScreen("/Subdirector/HomeGestion")}
                    label="Gestio de clases"
                    />
                    <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Gestión de Clases</span>
                </Col>
            </Row>
        </div>
    );
}
