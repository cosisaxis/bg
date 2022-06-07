import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styledComponents.div`
 width: 40%;
 padding: 20px;
 background-color: white;
`
const Name = styledComponents.h1`
 font-size: 24px;
 font-weight: 300;
`
const Form = styledComponents.form`
display: flex;
flex-wrap: wrap;
`
const Input = styledComponents.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`
const Agree = styledComponents.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styledComponents.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: pink;
color: white;
cursor: pointer;
`

const SignUp = () => {
  return (
    <Container>
        <Wrapper>
            <Name>Sign Up</Name>
            <Form>
                <Input placeholder='first-name' />
                <Input placeholder='last-name' />
                <Input placeholder='email' />
                <Input placeholder='username' />
                <Input placeholder='password'/>
                <Input placeholder='re-type password'/>
                <Agree>
                By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
                </Agree>
                <Button>Start</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default SignUp