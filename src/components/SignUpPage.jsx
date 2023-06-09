
import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

// https://www.youtube.com/watch?v=FY8sXCsjvf8
const SignUpPage = () => {
    const { register, handleSubmit, getValues, formState: { errors }, trigger } = useForm()
    //Regex Variable to compare
    // var regExEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
    // var regexUsername = /[A-Za-z]{3,25}/ // More  than 3 character and only alphabets
    // var regex10digits = /^[0-9]\d{09}$/ // to validate both phone no and account no - should be 10 digit
    // var regexAddress /^[a-zA-Z0-9(?:_*.\)?]{10,100}$/ between 10 - 100 characters, combination of uppercasr, lowercase and digits and Underscore (_), Asterisk (*), Period (.), Hyphen (-), Forward slash (/)
    // var regExPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/ - password should contain atleast 8 characters.Must Contain 1 uppercase, 1 lowercase, 1 numeric and atleast 1 symbols ( @, #, %, ^, &)

    const SignUp = (formData, e) => {
        // async function SignUp(e){
        e.preventDefault()
        console.log(formData);
    }

    const navigate = useNavigate();

    const routeToLogin = () => {
        navigate("/login")
    }

    return (
        <Container     >
            <Row className="mt-4  pt-4">
                <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded-lg bg-light">

                    <Form className='bg-light' onSubmit={handleSubmit(SignUp)} >
                        <h4 className='text-center ' >Sign Up</h4>
                        <h6 className='mb-3 text-center ' >Join us!</h6>

                        <FloatingLabel controlId="UserEmail" label="Email Address" className="mb-3" autoComplete="off" >
                            <Form.Control type="email" placeholder="name@example.com"
                                {...register('useremail', { required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/ })}

                                isInvalid={!!errors.useremail}
                                onKeyUp={() => {
                                    trigger("useremail");
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.useremail?.type === 'required' && 'Email is Required'}
                                {errors.useremail?.type === 'pattern' && 'Please enter a valid email'}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="UserName" label="Username" className="mb-3" autoComplete="off" >
                            <Form.Control type="text" placeholder="Username"
                                {...register('username', { required: true, pattern: /[A-Za-z]{3,25}/ })}
                                isInvalid={!!errors.username}
                                onKeyUp={() => {
                                    trigger("username");
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.username?.type === 'required' && 'Username is Required'}
                                {errors.username?.type === 'pattern' && 'Userame length must be between 3 -20 characters, use only alphabets. numbers & special charaters not allowed'}
                            </Form.Control.Feedback>

                        </FloatingLabel>

                        <FloatingLabel controlId="UserAddress" label="Address" className="mb-3" autoComplete="off" >
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Address"
                                {...register('address', { required: true, pattern: /^[a-zA-Z0-9(?:_*.\-\\,\s)?]{10,100}$/ })}
                                isInvalid={!!errors.address}
                                onKeyUp={() => {
                                    trigger("address");
                                }}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.address?.type === 'required' && 'Address field is required'}
                                {errors.address?.type === 'pattern' && 'Address length must be between 10 -100 characters'}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="UserMobileNumber" label="Mobile Number" className="mb-3" autoComplete="off" >
                            <Form.Control type="number" placeholder="Mobile Number"
                                {...register('MobNo', { required: true, pattern: /^\d{10}$/ })}
                                isInvalid={!!errors.MobNo}
                                onKeyUp={() => {
                                    trigger("MobNo");
                                }}

                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.MobNo?.type === 'required' && 'Mobile No field is required'}
                                {errors.MobNo?.type === 'pattern' && 'Please enter your 10 digit number'}
                            </Form.Control.Feedback>

                        </FloatingLabel>

                        <FloatingLabel controlId="newUserPassword" label="Password" className="mb-3" autoComplete="off" >
                            <Form.Control type="password" placeholder="Password"
                                {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%^&])(?!.* ).{8,20}$/ })}
                                isInvalid={!!errors.password}
                                onKeyUp={() => {
                                    trigger("password");
                                }}

                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.password?.type === 'required' && 'Confirm Password is Required'}

                                {errors.password?.type === 'pattern' && 'Your password should contain atleast 8 characters.Must Contain 1 uppercase, 1 lowercase, 1 numeric and atleast 1 symbols ( @, #, %, ^, &)'}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="newUserCnfPassword" label="Confirm Password" className="mb-3" autoComplete="off" >
                            <Form.Control type="password" placeholder="Confirm Password"
                                {...register('cnfpassword', {
                                    required: true,
                                    validate: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                    }
                                })}
                                isInvalid={!!errors.cnfpassword}
                                onKeyUp={() => {
                                    trigger("cnfpassword");
                                }}

                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.cnfpassword?.type === 'required' && 'Password is Required'}
                                {errors.cnfpassword?.type === 'validate' && 'Your password should match'}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <div className='text-center span2'>

                            <Button type='submit' variant="primary" className='mb-2 mt-2 m-3 btn-block' >Sign Up</Button>
                            <Button type='reset' variant="warning" className='mb-2 mt-2 btn-block' >Reset</Button>

                        </div>

                        <div className='text-center mt-3'>
                            <h6>Already having an account?</h6>
                            <Button variant="secondary" className='mb-3' onClick={routeToLogin} >Login</Button>

                        </div>
                    </Form>

                </Col>
            </Row>

        </Container>
    )
}

export default SignUpPage
