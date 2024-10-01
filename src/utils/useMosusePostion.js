import { useState, useEffect } from "react";


export default  function useMousePostion() {
    const [mousePosition , setMousePostion] = useState({x: 0 , y: 0 })
  const updateMousePosition = (e) =>{
    setMousePostion({x:e.clientX, y: e.clientY });

  }
  useEffect(()=>{
    window.addEventListener("mousemove",updateMousePosition)
    return()=>{
        window.removeEventListener("mousemove",updateMousePosition)
    }
  },[])

    return mousePosition
}
