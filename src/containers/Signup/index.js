import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {Row, Col, Form, Container} from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { signup } from '../../actions';

export default function Signup() {

    const auth =  useSelector(state => state.auth);
    const user =  useSelector(state => state.user);
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const userSignup = (e) => {
        e.preventDefault();
        const user = {firstName, lastName, email, password};
        dispatch(signup(user))
    }

    if(auth.authenticate){
        return <Redirect to={'/'}></Redirect>
    }

    if(user.loading){
        return <p>Loading...!!</p>
    }

    return (
        <div>
            <Layout>
                <Container>
                    {user.message}
                <Row style={{'margin' : '50px'}}>
                    <Col md={{ span: 6, offset: 3 } }>
                        <Form onSubmit = {userSignup}>
                                <Row>
                                    <Col md={{ span: 6 }}>
                                        <Input 
                                            label="First Name"
                                            type="text"
                                            placeholder="First Name"
                                            onChange={(e) => setFirstName(e.target.value)}
                                            value = {firstName}
                                        />
                                    </Col>
                                    <Col>
                                        <Input 
                                            label="Last Name"
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={(e) => setLastName(e.target.value)}
                                            value = {lastName}
                                        />
                                    </Col>
                                </Row>
                                    <Input 
                                        label="Email address"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        error = "We'll never share your email with anyone else."
                                        value = {email}
                                    />
                                     <Input 
                                        label="Password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value = {password}
                                    />
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </Col>
                </Row>
                </Container>
            </Layout>
        </div>
    )
}
