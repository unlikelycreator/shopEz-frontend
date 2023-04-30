import React from "react";
import { useEffect, useState } from "react";
import Item from "./component/Item"
import { addItem, deleteItem, getAllItems } from "./utils/HandleApi";
import swooshSound from './images/wipe.mp3';
import popSound from './images/add.mp3';

function App() {
  const [item, setItem] = useState([])
  const [text, setText] = useState("")
  const [shake, setShake] = useState(false);

  useEffect(() => {
    getAllItems(setItem)
  }, [])
      
  const animate = () => {
      const audio = new Audio(popSound);
      audio.play();
      setShake(true);
      setTimeout(() => setShake(false), 2000);
  }
  
  function handleClick() {
    setTimeout(() => {
      console.log('Delayed function called');
    }, 500);
    const audio = new Audio(swooshSound);
    audio.play();
    }
  
  return (
    <div className="App">
      <div className="main">
      <div className="animation">
      </div>
      
        <div className="top">
            <input
            className="maininput"
            type="text" 
            placeholder="Add Items..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <div className={`${shake ? 'shake' : ''} add`}
              onClick={() => {addItem(text, setText, setItem); animate();}}>Add
            </div>
        </div>
        <div className="list">
            {item.map((item) => <Item 
            key={item._id} 
            item={item.item}
            deleteItem={()=> {deleteItem(item._id,setItem); handleClick();}} />)}
          </div>
      </div>
    </div>
  );
}

export default App;
