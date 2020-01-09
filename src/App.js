import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';
import PersonIn from './Person/PersonIn';

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

    const style = {
      backgroundColor:'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
        {this.state.persons.map((per,index) => {
          return <Person
            click = {() => this.deletePersonHandler(index)}
            name={per.name}
            age={per.age}
            key={per.id}
            changed={(event) => this.nameChangehandler(event,per.id)} />
        })}
        </div>
     )
    style.backgroundColor='red';
    style[':hover']={
      backgroundColor:'blue',
      color:'black'
    }

    }

    const class1='cls';



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
        <h1 className={class1}>Im working on reactjs</h1>
        <button
         style ={style}
         onClick={this.togglePersonHandler}>Toggle Persons</button>
        {person}

      </div>
    );
  }
}

export default Radium(App);
