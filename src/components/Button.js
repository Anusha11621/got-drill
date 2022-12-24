import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div className='btndiv'>
      {
        props.data.houses.map((names)=>{
          return <button className='buttonstack' key={names} onClick = {props.listener}>{names.name}</button>
        })
      }
    </div>
  )
}
export default Button