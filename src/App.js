import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { findByLabelText } from '@testing-library/react';

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


function App() {

  return (
    <div style={styles.background}>
      
        <div className='postContainer'>
          <div className='imageContainer'>
          <img className='imageInPost' src='http://clapway.com/wp-content/uploads/2016/03/8.-NASA.jpg'/>
          </div>
          
          <div style={{display: 'flex', flex: 1}}>
            <p>hi</p>
          </div>
        </div>
   
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