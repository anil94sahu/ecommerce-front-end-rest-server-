import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, addCategory } from '../../actions';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Category = (props) => {

    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    const handleClose = () => {
        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form))

        /* const cat = {
            categoryName,
            parentCategoryId,
            categoryImage
        } */
        setShow(false)
    };
    const handleShow = () => setShow(true);

    useEffect(() =>{
        dispatch(getAllCategory());
    }, []);

    const renderCategories = (categories) => {
        let myCategory = [];
        for(let category of categories){
            myCategory.push(
                <li key = {category.name}>{category.name}
                    {category.childrens.length > 0 ? (<ul>{renderCategories(category.childrens)}</ul>) :null}
                </li>
            );
        }
        return myCategory;
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories){
            options.push({value: category._id, name: category.name});
            if(category.childrens.length > 0){
                createCategoryList(category.childrens, options);
            }
        }
        return options;
    }

    const handleCategoryImage = (event) => {
        setCategoryImage(event.target.files[0])
    }

    return (
        <div>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}></div>
                            <h3>Category</h3>
                            <button onClick={handleShow}>Add</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {12}>
                         {renderCategories(category.categories)}
                         
                        </Col>
                    </Row>
                </Container>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input value={categoryName} placeholder = {`category.name`} 
                        onChange = {(e) => {setCategoryName(e.target.value)}} />
                        <select className = "form-control" value = {parentCategoryId} onChange={e => setParentCategoryId(e.target.value)}>
                            <option>select category</option>
                            {createCategoryList(category.categories).map(option => 
                            <option key = {option.value} value={option.value}>{option.name}</option>)
                            }
                        </select>
                        <input type="file" name = "categoryImage" onChange={handleCategoryImage} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </Layout>
        </div>
    )
}

export default Category;

