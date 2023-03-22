import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap'
import { useForm } from 'react-hook-form';


const Login = () => {
    const{register, handleSubmit, watch, formState:{errors}, trigger } = useForm()

    const LoginClick = data => console.log(data);
    console.log(watch('username'));

    return (
        <Container>
            <Row className="mt-4 pt-4 ">
                <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded-lg bg-light">
                    <Form className='bg-light' onSubmit={handleSubmit(LoginClick)} >
                        <h4 className='text-center' >Wallet Pay</h4>
                        <h6 className='mb-3 text-center ' >Welcome back! Please Login into Continue </h6>
                        <FloatingLabel controlId="useremail" label="Useremail" className="mb-3" autoComplete="off" >
                            <Form.Control type="email" {...register('username')}  placeholder="name@example.com" />
                            <Form.Control.Feedback type='invalid'>

                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" autoComplete="off" >
                            <Form.Control type="password" {...register('password', {required : true, maxLength:10, minLength:10 })} placeholder="Password" 
                            isInvalid = {!!errors.password}
                            onKeyUp={() => {
                                trigger("password");}}                            
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.password?.type==='required' && 'Password is Required'}
                                {errors.password?.type==='maxLength' && 'Please enter a 10 digit mobile number'}
                                {errors.password?.type==='minLength' && 'Please enter a 10 digit mobile number'}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <div className='text-center span2'>

                            <Button type='submit' variant="primary" className='mb-2 mt-2 m-3 btn-block ' >Login</Button>

                            <Button type='reset' variant="warning" className='mb-2 mt-2 btn-block ' >Reset</Button>
                        </div>
                        <div className='text-center mt-2 '>
                            {/* <Link to="/forgotpassword" >Forgot Password?</Link> */}
                        </div>
                        <div className='text-center mt-3 '>
                            <h6>New here? Please Sign Up</h6>
                            <Button variant="secondary" className='mb-3' >Sign Up</Button>
                        </div>
                        <div className='text-center'>

                            <Button variant="success" className='mb-3' >Back to Home</Button>
                        </div>
                    </Form>

                </Col>

            </Row>
        </Container>

    )
}

export default Login