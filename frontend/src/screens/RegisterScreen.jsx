import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import './RegisterScreen.css'; // Import your CSS file

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Row className="register-screen-row">
      <Col md={6}>
        <Card className="register-card">
          <Card.Body>
           
                <div className="register-form-container">
                  <h2 className="register-heading">Create a new Account</h2>
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                      <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      /><br/>
                    </Form.Group>

                    <Form.Group controlId='email'>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      /><br/>
                    </Form.Group>

                    <Form.Group controlId='password'>
                      <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      /><br/>
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                      <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      /><br/>
                    </Form.Group>

                    <Button disabled={isLoading} type='submit' variant='primary' style={{width:"120px",marginLeft:"335px"}}>
                      Register
                    </Button>

                    {isLoading && <Loader />}
                  </Form>

                  <Row className='py-3'>
                    <Col>
                      Already a member?{' '}
                      <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Login
                      </Link>
                    </Col>
                  </Row>
                </div>
             
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterScreen;
