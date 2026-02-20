import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
const PostImage = ({url})=>{
  return (url&&<div className="img-wrapper"><img src={url} /></div>)||<div style={{backgroundColor:"grey" ,width:"100px" , height:"100px"}}></div>;
}
function App() {

  return (
    <>
    <PostImage url={reactLogo}/>
    </>
  )
}
export default App
