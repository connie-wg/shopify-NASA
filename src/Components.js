import './App.css';
import { findByLabelText } from '@testing-library/react';
import { useEffect, useState } from 'react';



export const Post = (props) => {
    const [visibility, setVisibility] = useState('visible');

    return(
        <div className='postContainer' style={{visibility: visibility}}>
          <div className='imageContainer'>
          <img className='imageInPost' src={props.source}/>
          </div>
          
          <div className='captionContainer'>
            <p style={{fontSize: '10px'}}>{props.caption}</p>
            <p>{props.date}</p>
          </div>
         
        </div>
    );
}