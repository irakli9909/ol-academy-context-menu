import React from 'react'
import './Contextmenu.css'
import { useRef, useEffect } from 'react'

function ContextMenu({posX, posY, setOpen}) {
    const contextRef = useRef(null)
    const style = {
        position: 'absolute',
        top: `${posY}px`,
        left: `${posX}px`
    }
   const hideContext = (event) => {
    if(!contextRef.current.contains(event.target)){
        setOpen(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click', hideContext)
  })





  return (

    <div style={style} className='context' ref={contextRef}>
        <button onClick={()=>console.log('remove')}>remove</button>
        <button onClick={()=>console.log('edit')}>edit</button>
      
    </div>
  )
}

export default ContextMenu

