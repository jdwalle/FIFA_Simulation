import React from 'react';
import './App.css';

class Printer extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      soccerRoster: [],
      tempName: "",
      tempTeam: "",
      tempAge: "",
      delName: "",
      updateName: "",
      updateTeam: "",
      success: true
    }
  }
  componentDidMount() {
    fetch('/soccerRoster')
      .then(res => res.json())
      .then((roster) => {this.setState({ soccerRoster: roster.info }) });

  }
  getData() {
    fetch('/soccerRoster')
      .then(res => res.json())
      .then((roster) => { this.setState({ soccerRoster: roster.info}) });

  }
  putData(){
    let data =  {age: this.state.tempAge, name: this.state.tempName, team: this.state.tempTeam};
    let options ={
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/soccerRoster', options);
  }
  delData(){
    let data =  {age: this.state.delAge, name: this.state.delName, team: this.state.delTeam};
    let options ={
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/soccerRoster', options);
    
  }
  updateData(){
    let data =  {age: this.state.updateAge, name: this.state.updateName, team: this.state.updateTeam};
    let options ={
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/soccerRoster', options);
    
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //<button onClick={() => { this.getData()}}>Get</button>
  render() {
    return (
      <div className="App">
          
        <button onClick={() => { this.getData() }}>Get Data</button>
        <h1>Add A player to the Roster</h1>
        <form onSubmit={()=>{this.putData()}}>

          Enter Age:
          <input type="text" name="tempAge" value={this.state.tempAge} onChange={this.handleChange}></input>
          Enter Name:
          <input type="text" name="tempName" value={this.state.tempName} onChange={this.handleChange}></input>
          Enter Team:
          <input type="text" name="tempTeam" value={this.state.tempTeam} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>

        </form>
        <h1>Delete a Player from the Roster</h1>
        <form onSubmit={()=>{this.delData()}}>
          Enter Name:
          <input type="text" name="delName" value={this.state.delName} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
        <h1>Update Player Team</h1>
        <form onSubmit={()=>{this.updateData()}}>
          Enter Name:
          <input type="text" name="updateName" value={this.state.updateName} onChange={this.handleChange}></input>
          Enter Team:
          <input type="text" name="updateTeam" value={this.state.updateTeam} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>

        <ol>
          {this.state.soccerRoster.map(player =>
            <li key={player.age}>Name: {player.name}, Team: {player.team}, Age: {player.age} </li>)}
        </ol>
      </div>
    );
  }
}
export default Printer;