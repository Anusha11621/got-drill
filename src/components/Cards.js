import React, { Component } from 'react'
import './Cards.css'
// function Cards(props) {
//     // console.log(props.data);
//   return (
//     <div className='maincard'>
//         {
//         props.data.map((person)=>{
//             return(
//                 <>
//                     {
//                        person.people.map((el)=>{
//                         return(
//                             <div className='card'>
//                                 <img className='image' src={el.image} alt={el.name}/>
//                                 <h3>{el.name}</h3>
//                                 <p>{el.description}</p>
//                                 <button className='cardbtn'>KNOW MORE!</button>
//                             </div>
//                         )
//                        })
//                     }
//                 </>
//             )
//         })
//      }
//     </div>
//   )
// }



class Cards extends Component {
  render() {
    return (
        <div className='maincard'>
        {
        this.props.data.map((person)=>{
            return(
                <>
                    {
                       person.people.map((el)=>{
                        return(
                            <div className='card'>
                                <img className='image' src={el.image} alt={el.name}/>
                                <h3>{el.name}</h3>
                                <p>{el.description}</p>
                                <button className='cardbtn'>KNOW MORE!</button>
                            </div>
                        )
                       })
                    }
                </>
            )
        })
     }
    </div>
    )
  }
}

export default Cards