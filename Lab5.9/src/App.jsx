import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div>
      {list.map(item => (
        <div key={item.id}>
          <span>Item {item.id}</span>
          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App
