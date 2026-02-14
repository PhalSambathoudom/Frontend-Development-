import { useState } from 'react'
import Header from './new.folder/Header.jsx'
import Footer from './new.folder/Footer.jsx'  
import Main from './new.folder/Main.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App
