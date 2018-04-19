import React from 'react';
import SupList from './SupList';

// const sups = [
//     {id:1, author: 'Joel', body:'Love to camp and hike!', time: new Date()},
//     {id:2, author: 'Ellen', body:'Getting ready to move... whoooo whoooo', time: new Date()},
//     {id:3, author: 'Joel', body:'Glamping rocks!', time: new Date()},
//     {id:4, author: 'Joel', body:'Tell me something funny!', time: new Date()}
// ]


// let ProfileScreen = ({match}) => { // destructures match from React props 
//     let userName = match.params.id;
//     let newSups = filterSups(sups, userName);
    
//     return( 
//         <SupList sups={newSups} />
//         )
//     }
        
// let filterSups = (sups, userName) => {
//     return sups.filter(sup => userName === sup.author);
// }

// export default ProfileScreen

// Code Starts Here //
let filterSups = (sups, userName) => {
    return sups.filter(sup => userName === sup.name);
}

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sups: [],
            match: props.match.params
        };
    }

    componentDidMount () {
        this.fetchData();
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(sups => {
                this.setState({ sups })
            })
    }

    render() {
        let {sups, match} = this.state;
        let newSups = filterSups(sups, match.id)
        return(
            <SupList sups={ newSups } />
        )
    }
}

export default ProfileScreen
