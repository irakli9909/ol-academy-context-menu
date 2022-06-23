import './App.css';
import ContextMenu from './components/ContextMenu';
import {useState} from 'react'


function App() {
  const [open, setOpen] = useState(false)
  const [posX,setPosX] = useState()
  const [posY,setPosY] = useState()

  const [color, setColor] = useState()

  

  const context = (event) => {
    setOpen(true)
    setPosX(event.pageX)
    setPosY(event.pageY)  
  }
  oncontextmenu=(e) => {
    e.preventDefault()  }

  return (
    <div>
      <ul className='ulcontainer'>
        <li onContextMenu={context} style={{backgroundColor:'red'}}>Javacript</li>
        <li onContextMenu={context} style={{backgroundColor:'green'}}>HTML</li>
        <li onContextMenu={context} style={{backgroundColor:'pink'}}>css</li>
      </ul>
      { open && <ContextMenu posX={posX} posY={posY} setOpen={setOpen}/> }
      
    </div>
    
  );
}

export default App;
