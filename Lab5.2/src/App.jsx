import { useState } from 'react'
const Layout = ({ children }) => {
  return (
  <div className="app-container">
    <nav>Navbar</nav>
         {children}
    <footer>Footer</footer>
  </div>
)}
function App() {

  return (
    <>
      <Layout>
         <main>Your page content here</main>
      </Layout>
    </>
  )
}

export default App
