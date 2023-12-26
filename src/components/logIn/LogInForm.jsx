import React, { useContext, useRef, useState } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {

    const [isLogIn, setIsLogIn] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const authCtx = useContext(AuthContext);
    const history = useNavigate();

    const email = useRef()
    const password = useRef();

    const switchHandler = () => {
        setIsLogIn((prev) => !prev)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const inputEmail = email.current.value
        const inputPassword = password.current.value

        setIsLoading(true)

        let url;
        if (isLoading) {
            url = 'fdf'
        } else {
            url = "gd"
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: inputPassword,
                password: inputPassword,
                returnToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                return res.json()
            } else {
                alert('something went wrong')
            }
        }).then((data) => {
            authCtx.logIn(data.idToken, data.email);
            history("/store", { replace: true })
            console.log(data);
        }).catch((err) => {
            alert(err.message)
        })

    }



    return (
        <>
            <h4>{isLogIn ? "LogIn" : "Sign Up"}</h4>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={password} />
                </Form.Group>

                <Button variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default LogInForm