
import './App.css';
import MyButton from './components/MyButton';
import React, { useState } from 'react'
function App() {
  const name="Aman"
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  let admin=true
  const [count,setCount]=useState(0);
    const click=()=>{
        setCount(count+1);
        
    }
  
  return (
    <div className="App">
      <h1 className='fonting'>Welcome {name} </h1>
      <h1>{admin?(<h1>Admin</h1>):(<h1>{name}</h1>)}</h1>
      <div>
        <ul>
        {products.map((item)=>{
          return(
            <li>{item.title}</li>
          )
        })}
        </ul>
        
      </div>
      <MyButton count={count} click={click}/> 
      <MyButton count={count} click={click}/>
    </div>
  );
}

export default App;
