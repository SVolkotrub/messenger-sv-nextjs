import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import avatarPic from '../public/avatar.png'
import { useAuthState } from "react-firebase-hooks/auth";
import getEmail from '../utils/getEmail';
import { auth, db } from '../firebaseConfig';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';

function Chat({ id, users }) {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const queryRecipients = query(collection(db, 'users'), where('email', '==', getEmail(users, user)));
    const [recipientSnapshot] = useCollection(queryRecipients);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getEmail(users, user);

        const enterChat = () => {
        router.push(`/chat/${id}`);
    }

  return (
      <Container onClick={()=>enterChat()}>
          {(recipient?.photoURL) ? (<UserAvatar src={recipient?.photoURL} alt="" />) : (<Image src={avatarPic} width={50 } height={50} alt="" style={defaultImageStyle} />  )}
          
          <Text>{ recipientEmail}</Text>
      </Container>
  )
}

export default Chat;

const Container = styled.div`
display: flex;
align-items: center;
cursor: pointer;
padding: 15px;  
word-break: break-word;
overflow-y: auto;
scrollbar-width: none;

:hover{
    background-color: #e9eaeb;
}
`;

const UserAvatar = styled.img`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;
margin: 5px;

`;

const Text = styled.p`
margin-left: 15px;
`;

const defaultImageStyle = {
cursor: 'pointer',
borderRadius: '50%',
margin: '5px 15px',
}