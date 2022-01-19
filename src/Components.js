import './App.css';
import { findByLabelText } from '@testing-library/react';
import { useEffect, useState } from 'react';



export const Post = (props) => {
    const [visibility, setVisibility] = useState('visible');
    //const [animation, setAnimation] = useState('none');

    const handleClick = () => {
      //setAnimation(() => props.animation);
    }

    return(
      <div className='flip-post' style={styles[props.position].dimensions}>
        <div className='flip-post-inner'>
          <div className='flip-post-front'>
            <img  className="imageInPost" style={styles[props.position].imageInPost} src={props.source}></img>
            <div className='date'>
              <p>{props.date}</p>
              <p>{props.title}</p>
              
            </div>
            
          </div>

          <div className='flip-post-back'>
            <div className='captionContainer'>
              <p>{props.caption}</p>
            </div>
            {props.component}
          </div>
        </div>
      </div>
    );
}


export const Loading = () => {
  return(
    <div className='loading-background'>
      
      <img className='loading-image' src={'https://media.giphy.com/media/PmYFV3urYHA7y35cRQ/giphy.gif'}></img>
      <div className='loading-text-cont'><p>LOADING...</p> </div>
      
    </div>
  );
}


export const Star = () => {
  return(
      <div className='star'></div>
  );
}

export const AllStars = () => {
  <div>
    <div className='star_background'>
        <Star/>
        <Star/>
        </div>

        <div className='star_background2'>
        <Star/>
        <Star/>
        <Star/>
        </div>

        <div className='star_background3'>
        <Star/>
        <Star/>
        </div>

        <div className='star_background4'>
        <Star/>
        <Star/>
        </div>

        <div className='star_background5'>
        <Star/>
        <Star/>
        </div>

        <div className='star_background6'>
        <Star/>
        <Star/>
        <Star/>
        </div>

        <div className='star_background7' >
        <Star/>
        <Star/>
        </div>

        <div className='star_background8' >
        <Star/>
        <Star/>
        </div>
      </div>
}

const styles = {
  side: {
    imageInPost: {
      height: '30vh',
    },
    dimensions: {
      display: 'flex',
      flex: 1,
      height: '40vh',
      width: '70vh',
      opacity: '60%'
    },
  }, 

  center: {
    imageInPost: {
      height: '45vh',
    },
    dimensions: {
      display: 'flex',
      flex: 1,
      width: '80vh'
    }
  },
  star: {
    display: 'flex',
    flex: 1,
    height: '3vh',
    marginRight: '1vh',
    marginBottom: '1vh',
  }
}


/*
<div className='bigPostContainer'>
        <div className='postContainer'>
          <div className='imagePostInner'>
            <div className='imagePostFront'>
              <img className='imageInPost' style={styles.imageInPost[props.position]}src={props.source}/>
            </div>
        </div>

        <div className='postContainer'>
            <div className='imagePostBack'>
              <div className='captionContainer'>
                <p style={{fontSize: '10px'}}>{props.caption}</p>
                <p>{props.date}</p>
              </div>
            </div>

          </div>
            
        </div>
      </div>
       */