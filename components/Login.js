import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { auth } from '../firebaseConfig';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
 
  return (
    <Container>
          <Head>
              <title>Login</title>
          </Head>
          <LoginContainer>
              <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
              <Button onClick={() => signInWithGoogle("", {prompt: "select_account"})} variant="outlined">Sign in with Google</Button>
          </LoginContainer>
    </Container>
  )
}

export default Login;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;
`;

const LoginContainer = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 50px;
box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
height:200px;
width: 200px;
margin-bottom: 50px;
`;

const Button = styled.button`
font-size: 16px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding:15px;
border: 1px solid whitesmoke;
background-color: whitesmoke;
border-radius: 15px;
text-transform: uppercase;
:hover {
  transform: scale(102%);
}
`;