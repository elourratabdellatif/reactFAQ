import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import FAQ from './faq'

ReactDOM.render(
  // <App />,
 <div>
  <FAQ >
    <div className="title1" >Question 1 </div>  
    <div className="title11">this is a content text 1</div>
    <div className="title12">this is a content text 2</div>
    <div className="title13">this is a content text 3</div>
  </FAQ>
  <FAQ >
    <div className="title1" >Questions 2 </div>  
    <div className="title11">this is a seconde content text 1</div>
    <div className="title12">this is a seconde content text 2</div>
    <div className="title13">this is a seconde content text 3</div>
  </FAQ>
  <FAQ >
    <div className="title12">Questions 3 </div>
    <FAQ >
      <div className="title1" >sub Questions 1 </div>  
      <div className="title11">this is a seconde content text 1</div>
      <div className="title12">this is a seconde content text 2</div>
      <div className="title13">this is a seconde content text 3</div>
    </FAQ>
    <FAQ >
      <div className="title1" >sub Questions 2 </div>  
      <div className="title11">this is a seconde content text 1</div>
      <div className="title12">this is a seconde content text 2</div>
      <div className="title13">this is a seconde content text 3</div>
    </FAQ>
    <div>content</div>
  </FAQ>
 </div>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
