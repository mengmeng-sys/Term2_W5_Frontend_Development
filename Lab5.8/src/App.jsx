import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Hello", isEdited: false },
    { id: 2, text: "World", isEdited: false },
    { id: 3, text: "React", isEdited: false },
  ])
  const [id, setID] = useState(0)

  const markAsEdited = (id) => {
    const postTemp = posts.map(post => {
      if (post.id === id) {
        alert(`Post id:${post.id} isEdited changed from ${post.isEdited} to ${!post.isEdited}`)
        return { ...post, isEdited: !post.isEdited }
      }
      return post
    })
    setPosts(postTemp)
  }

  return (
    <>
      <input 
        type="text" 
        placeholder='Enter the post ID to edit' 
        onChange={e => setID(e.target.value)} 
      />
      <button onClick={() => markAsEdited(Number(id))}>Mark</button>     
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            ID: {post.id} | Text: {post.text} | isEdited: {post.isEdited.toString()}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App