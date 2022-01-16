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
    const arrayPosts = []; 
    imgUrl.forEach((item) => {
        arrayPosts.push(
          {
            source: item.url,
            date: item.date,
            caption: item.explanation
          }
        ); 
    });
    setVisArray(() => arrayPosts);
  }
  
  const handleClick = (event) => {
    const x = event.clientX;
    //const y = event.clientY;
    if (x > (windowWidth / 2)) {
      setVisArray((prev) => {
        let first = visArray[0];
        let newArr = [...prev, first];
        newArr.splice(0, 1);
        console.log(newArr);
        return newArr;
        
      });
    } else {
      setVisArray((prev) => {
        let lastIndex = prev.length - 1;
        let last = prev[lastIndex];
        let newArr = [last, ...prev];
        newArr.pop();
        console.log(newArr);
        return newArr;
      });
    }
  
  }

  return (
    <Container fluid={true} className='background' onClick={handleClick}>
      <div className='centralPostRow'>
        
      <div className='centerPostContainer'>
          <div className='sidePaddingDiv'></div>
          <div id='centerPost'>
          <Post source={visArray[1].source} date={visArray[1].date} caption={visArray[1].caption} position={'center'}></Post>
          </div>
          <div className='sidePaddingDiv'></div>
        </div>

        <div className='sidePostContainer'>
          <div id='leftPost'>
            <Post source={visArray[0].source} date={visArray[0].date} caption={visArray[0].caption } position={'side'}></Post>
          </div>

          <div id='rightPost'>
          <Post source={visArray[2].source} date={visArray[2].date} caption={visArray[2].caption} position={'side'}></Post>
          </div>
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