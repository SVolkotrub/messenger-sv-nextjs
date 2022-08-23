import React, { useState, useRef } from 'react';

import styled from 'styled-components';
import { auth,db } from '../firebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { Avatar } from '@material-ui/core';
import Message from './Message';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {  doc, addDoc, collection,setDoc, serverTimestamp, where, query } from "firebase/firestore"; 
import getEmail from '../utils/getEmail';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';


function ChatScreen(props) {
    const [user] = useAuthState(auth);
    const endOfMessageRef = useRef(null);
    const [input, setInput] = useState("");
    const router = useRouter();
    const { id } = router.query;
    const recipientEmail = getEmail(props.chat?.users, user);
    const [usersAll] = useCollectionData(collection(db, "users"));
    const recipientUser = usersAll?.filter(user => user.email === recipientEmail)[0];
  
    const showMessages = () => {
        if (props.messages) {
            return props.messages?.map(msg => <Message key={Math.random()} user={msg.user}
                    msg={{ ...msg, timestamp: msg.timestamp?.toDate().getTime(), }} />
                
            )
      }
  }
     
    const sendMessage = async (e) => { 
        e.preventDefault();
       const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, { lastSeen: serverTimestamp(), }, { merge: true });
        await addDoc(collection(db, `chats/${id}/messages`), {userName: user.displayName, message: input, user: user.email, timestamp: serverTimestamp(), photoURL: user.photoURL, });
        setInput("");
        scrollToBottom();
    }
   
    const scrollToBottom = () => {
        endOfMessageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
    
  return (
      <Container>
          <Header>
              <UserAvatar src={recipientUser?.photoURL } /> 
             
            <UserName> {recipientUser?.userName } </UserName>
               
             
          </Header>
          <MessageContainer>
              {showMessages()}
              <EndOfAllMessage ref={endOfMessageRef}></EndOfAllMessage>
          </MessageContainer>
          <InputContainer>
              <InsertEmoticonIcon />
              <Input value={input} onChange={(e) => setInput(e.target.value)} />
              <button hidden disabled={!input} type="submit" onClick={sendMessage} >Send message</button>
          </InputContainer>
    </Container>
  )
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div`
position: sticky;
background-color: #F5F5F5;
z-index: 100;
top: 0;
display: flex;
padding: 11px;
height: 80px;
align-items: center;
border-bottom: 1px solid whitesmoke;

`;
const UserAvatar = styled.img`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;
`;

const UserName = styled.h3`
margin-left: 10px;
`;

// const EndOfAllMessage = styled.div`
// margin-bottom: 50px;
// `;

const MessageContainer = styled.div`
padding: 30px;
background-color: #FAFAFA;
min-height: 90vh;
`;

const EndOfAllMessage = styled.div``;

const InputContainer = styled.form`
display: flex;
align-items: center;
padding: 10px;
position: sticky;
bottom: 0;
border: 0;
background-color: white;
z-index: 100;
`;

const Input = styled.input`
flex:1;
outline: 0;
border: none;
border-radius: 10px;
background-color: white;
padding: 20px;
margin-left: 15px;
margin-right: 15px;
`;
