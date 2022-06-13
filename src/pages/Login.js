import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const token = localStorage.getItem('token');
  const { register, handleSubmit } = useForm([]);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem('token', '');
    navigate('/');
  };

  const submit = (data) => {
    axios
      .post(
        'https://ecommerce-api-react.herokuapp.com/api/v1/users/login',
        data
      )
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          alert('Wrong credentials');
        }
      });
  };

  return (
    <div>
      {token ? (
        <div className="card mt-5">
          <h1 className="text-center">Login</h1>
          <div className="card m-3 d-grid justify-content-center">
            <i
              className="bi bi-person-bounding-box text-success"
              style={{ fontSize: '40px' }}
            ></i>
            <h6>Name</h6>
          </div>
          <div className="d-flex justify-content-center mb-3 gap-2">
            <button className="btn btn-danger" onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <Card style={{ maxWidth: '500px' }} className="mx-auto">
          <Card.Body>
            <h1 className="text-center">Login</h1>
            <div className="card mb-2">
              <h6 className="text-center mt-1">User Test</h6>
              <p className="m-3">
                <b>Email: </b>mason@gmail.com
              </p>
              <p className="m-3 mt-0">
                <b>Password: </b>mason1234
              </p>
            </div>
            <div className="card">
              <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="m-3 d-grid" controlId="formBasicEmail">
                  <div className="d-flex justify-content-center">
                    <i
                      className="bi bi-person-bounding-box text-danger"
                      style={{ fontSize: '40px' }}
                    ></i>
                  </div>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    {...register('email')}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <div className="d-flex flex-column justify-content-center mb-3 gap-2">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                  <p>
                    Don't have an account? <a href="/#/singup">Sing up</a>{' '}
                  </p>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Login;
