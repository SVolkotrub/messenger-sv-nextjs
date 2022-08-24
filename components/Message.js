
import React from 'react';
import moment from 'moment';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../firebaseConfig';

function Message({user, msg}) {
  const [userLoggedIn] = useAuthState(auth);
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;
  const TypeOfTimestamp = user === userLoggedIn.email ? SenderTime : RecieverTime;
  
  return (
    <Container>
      <TypeOfMessage>{msg.message}</TypeOfMessage>
      <TypeOfTimestamp>
          {msg.timestamp ? moment(msg.timestamp).format('M/D/YYYY LT') : '...'}
          </TypeOfTimestamp>
    </Container>
  )
}

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
width: fit-content;
padding: 10px;
border-radius: 18px;
margin: 20px 10px 0px 10px;
min-width: 60px;
padding-bottom: 10px;
position: relative;
text-align: right;
`;

const Sender = styled(MessageElement)`
margin-left:auto;
background-color: lightgrey;
`;

const Reciever = styled(MessageElement)`
background-color: rgb(60,65, 83);
opacity: 0.8;
color: white;
text-align: left;
`;
 
const Timestamp = styled.p`
width: fit-content;
color: gray;
padding: 10px;
font-size: 10px;
margin: 0px 0px 10px 0px;
position: relative;
text-align: right;
z-index: 50;
`;

const SenderTime = styled(Timestamp)`
margin-left: auto;

`;

const RecieverTime = styled(Timestamp)`
text-align: left;
`;