import Card from './components/card.jsx'
import {cardContent} from './data.js'
import { useState } from 'react'
function App() {
  return (
    <>
     <ul className='flex flex-row flex-wrap w-full h-screen gap-9  '>
        {cardContent.map((val,key)=><Card cards={val}/>)}
     </ul>
    </>
  );
}

export default App;
