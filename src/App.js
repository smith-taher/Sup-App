import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Sups from './Sup';
import SupList from './SupList';

// let allPosts = [
//     { author: 'Nybblr', body: 'Taking a picture!' },
//     { author: 'Robby', body: 'Hello Nybblr' }
// ];

// let PostRow = (post) =>

const nybblrSups = [Sups[0]];
const robbySups = [Sups[1]];

let App = ({ match }) =>
  <div>
    <Link className="red" to="/users/nybblr" activeClassName="redred">Nybblr's Sups</Link>
    <Link to="/users/robby">Robby's Sups</Link>
    { match.params.id === 'nybblr' ?
      <SupList sups={nybblrSups} />
    :
      <SupList sups={robbySups} />
      }
  </div>

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;