import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import StarRatin from './Star';
function Test(){
  const [star,setStar]=useState(0);
  return(
    <div>
     <StarRatin size={80} color='black' onStar={setStar}/>
     <p>This movie is rated {star} stars</p>
    </div>
   
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRatin max={10}/>
    <StarRatin size={80} color='red' mess={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/>
    <StarRatin size={80} color='blue'/>
   <Test/>
    
    {/* <StarRatin/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

