import React from 'react';
import './App.css';
import Printer from './Printer.js'
class App extends React.Component {
  constructor() {
    super();
   
  }
 

  //<button onClick={() => { this.getData()}}>Get</button>
  render() {
    return (
      <div className="App">
        <h1>FIFA DATABASE</h1>
        <Printer></Printer>
      </div>
       );
  }
}

export default App;


// class App extends React.Component {
//   constructor(){
//     super();
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       soccerRoster: [],
//       tempName: "",
//       tempTeam: "",
//       tempAge: "",
//       delName: "",
//       delTeam: "",
//       delAge: "",
//       success:true
//     }
//   }
  
//   getData(){
//     fetch('/soccerRoster')
//     .then(res => res.json())
//     .then(roster => { console.log(roster.info) });
//     console.log(this.state.soccerRoster);
//   }
//   putData(){
//     // let data= {name: this.state.tempName, team:this.state.tempTeam, age:this.state.tempAge}
//     // let options = {
//     //   method: 'post',
//     //   headers:{
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(data)
//     // }
    
//     // fetch('/soccerRoster', options);
    
//   }

//   delData(){
//     // let data= {name: this.state.delName, team:this.state.delTeam, age:this.state.delAge}
//     // let options = {
//     //   method: 'delete',
//     //   headers:{
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(data)
//     // }
    
//     // fetch('/soccerRoster', options);
    
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name ]: event.target.value });
//   }
//   render(){
//     return (
//       <div className="App">
//         <button onClick={() => {this.getData()}}>Get</button>
//         <button onClick={() => {this.putData()}}>PUT test</button>
//         <h1>Add player to database</h1>
//         <form onSubmit={() => {this.putData()}}>
//           Enter Name:
//         <input type="text" name="tempName" value={this.state.tempName} onChange={this.handleChange}></input>
//           Enter Team:
//         <input type="text" name="tempTeam" value={this.state.tempTeam} onChange={this.handleChange}></input>
//           Enter Age:
//         <input type="text" name="tempAge" value={this.state.tempAge} onChange={this.handleChange}></input>
//         <input type="submit" value="Submit"></input>

//       </form>
//         <h1>Delete A record</h1>
//         <form onSubmit={() => {this.delData()}}>
        
//           Enter Name:
//         <input type="text" name="delName" value={this.state.delName} onChange={this.handleChange}></input>
//           Enter Team:
//         <input type="text" name="delTeam" value={this.state.delTeam} onChange={this.handleChange}></input>
//           Enter Age:
//         <input type="text" name="delAge" value={this.state.delAge} onChange={this.handleChange}></input>
//         <input type="submit" value="Submit"></input>

//       </form>
//         <ol>
//           {this.state.soccerRoster.map(players => 
//           <li key= {players.name}>Name:  {players.name}, Age: {players.age}, Team: {players.team}  </li>)}
//         </ol>
//       </div>
//     );
//   }
// }

// export default App;
