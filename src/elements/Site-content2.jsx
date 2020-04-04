import React, {useState} from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import {Button, Container} from 'react-bootstrap'

function Content2(props) {

    const [todo, setTodo] = useState( 'HI')


const todoChange = (e) => {
    console.log('change' + e.target.value)
    setTodo(e.target.value)
}

    let boom = (n) =>{
        alert('Please enter existing email and password')}

    return (
        <div className='Cont'>
            <Container fluid='sm'>
                <Form>
                    <Form.Group controlId="formBasicEmail" align-items='start'>
                        <Form.Label> Email address</Form.Label>
                        <Form.Control display='block' type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> {props.password} </Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button onClick={() => boom(100)}>
                        Submit
                    </Button>

                </Form>
            </Container>
        </div>

    );
}

export default Content2;
