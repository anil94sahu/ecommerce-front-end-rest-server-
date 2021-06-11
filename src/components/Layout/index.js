import React from 'react'
import Header from '../Header';
import { Col, Row, Container, NavLink } from 'react-bootstrap'

export default function Layout(props) {
    return (
        <>
            <Header/>
            {props.sidebar ? 
                <Container fluid>
                    <Row>
                        <Col md={2} className = "sidebar">
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to ={`/products`}>Product</NavLink> </li>
                                <li><NavLink to={`/orders`}>Orders</NavLink> </li>
                                <li><NavLink to={`/category`}>Category</NavLink> </li>
                            </ul>
                        </Col>
                        <Col md={10} style={{marginLeft: 'auto'}}>{props.children}</Col>
                    </Row>
                </Container>
                : 
                props.children
            }
        </>
    )
}
