import React,{useState} from "react";
import './App.css';
function App(){
  const [count,setcount]=useState(2);
  const increment=()=>{
    setcount(count+1);
  }
  const decreament=()=>{
    setcount(count-1);
  }
  return (
    <div className="App">
      <h1>Counter:&nbsp;{count}</h1>
      <div className="button-group">
        <button onClick={decreament}>Decrement</button>
        <button onClick={increment}>Increament</button>
      </div>
    </div>
  );
}
export default App;