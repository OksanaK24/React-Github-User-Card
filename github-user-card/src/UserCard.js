import React, { Component } from 'react';

class UserCard extends Component{

    render(){
        return(
            <div class="UserCard">
                <img src={this.props.user.avatar_url} alt="user" />
                <h3>{this.props.user.name}</h3>
                <p>{this.props.user.login}</p>
                <p>Location: {this.props.user.location}</p>
                <p>My followers: {this.props.user.followers}</p>
                <p>I'm following: {this.props.user.following}</p>
            </div>
        )
    }
}

export default UserCard;