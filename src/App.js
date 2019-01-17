import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    chosen
  };

  clciked = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const chosen = this.state.chosen.array.forEach(element => {
      
    });
    (friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ chosen });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.chosen.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
