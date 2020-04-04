import React, {useState} from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import {Button, Container} from 'react-bootstrap';

let res = 10;
let numberOFBtn = []
function HW3(props) {

    const [todo, setTodo] = useState(10);

    const todoChange = (n) => {
        setTodo(res = res + n);

    }
    //     const [input, setInput] = useState();
    //
    //     const todoField = (e) => {
    //         setInput(e.target.value);
    //         btnNum(e);
    // }
    //
    // const todoField2 = (s) => {
    //     setInput(s.target.value);
    //     btnNum(s);
    // }
    //
    // const btnNum = () => {
    //         for (let i=e; i<= s; i++){
    //             numberOFBtn.push(i)
    //         }
    // }

    return (
        <div className='Cont'>
            <Container fluid='sm'>

                {/*MIN<input classNAme= 'inputField' type='text' onChange = {todoField}/>*/}
                {/*{input}MAX <input type='text'  onChange = {todoField2}/>*/}

                <Form className="border border-primary">
                    {numberOFBtn.map(el => (<Button key = 'index'className='Btn' onClick={() => todoChange(-el)}> {-el} </Button>))}
                    <Button className='Btn' onClick={() => todoChange(-3)}> -3 </Button>
                    <Button onClick={() => todoChange(-2)}> -2 </Button>
                    <Button onClick={() => todoChange(-1)}> -1 </Button>
                    <Button className='res' variant="secondary" size="lg" onClick={() => todoChange(res = 0)} > {todo} </Button>
                    <Button onClick={() => todoChange(+1)}> +1 </Button>
                    <Button onClick={() => todoChange(+2)}> +2 </Button>
                    <Button onClick={() => todoChange(+3)}> +3 </Button>
                </Form>
                click on result btn to reset value
            </Container>
        </div>
    );
}

export default HW3;
