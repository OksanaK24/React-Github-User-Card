import React, { Component } from 'react';

class FollowerCard extends Component{

    render(){
        return(
            <div className="FollowerCard">
                <img src={this.props.follower.avatar_url} alt="user_follower" />
                <h2>{this.props.follower.login}</h2>
            </div>
        )
    }
}

export default FollowerCard;