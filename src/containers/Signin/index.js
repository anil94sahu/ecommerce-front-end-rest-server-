import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import {Row, Col, Form, Container} from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router';


export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth =  useSelector(state => state.auth)

    const dispatch = useDispatch();
    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email ,
            password
        }
        dispatch(login(user));

        
    }
    if(auth.authenticate){
        return <Redirect to={'/'}></Redirect>
    }

    return (
        <div>
            <Layout>
                <Container>
                <Row style={{'margin' : '50px'}}>
                    <Col md={{ span: 6, offset: 3 } }>
                        <Form onSubmit = {userLogin}>
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


