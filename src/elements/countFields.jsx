import React, {useState} from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import {Button, Container} from 'react-bootstrap';
import Calc from "./Calc";

let warning;
let numberOfLines = [];

function CountFields(props) {


    const [todo, setTodo] = useState();
    const [send, setSend] = useState();
    const [alert, setAlert] = useState();


    const todoInput = (n) => {
        setTodo(+n.target.value)
    }

    const todoSend = (x) => {
        if (x) {
            setSend(numberOfLines.push(x))
            setAlert(<h9 text-align='left'>'click on result btn to reset value'</h9>)
        } else {
            setAlert(<h1 className='danger'>'Please enter some number'</h1>)
        }

    }


    return (

        <div className='Cont2'>

            <Container fluid='sm'>

                <div>
                    <Form className='inputForm'>
                        <input type='number' placeholder='enter number' autoFocus={true} onChange={todoInput}/>
                        <Button className='res' variant="secondary" size="lg"
                                onClick={() => todoSend(todo)}> ADD </Button>
                    </Form>


                </div>
                {numberOfLines.map(el => <Calc key={el} numberOfLines={numberOfLines[numberOfLines.length - 1]}/>)}
                {alert}
            </Container>

        </div>

    );
}

export default CountFields;
