import React from 'react'
import styledComponents from 'styled-components'



const Container = styledComponents.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styledComponents.div`
 width: 25%%;
 padding: 20px;
 background-color: white;
`
const Name = styledComponents.h1`
 font-size: 24px;
 font-weight: 300;
`
const Form = styledComponents.form`
display: flex;
flex-direction: column;
`
const Input = styledComponents.input`
flex: 1;
min-width: 40%;
margin: 10px  0px;
padding: 10px;

`
const Link = styledComponents.a`
margin: 20px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const Button = styledComponents.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: pink;
color: white;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Name>SIGN IN</Name>
      <Form>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>LOGIN</Button>
        <Link>FORGOT YOUR PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login