import { Component } from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component';



class App extends Component{

  constructor() {
    super();
    this.state = {

      monsters: [
        {name:'Frankenstein',id:1},
        {name:'Zombie',id:2},
        {name:'Dracula',id:3},
        {name:'Godzilla',id:4}
      
      ],
      string: 'Hello savvy1',
      button: 'Magic Button',
      changeStr: 'Hello Andrei'
    };

  
  }

componentDidMount(){
 // fetch('https://jsonplaceholder.typicode.com/users').then(Response => console.log(Response))
 // fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => console.log(users) )

 fetch('https://jsonplaceholder.typicode.com/users')
 .then(Response => Response.json()).then(users => this.setState({monsters:users}) )


}


  render(){

    return(
      <div className="App">
      <Cardlist monsters={this.state.monsters}>
     
      <h3>Inside card list children property </h3> 

      </Cardlist>
   

    </div>

    )

  }
}

export default App;

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
