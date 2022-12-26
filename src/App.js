import './App.css';
import React,  { Component } from "react";
import Button from './components/Button';
import Cards from './components/Cards';
import got from './data'

// function App() {
// let [ValueUI,setValue] = useState(got.houses)
// function click(event){
//   let nameId = event.target.innerText
//  setValue(got.houses.filter((element)=>element.name === nameId))
// }
// function search(event){
//   let searchValue = event.target.value
//   let temp = JSON.stringify(got.houses)
//   let tempdata = JSON.parse(temp)
//   if(searchValue === ''){
//     setValue(got.houses)
//   }
//   else{
//     tempdata.map((ele)=>{
//       ele['people'] = ele['people'].filter((persons) => persons['name'].toLowerCase().includes(searchValue.toLowerCase()));
//     })
//     setValue(tempdata)
//   }
// }
//   return (
//     <div>
//       <div className='header'>
//         <h1>Peopel of GOT 👑</h1>
//         <input type={'search'} placeholder={'Search for people of got'} onKeyUp ={search}></input>
//       </div>

//       <div>
//         <Button data={got} listener = {click} className='buttonstack'></Button>
//       </div>

//       <div>
//         <Cards data = {ValueUI} ></Cards>
//       </div>
//     </div>
//   );
// }


class App extends Component {

  state = {
    // searchInput: '',
    // filterdata : ''
    data:got.houses
  }
  onChangeSearchInput = event => {
    let clone = JSON.stringify(got.houses)
    clone = JSON.parse(clone)
    let currentdata = clone.map((family) => {
      family.people = family.people.filter((person) => {
        return person.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      return family
    })
    this.setState({
      data:currentdata
    })
  }

  onFilter = event =>{
    let currentdata=got.houses.filter((family)=>{
      return family.name === event.target.innerText
    })
    this.setState({
      data: currentdata
    })
  }

  render() {

  return (
    <>

      <div className='header'>
        <h1>Peopel of GOT 👑</h1>
        <input type={'search'}  placeholder={'Search for people of got'} onChange = {this.onChangeSearchInput}></input>
      </div>

      <div>
        <Button btndata={got.houses}  className='buttonstack'  listener = {this.onFilter} ></Button>
      </div>

      <div>
        <Cards data = {this.state.data} ></Cards>
      </div>

    </>
  );  
  }
}


export default App;
