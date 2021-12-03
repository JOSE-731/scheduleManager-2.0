import React from "react";
import { useHistory } from "react-router-dom";
// CSS
import { Row, Col } from "antd";
import { FilePptOutlined, HomeOutlined} from "@ant-design/icons";

export default function SubdirectorsubHome() {
    const history = useHistory();
    const gotoScreen = (screen) => {
        return history.push(screen);
    };
    return (
        <div className="d-flex align-center justify-content-center flex-direction-columm" style={{ height: "100%" }}>
            <Row style={{ width: "100%" }}>
                <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <FilePptOutlined
                    className="font-size-100 justify-content-center font-color-FFFFFF" 
                    onClick={() => gotoScreen("/Subdirector/Programas")}
                    label="Planes académicos"
                    />
                    <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Programas</span>
                </Col>
                <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <HomeOutlined
                    className="font-size-100 justify-content-center font-color-FFFFFF" 
                    onClick={() => gotoScreen("/Subdirector/Salones")}
                    label="usuarios"
                    />
                    <span className="d-flex no-margin justify-content-center font-color-FFFFFF">Salones</span>
                </Col>
            </Row>
        </div>
    );
}
