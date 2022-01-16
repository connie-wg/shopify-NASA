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

console.log(app);


// screen width
const windowWidth = window.innerWidth;

function App() {
  const[imgUrl, setImgUrl] = useState([]);
  const[todayUrl, setTodayUrl] = useState('hi');
  const[visArray, setVisArray] = useState([]);

  //const changeImageUrl = () => setImgUrl(fetchData());
  

  useEffect(() => {
    fetchData(setTodayUrl);
    fetchAllData(setImgUrl);
    createArrayPosts();
  }, []);

  const createArrayPosts = () => {
    imgUrl.forEach((item, index) => {
        arrayPosts.push(
          <Post source={item.url} date={item.date} caption={item.explanation}></Post>
        );
    });
    setVisArray(() => arrayPosts);
  }
  
  const handleClick = (event) => {
    const x = event.clientX;
    //const y = event.clientY;
    if (x < (windowWidth / 2)) {
      setVisArray((prev) => {
        let first = prev.shift();
        return [...prev, first];
      });
    } else {
      setVisArray((prev) => {
        let last = prev.pop();
        return [last, ...prev];
      });
    }
    
  }

  return (
    <Container fluid={true} className='background' onClick={handleClick}>
      <div className='centralPostRow'>

        <div className='sidePostContainer'>
          <div id='leftPost'>
            {visArray[0]}
          </div>

          <div id='rightPost'>
            {visArray[2]}
          </div>
        </div>

        <div className='centerPostContainer'>
          <div className='sidePaddingDiv'></div>
          <div id='centerPost'>
            {visArray[1]}
          </div>
          <div className='sidePaddingDiv'></div>
        </div>

      {/*</div>
      <div style={{width: 500, height: '50vh', backgroundColor: 'white', left: 200, top: 40, zIndex: 3, position: 'absolute'}}>
      <h1>LOL</h1>*/}
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