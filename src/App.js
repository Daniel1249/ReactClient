import './App.css';
import logo from './logo.svg';
import Axios from 'axios'
import React,{useState,useEffect} from 'react';

function App() {
  const [comments,setComments]=useState([])
  useEffect(() => {
    fetchComments();
  }, [])
  useEffect(() => {
    console.log(comments)
  }, [comments])
  const fetchComments=async()=>{
    const response=await Axios('http://localhost:4000/url');
    setComments(response.data)    
  }
  return (
    <div className="App">
      {
        comments && comments.map(comment=>{
          return(
            <div key={comment.id} style={{alignItems:'center',margin:'20px 60px'}}>
            <h4>Frontend App - React</h4>
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {comment.id}
        </a>
      </header>  
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
