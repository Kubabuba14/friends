import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import './App.css'

class App extends Component {
    constructor () {
        super()
        this.state = {
        friends: [],
        searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())  
        .then(users => this.setState({ friends: users}));
}

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const filteredFriends = this.state.friends.filter(friend =>{
        return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.friends.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className="tc">
            <h1 className="f2">All our Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList friends={filteredFriends}/>
            </Scroll>
            </div>
    );
}
}
}

export default App;