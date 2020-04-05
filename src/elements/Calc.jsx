import React, {useState} from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import {Button, Container} from 'react-bootstrap';


function Calc(props) {
    let res = props.numberOfLines
    let [click, setClick] = useState(props.numberOfLines);
    const todoClick = (e) => {
        setClick(res = res + e);
    };


    let [close, setClose] = useState(false);
    const todoClose = (t) => {
        setClose(true);
    };

    return (

        <div className='Cont' hidden={close}>

            <Container fluid='sm'>

                <Form className="border border-primary" isHidden='false'>
                    <button type="button" className="close alert-dismissible" data-dismiss="alert"
                            onClick={() => todoClose()}>&times;</button>

                    <Button className='Btn' onClick={() => todoClick(-3)}> -3 </Button>
                    <Button onClick={() => todoClick(-2)}> -2 </Button>
                    <Button onClick={() => todoClick(-1)}> -1 </Button>
                    <Button className='res' variant="secondary" size="lg"
                            onClick={() => todoClick(res = 0)}> {res = click} </Button>
                    <Button onClick={() => todoClick(+1)}> +1 </Button>
                    <Button onClick={() => todoClick(+2)}> +2 </Button>
                    <Button onClick={() => todoClick(+3)}> +3 </Button>
                </Form>
            </Container>

        </div>
    );
}

export default Calc;
