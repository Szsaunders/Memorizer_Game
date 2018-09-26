import React from "react";
import "./Title.css";

const Title = props =>     {    <header className="App-header">
<h1 className="App-title">Memorizer Game</h1>
<div>Score: {this.state.count} | High Score: {this.state.highCount}</div>
<div>Click an Image to begin!</div>
</header>;
}

export default Title;
