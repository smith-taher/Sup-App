import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllUsersScreen from './AllUsersScreen';
import ProfileScreen from './ProfileScreen';
import Homepage from './Homepage';
import {HashRouter as Router, Route, NavLink, Link} from 'react-router-dom';
// import App from './App';
import SupList from './SupList'
// import sort from './lodash/sortBy'

export let getPosts = (userId) =>
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(res => res.json())

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sups: [],
            sortBy: "date"
        };
    }

    fetchData() {
        getPosts(this.props.match.params.username)
            .then(sups => this.setState({ sups }));
    }

    componentdidMount() {
        this.fetchData();    
    }

    componentDidUpdate(prevProps, prevState) {
        let prevUserId = prevProps.match.params.username;
        let currUserId = this.props.match.params.unsername;
        if (prevUserId !== currUserId) {
            this.fetchData();
        }
    }

    render() {
        let { sups } = this.state;

        // let sortedSups = (sups, sortBy);

        return (
            <div>
                <select 
                    value={ this.state.sortBy }
                    onChange={event => this.setState({ sortBy: event.target.value })}>
                    <option value="user">Sort By User</option>
                    <option value="date">Sort By Date</option>
                </select>
                <SupList sups={ sups } />
            </div>
        )
    }
}
let TopLevel = () => 
 <Router>
    <div>
        <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <Link to="/users">All Users</Link>
            <Link to="/users/Joel">User Profile</Link>
        </nav>
        <Route path="/" exact component={Homepage} />
        <Route path="/users" exact component={AllUsersScreen} />
        <Route path="/users/:username" exact component={ProfileScreen} />
    </div>
</Router>
   
ReactDOM.render(<TopLevel />, document.getElementById('root'));
