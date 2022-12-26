import React,{ Component } from 'react'
import './Button.css'
// function Button(props) {
//   return (
//     <div className='btndiv'>
//       {
//         props.data.houses.map((names)=>{
//           return <button className='buttonstack' key={names} onClick = {props.listener}>{names.name}</button>
//         })
//       }
//     </div>
//   )
// }


class Button extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className='btndiv'> 
      {
        this.props.btndata.map((el)=>{
          return <button className='buttonstack' onClick={this.props.listener}>{el.name}</button>
        })
      }
            
     </div>
    )
  }
}

export default Button