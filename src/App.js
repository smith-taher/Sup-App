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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sups: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('./my_backend/api/posts')
            .then(res => res.json())
            .then(sups => {
                this.setState({ sups })
            })
    };

    render() {
        let { sups } = this.state;

        let refresh = () => {
            this.fetchData();
        }

        return (
            <div>
                <SupList sups={newSups}
                    // id={id}
                    // body={body}
                />
            </div>
        );
    };
};

// class App extends Component {
//   state = {
//     sups: []
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData() {
//     fetch('./my_backend/api/posts')
//     .then(res => res.json())
//     .then(newSups => res.data.map(post => {
//       return {
//         id: post.id,
//         body: post.body,
//       };
//     }));
  
//     const newState = Object.assign({}, this.state, {
//     sups: newSups
//   });

//   this.setState(newState);
// })

// render() {
//   return (
//     <div className='App'>

//   )
// }
// }

export default App;
