import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import './App.css';

class App extends Component {
  state = {
    friends,
    count: 0,
    highCount: 0,
    nameArray: []
  }

  handleButtonPress = event => {

    const name = event.target.alt
    console.log(this.state.nameArray.indexOf(name))
    if (this.state.nameArray.indexOf(name) > -1){
      this.setState({ nameArray: [] })
      alert("Sorry! You lose!")
      this.handleReset()
    }

    else {
      // this.setState({ nameArray: this.state.nameArray.push(name) })
      this.setState(prevState => ({
        nameArray: [...prevState.nameArray, name]
      }))
      this.handleIncrement()
    }

    this.setState(prevState => ({
      friends: this.shuffle(prevState.friends)
    }))
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count  >= this.state.highCount) {
      this.setState({ highCount: this.state.count + 1 });
    }
  };

  handleReset = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 0 });
  };

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kaiju Game</h1>
          <h2>Score: {this.state.count} | High Score: {this.state.highCount}</h2>
          <div>Click on Kaiju to raise your score. Click on the same Kaiju twice and you lose.</div>
          <div>Click a Kaiju to begin!</div>
        </header>
        <div className="App-filler-div"></div>
        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleButtonPress={this.handleButtonPress}
          />
        ))}
        </Wrapper>
        
      </div>
    );
  }
}

export default App;
