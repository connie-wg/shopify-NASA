import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Post, Loading } from './Components';

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
let timer = true;

setTimeout(() => {
  timer = false;
}, 3000);

console.log(app);


// screen width
const windowWidth = window.innerWidth;

function App() {
  const[imgUrl, setImgUrl] = useState([]);
  // const[todayUrl, setTodayUrl] = useState('hi');
  const[visArray, setVisArray] = useState([]);
  //const[animation, setAnimation] = useState(['none', 'none']);

  //[center to side, side to center]

  useEffect(() => {
    fetchAllData(setImgUrl);
    createArrayPosts(); 
  }, []);
 
  const createArrayPosts = () => {
    const arrayPosts = []; 
    imgUrl.forEach((item) => {
        arrayPosts.push(
          {source: item.url,
            date: item.date,
            caption: item.explanation,
            title: item.title,
            liked: false}
        ); 
    });
    setVisArray(() => arrayPosts);
  }
  
  /*const handleClick = (event) => {
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
  }*/

  const handleLeftClick = () => {
    setVisArray((prev) => {
      let lastIndex = prev.length - 1;
      let last = prev[lastIndex];
      let newArr = [last, ...prev];
      newArr.pop();
      return newArr;
    });
  }

  const handleRightClick = () => {
    setVisArray((prev) => {
      let first = visArray[0];
      let newArr = [...prev, first];
      newArr.splice(0, 1);
      return newArr;
      
    });
  }

  const handleLikeClick = (date) => {
    setVisArray((prev) => {

      let first = prev[1];
      first.liked = first.liked ? false : true;
      prev[1] = first;
      console.log(prev[1]);
      return prev;
    });
  }

  if (timer) {
    return <Loading/>
  }
  return (
    <Container fluid={true} className='background'>
      <div className='centralPostRow'>
      <div className='sidePaddingDiv' onClick={handleLeftClick}>
        <img src={require('./arrow_left.png')} className='arrow'></img>
      </div>
        <div className='centerPostContainer'>
          
          <div id='centerPost'>
          <Post source={visArray[1].source} 
                date={visArray[1].date} 
                caption={visArray[1].caption} 
                position={'center'} 
                title={visArray[1].title}
                component={<Like method={handleLikeClick} liked={visArray[1].liked}/>}
                ></Post>
                
          </div>
          
        </div>
        <div className='sidePostContainer' >
          <div id='leftPost'>
            <Post source={visArray[0].source} 
                  date={visArray[0].date} 
                  caption={visArray[0].caption } 
                  position={'side'}
                  title={visArray[0].title}></Post>
          </div>

          <div id='rightPost'>
          <Post source={visArray[2].source} 
                date={visArray[2].date} 
                caption={visArray[2].caption} 
                position={'side'}
                title={visArray[2].title}
                ></Post>
          </div>
        </div>
        <div className='sidePaddingDiv' onClick={handleRightClick}>
          <img src={require('./arrow.png')} className='arrow'></img>
        </div>
      </div>
    </Container>
  );
}

const Like = (props) => {
  const [backColor, setBackColor] = useState('thistle');
  const [liked, setLiked] = useState(props.liked);

  useEffect(() => {
    setBackColor((prev) => {
      return (prev == 'thistle' ? 'white' : 'thistle');
    });
  }, [liked]);

  function onClick() {
    props.method();

    setLiked((prev) => {
      return liked ? false : true;
    });
  } 

  return(
    <div className="like" style={{backgroundColor: backColor}} onClick={onClick}>
      <div className='star'>
        <img src={require('./star_icon.png')} style={{zIndex: 0}} ></img>
      </div>
      
      <p>STARSTRUCK</p>
    </div>
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