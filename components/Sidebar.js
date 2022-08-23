import React from 'react';
import { logo} from '../public/user.png'
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {  signOut } from "firebase/auth";
import {require}  from 'email-validator';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebaseConfig';
import { collection, addDoc, query, where } from "firebase/firestore";
import Chat from './Chat';


export default function Sidebar() {
    const [user] = useAuthState(auth);
    const userChatRef = collection(db, "chats");
    const queryChats= query(userChatRef, where('users', 'array-contains', user.email));
    const [chatsSnapshot] = useCollection(queryChats);
    const chats = chatsSnapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const chatExists = (email) => chats?.find(chat => chat.users.includes(user.email) && chat.users.includes(email));

    const newChat = async () => {  
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) return null;
        let validator = require("email-validator");
  
        if(validator.validate(input) && (input !== user.email) && !chatExists(input)) {
      await addDoc(collection(db, "chats"), { users: [user.email, input] })
    }
    }   

    return (
        <Container>
            <HeaderContainer>
                <Header>
                    <UserAvatar src={user.photoURL || logo }  onClick={() => signOut(auth)}/>
                    <UserName>{user.displayName }</UserName>
                    <ArrowForwardIosIcon onClick={()=> signOut(auth)}/>
                </Header>
                    <SidebarButton onClick={()=>newChat()}>Search or start a new chat</SidebarButton>
                
                </HeaderContainer>
            <Text>Chats</Text>
            {chatsSnapshot?.docs.map(chat => (<Chat key={chat.id} id={chat.id} users={chat.data().users} />))}
        </Container>
        )
    }
// }
const Container = styled.div`
flex:0.45;
border-right: 1px solid whitesmoke;
height: 100vh;
min-width: 200px;
max-width: 350px;
overflow-y: scroll;

::-webkit-scrollbar {
    display: none;
}
-ms-overflow-style: none;
scrollbar-width: none;

`;

const HeaderContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0px 20px;
flex-direction: column;
background-color: whitesmoke;
z-index: 1;
`;

const Header = styled.div`
display: flex;
margin-top: 0;
position: sticky;
top: 0;
background-color: whitesmoke;
z-index: 1;
justify-content: space-between;
align-items: center;
padding-top:5px;
height: 80px;

`;
const UserAvatar = styled.img`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;

:hover{
    opacity: 0.8;
}
`;

const UserName = styled.h3`
text-align: left;
word-break: break-word;
`;

const Text = styled.div`
margin-left:30px;
margin-top: 15px;
color: blue;
font-size: 24px;
`;

const SidebarButton = styled.button`
width: 100%;
margin-top: 10px;
border: 1px solid whitesmoke;
border-radius: 10px;
font-size:16px;
padding: 8px;
padding-left: 10px;
background-color: white;
margin-bottom: 15px;

&&& {    
    color: black;
    font-weight: 500;
    text-align: left;
    
}

`;



   
   