import Head from 'next/head';
import React from 'react'
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import ChatScreen from '../../components/ChatScreen';
import { collection, doc,orderBy, query } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';
import { useRouter } from "next/router";
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { useAuthState } from "react-firebase-hooks/auth";
import getEmail from '../../utils/getEmail';

function Chat() {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const { id } = router.query;
    const collectionRef = collection(db, `chats/${id}/messages`);
    const queryMessages = query(collectionRef, orderBy("timestamp", "asc"));
    const [messages] = useCollectionData(queryMessages);
    const [chat] = useDocumentData(doc(db, "chats", id));
    
  return (
      <Container>
          <Head>
              <title>Chat with { getEmail(chat?.users, user)}</title>
          </Head>
          <Sidebar />
          <ChatContainer>
              <ChatScreen chat={chat} messages={messages} />
          </ChatContainer>
    </Container>
  )
}

export default Chat;



const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
flex:1;
overflow: scroll;
height: 100vh;

::-webkit-scrollbar {
    display: none;
}
-ms-overflow-style: none ;
scrollbar-width: none;
`;