import React, { useState, useEffect } from "react";

// CSS
import { Row, Col, Input, Select, Button, Form, Modal } from "antd";
import { SaveOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


export default function CrearAsignacion() {
  const history = useHistory();
  const gotoScreen = (screen) => {
    return history.push(screen);
  };

  const { Option } = Select;

  //Horas
  const horas = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00']

  // Días
  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

  const [programas, setProgramas] = useState([]);
  const [semestres, setSemestres] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [materia_modular, setMateria_modular] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [salones, setSalones] = useState([]);
  const [tipo_institucion, setTipo_institucion] = useState([]);
  const [periodos, setPeriodos] = useState([]);

  useEffect(() => {
    const getDatos = () => {
      fetch('https://app-gestion-aunar.herokuapp.com/programa')
        .then(res => res.json())
        .then(res => setProgramas(res))
      fetch('https://app-gestion-aunar.herokuapp.com/semestres')
        .then(res => res.json())
        .then(res => setSemestres(res))
      fetch('https://app-gestion-aunar.herokuapp.com/materias')
        .then(res => res.json())
        .then(res => setMaterias(res))
      fetch('https://app-gestion-aunar.herokuapp.com/materia-modular')
        .then(res => res.json())
        .then(res => setMateria_modular(res))
      fetch('https://app-gestion-aunar.herokuapp.com/profesores')
        .then(res => res.json())
        .then(res => setProfesores(res))
      fetch('https://app-gestion-aunar.herokuapp.com/salones')
        .then(res => res.json())
        .then(res => setSalones(res))
      fetch('https://app-gestion-aunar.herokuapp.com/tipo-institucion')
        .then(res => res.json())
        .then(res => setTipo_institucion(res))
      fetch('https://app-gestion-aunar.herokuapp.com/periodoacademico')
        .then(res => res.json())
        .then(res => setPeriodos(res))
    }
    getDatos();
  }, [])

  const [asignacion, setAsignacion] = useState({
    progAcademico: '',
    semestre: '',
    nomAsiganatura: '',
    codAsignatura: '',
    numCreditos: 2,
    jornada1: '',
    jornada2: '2',
    jornada3: '3',
    momentoAsig: '',
    dia: '',
    horaInicio: '',
    horaFinal: '',
    nomProfesor: '',
    salon: '',
    capacidad: 10,
    tipoinstitucion_idTipoInstitucion: '',
    tipoinstitucion_planesacademicos_idPlanAcademico: ''
  });

  //Obtener Datos
  const handleChangePeriodo = e => {
    setAsignacion({
      ...asignacion,
      tipoinstitucion_planesacademicos_idPlanAcademico: e
    })
  }

  const handleChangePrograma = e => {
    setAsignacion({
      ...asignacion,
      progAcademico: e
    })
  }

  const handleChangeAsignatura = e => {
    setAsignacion({
      ...asignacion,
      nomAsiganatura: e
    })
  }

  const handleChangeSemestre = e => {
    setAsignacion({
      ...asignacion,
      semestre: e
    })
  }

  const handleChangeJornada = e => {
    setAsignacion({
      ...asignacion,
      jornada1: e
    })
  }

  const handleChangeMomento = e => {
    setAsignacion({
      ...asignacion,
      momentoAsig: e
    })
  }

  const handleChangeDia = e => {
    setAsignacion({
      ...asignacion,
      dia: e
    })
  }

  const handleChangeHoraI = e => {
    setAsignacion({
      ...asignacion,
      horaInicio: e
    })
  }

  const handleChangeHoraF = e => {
    setAsignacion({
      ...asignacion,
      horaFinal: e
    })
  }

  const handleChangeProfesor = e => {
    setAsignacion({
      ...asignacion,
      nomProfesor: e
    })
  }

  const handleChangeSalon = e => {
    setAsignacion({
      ...asignacion,
      salon: e
    })
  }

  const handleChangeInstitucion = e => {
    setAsignacion({
      ...asignacion,
      tipoinstitucion_idTipoInstitucion: e
    })
  }

  //Enviar datos
  const handleSubmit = () => {
    //validación datos
    if (asignacion.nomAsiganatura === '' || asignacion.horaFinal === '' || asignacion.dia === '' || asignacion.salon === '') {
      alert('Todos los campos son necesarios');
      return
    }

    //enviar datos
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(asignacion)
    }

    fetch('https://app-gestion-aunar.herokuapp.com/asignacion', requestInit)
    .then(res => res.text())
    .then(res => console.log(res))


    setAsignacion({
      progAcademico: '',
      semestre: '',
      nomAsiganatura: '',
      codAsignatura: '',
      numCreditos: 2,
      jornada1: '',
      jornada2: '2',
      jornada3: '3',
      momentoAsig: '',
      dia: '',
      horaInicio: '',
      horaFinal: '',
      nomProfesor: '',
      salon: '',
      capacidad: 10,
      tipoinstitucion_idTipoInstitucion: '',
      tipoinstitucion_planesacademicos_idPlanAcademico: ''
    });

    Modal.info({
      title: "Asignación Creada con Exito",
      onOk: () => {
        gotoScreen("/Coordinador/PeriodoPlan")
      }
    });
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center flex-direction-columm" style={{ height: "100%" }}>
        <Row className="box-select-content border-radius-10 box-shadow" style={{ padding: "2%" }}>
          <Row style={{ width: "100%", padding: "2%" }} className="d-flex justify-content-center">
            <Col span={4}>
              <Button type="primary" shape="round" icon={<LeftCircleOutlined />} onClick={() => gotoScreen("/Coordinador/PeriodoPlan")}>
                Salir
              </Button>
            </Col>
            <Col span={16} className="d-flex justify-content-center">
              <span className="titulos">Crear Asignación Docente</span>
            </Col>
            <Col span={4}></Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Form layout="inline">

              <Form.Item label="Periodo Académico" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangePeriodo}>
                  {
                    periodos ? (periodos.map((data) =>
                      <Select.Option value={data.idPlanAcademico}>{data.nombrePlanAcademico}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Programa Académico" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangePrograma}>
                  {
                    programas ? (programas.map((data) =>
                      <Select.Option value={data.nombrePrograma}>{data.nombrePrograma}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Materia" span={8} className="select-space">
                <Select showSearch optionFilterProp="children" className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeAsignatura}>
                  {
                    materias ? (materias.map((data) =>
                      <Select.Option value={data.nombreMateria}>{data.nombreMateria}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Semestre" span={8} className="select-space">
                <Select showSearch optionFilterProp="children" className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeSemestre}>
                  {
                    semestres ? (semestres.map((data) =>
                      <Select.Option value={data.idSemestre}>{data.numSemestre}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Jornada" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeJornada}>
                  <Option value="1" >Diurna</Option>
                  <Option value="2" >Nocturna</Option>
                  <Option value="3" >Sabatina</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Momento" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeMomento}>
                  {
                    materia_modular ? (materia_modular.map((data) =>
                      <Select.Option value={data.momento}>{data.momento}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Día" span={8} className="select-space">
                <Select showSearch optionFilterProp="children" className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeDia}>
                  {
                    dias.map((dia, index) => {
                      return <Select.Option key={index} value={dia}>{dia}</Select.Option>
                    })
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Hora Inicio" span={8} className="select-space">
                <Select showSearch optionFilterProp="children" className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeHoraI}>
                  {
                    horas.map((hora, index) => {
                      return <Select.Option key={index} value={hora}>{hora}</Select.Option>
                    })
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Hora Final" span={8} className="select-space">
                <Select showSearch optionFilterProp="children" className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeHoraF}>
                  {
                    horas.map((horas, index) => {
                      return <Select.Option key={index} value={horas}>{horas}</Select.Option>
                    })
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Profesor" span={8} className="select-space">
                <Select showSearch optionFilterProp="children" className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeProfesor}>
                  {
                    profesores ? (profesores.map((data) =>
                      <Select.Option value={data.nombreprofesor}>{data.nombreprofesor}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Salón" span={8} className="select-space">
                <Select showSearch optionFilterProp="children" className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeSalon}>
                  {
                    salones ? (salones.map((data) =>
                      <Select.Option value={data.nomenclatura}>{data.nomenclatura}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Form.Item label="Tipo Institución" span={8} className="select-space">
                <Select className="margin-left" defaultValue="Seleccione" style={{ width: 150 }} onChange={handleChangeInstitucion}>
                  {
                    tipo_institucion ? (tipo_institucion.map((data) =>
                      <Select.Option value={data.idTipoInstitucion}>{data.nombreInstitucion}</Select.Option>
                    )) : null
                  }
                </Select>
              </Form.Item>

              <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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