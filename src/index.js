import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Element from './Element';
//import App from './App';
import reportWebVitals from './reportWebVitals';


function ncard( val ){
 
  return(
     
   <Card 
     key   =   { val.id}
     img   =   {val.img}
     para  =   {val.para}
     sname =   {val.sname}
     link  =   {val.link}
   />
   
  );
}



ReactDOM.render(
 
  
  <>  

  <h1 className = "  heading ">Top 5 Web Series of the Netflix and Amazon.</h1>
     
      { Element.map(ncard)}

       </>,



  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
