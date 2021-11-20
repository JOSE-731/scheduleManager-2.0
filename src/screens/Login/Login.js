import React, { useState } from "react";
import { Row, Col, Input, Typography, Button, Form } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import { auth, db } from '../../firebase';
import { withRouter } from "react-router-dom";



const Login = (props) => {
  //State para iniciar sesión
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const [esRegistro, setRegistro] = React.useState(false);

  const procesarDatos = e => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Ingrese el email');
      console.log('Ingrese el email');
      return
    }
    if (!password.trim()) {
      setError('Ingrese el password');
      console.log('Ingrese el password');
      return
    }
    if (password.length < 6) {
      setError('Ingrese una contraseña de 6 caracteres como minimo');
    }

    if(esRegistro){
     registrar();
    }else{
      LoginUser();
    }

  }

  const LoginUser = React.useCallback(async () => {
    try {
      
      const rest = await auth.signInWithEmailAndPassword(email, password)
      setEmail('');
      setPassword('');
      console.log(rest);

      //Redirigir
      props.history.push('/Administrador/')

    } catch (error) {
      
      console.log(error)
    }
  }, [email, password])

  const registrar = React.useCallback(async () => {

    try{
     const res = await auth.createUserWithEmailAndPassword(email, password)
     console.log(res.user);

     await db.collection('usuarios').doc(res.user.email).set({
       email: res.user.email,
       uid: res.user.uid
     })

     setEmail('')
     setPassword('')

    }catch (error){
      console.log(error)
    }

  }, [email, password, props.history])

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-center" style={{ height: '100%' }}>
        <Row className="form-content-login border-radius-20 box-shadow">
          <Row className="content-login">
            <form onSubmit={procesarDatos}>
              {
                error && (
                  <div>
                    {error}
                  </div>
                )
              }
              <Col className="padding-2">
                <Typography.Title className="no-margin font-size-18 d-flex justify-content-center">Ingreso de usuarios</Typography.Title>
              </Col>
              <Col className="padding-2">
                <Input
                  size="large"
                  placeholder="Ingrese usuario"
                  type="email"
                  id="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </Col>
              <Col className="padding-2">
                <Input
                  size="large"
                  placeholder="Ingrese contraseña"
                  type="password"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </Col>
              <Col className="padding-2 d-flex justify-content-center">
                <Typography.Text>¿Olvidaste tu contraseña?</Typography.Text>
              </Col>
              <Col className="padding-2 d-flex justify-content-center">
                <input type="submit" className="btn btn-primary mb-5" value="Iniciar Sesión" />
              </Col>
            </form>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Login)