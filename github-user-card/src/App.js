import React, { Component } from 'react';
import axios from 'axios';
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";
import "./index.css";


class App extends Component {

  constructor() {
    super()

    this.state = {
      username: "oksanak24",
      followers: []
    }
  }

  componentDidMount() {
    this.getUserCard();
    this.getFollowers()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.username !== this.state.username) {
      this.getUserCard();
      this.getFollowers()
    } 
  }

  getUserCard = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(result => {
        console.log (result.data)
        this.setState({
          username: result.data
        })
      })
      .catch(error => {
        console.log("Error:", error)
      })
  }

  getFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(result => {
        console.log (result.data)
        this.setState({
          followers: result.data
        })
      })
      .catch(error => {
        console.log("Error:", error)
      })
  }

  render(){
    return (
      <div className="App">
        
        <UserCard user={this.state.username}/>
        <div className="AppFollowers"> 
          {this.state.followers.map((follower) => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
