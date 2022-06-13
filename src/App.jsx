import React, { useEffect, useState } from 'react'
import logo from './assets/images/logoPNG.png'

const App = () => {

  const [datos, setDatos] = useState([])

  useEffect(() => {
    API()
  }, [])
  
  const API = async () => {
    const resp = await fetch(process.env.REACT_API)
    const data = await resp.json()

    const color = data.game_indices.map( item => {
      return{
        colores: item.version
      }
    })
    setDatos(color)
  }


  // console.log(datos.game_indices)

  return (
    <>
      <div className="bienvenida">
        {/* <img className="girar" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="imagen react" /> */}
        <img className="girar" src={logo} alt='' />
        <h1>Bienvenido a React 18</h1>
        <span>Empecemos !!!</span>
        {/* <span>{process.env.REACT_API}</span> */}

        {
          datos.map( (item, index) => (
              <div key={index} className='colorApi'>
                <p >{item.colores.name}</p>
              </div>
          ))
        }
      </div>
    </>
  )
}

export default App