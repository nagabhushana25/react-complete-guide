import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockfit/Cockfit'
//import PersonIn from '../Components/Persons/Person/PersonIn';


class App extends Component {
  state = {
    persons : [
      {id:1 ,name: 'ABC', age :30},
      {id:2 ,name: 'KJS', age :34},
      {id:3 ,name: 'WEW', age :35},
    ],
    showPersons:false,
  }

  switchNameHandler = (newName) => {
    //console.log('was click');
    this.setState({persons : [
      {name: newName, age :30},
      {name: 'KJSccc', age :34},
      {name: 'WEW', age :35},
    ]});
  }

  nameChangehandler = (event,id) => {
    console.log(id,event.target.value);
    const personIndex = this.state.persons.findIndex(p=>{

      return p.id===id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons : persons});
    console.log(this.state.persons);
  };


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});

  };


  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons.slice()];
    persons.splice(personIndex);
    this.setState({persons:persons});
    console.log(this.state.persons);
  };




  render() {



    let person = null;

    if (this.state.showPersons) {
      person = (
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangehandler}
        />
     );

    // style.backgroundColor='red';
    // style[':hover']={
    //   backgroundColor:'blue',
    //   color:'black'
    // }

    }





    /*
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'askdasd')}
            changed={this.nameChangehandler}>Racing is hooby
          </Person>
          <Person name={this.state.persons[2].name}
            age={this.state.persons[2].age}
           />
       </div>
    */

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
         />
        {person}
      </div>
    );
  }
}

export default App;
