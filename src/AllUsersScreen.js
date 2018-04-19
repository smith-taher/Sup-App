import React from 'react';
import SupList from './SupList';
import getPosts from './index';

const sups = [
    {id:1, author: 'Joel', body:'Love to camp and hike!', time: new Date()},
    {id:2, author: 'Ellen', body:'Getting ready to move... whoooo whoooo', time: new Date()},
    {id:3, author: 'Joel', body:'Glamping rocks!', time: new Date()},
    {id:4, author: 'Joel', body:'Tell me something funny!', time: new Date()}
]

let AllUsersScreen = () => {
    return( 
    <SupList sups={sups} />
    )
}

export default AllUsersScreen;
