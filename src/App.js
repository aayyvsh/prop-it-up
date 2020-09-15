import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './Components/PersonCard';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      person: []
    }
  }

  render(){
    return (
      <div>
        <PersonCard
          fname="Jane"
          lname="Doe"
          age={45}
          hairColor="black"
        />
        <PersonCard
          fname="John"
          lname="Smith"
          age={88}
          hairColor="blue"
        />
        <PersonCard
          fname="Millard"
          lname="Fillmore"
          age={50}
          hairColor="brown"
        />
        <PersonCard
          fname="Maria"
          lname="Smith"
          age={50}
          hairColor="black"
        />

      </div>
    );
  }
}

export default App;
