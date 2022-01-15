import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Post } from './Components';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { findByLabelText } from '@testing-library/react';

//bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

//functions
import { fetchAllData, fetchData } from './nasa';
import { NavItem } from 'react-bootstrap';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsroF6o05l3jt89KWYzlEOv5fLsVcNjh0",
  authDomain: "nasa-apod-web-app.firebaseapp.com",
  projectId: "nasa-apod-web-app",
  storageBucket: "nasa-apod-web-app.appspot.com",
  messagingSenderId: "459467056132",
  appId: "1:459467056132:web:6fbbb732e26ec49dd40151",
  measurementId: "G-CHK38N1CW2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const arrayPosts = [];

function App() {
  const[imgUrl, setImgUrl] = useState([]);
  const[todayUrl, setTodayUrl] = useState('hi');
  const[visibleIndex, setVisibleIndex] = useState([0, 2]);
  //const[visArray, setVisArray] = useState([]);

  //const changeImageUrl = () => setImgUrl(fetchData());

  useEffect(() => {
    fetchData(setTodayUrl);
    fetchAllData(setImgUrl);
  }, []);

  const createArrayPosts = () => {
    imgUrl.forEach((item, index) => {
      if(index >= visibleIndex[0] && index <= visibleIndex[1]) {
        arrayPosts.push(
          <Post source={item.url} date={item.date} caption={item.explanation}></Post>
        );
      } 
    })
    console.log(imgUrl[0]);
    return arrayPosts;
  }
  
  const handleClick = () => {
    setVisibleIndex((prev) => [prev[0] + 1, prev[1] + 1, prev[2] + 1]);
  }

  return (
    <Container fluid={true} className='background' onClick={handleClick}>
      {/*<Post source={todayUrl} date={'today'} caption={'haha'}></Post>
      <Post date={imgUrl.date} source={imgUrl.url} caption={imgUrl.explanation} />  */} 
      <div className='centralPostRow'>
      {createArrayPosts()}
      </div>
    </Container>
  );
}



export default App;

const availHeight = window.innerHeight;
const availWidth = window.innerWidth;

const styles = {
  background: {
    backgroundColor: '#0F0E2C',
    height: availHeight,
    width: availWidth,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
  }
}