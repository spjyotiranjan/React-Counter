import React from "react"


class Counter extends React.Component{

  state={
    count : 0,
  }
  Increment=()=>{
    document.getElementById("count").style.color = "green"
    this.setState({count : this.state.count + 1})
  }
  Decrement=()=>{
    document.getElementById("count").style.color = "red"
    if (this.state.count>0) {
      this.setState({count : this.state.count - 1})
    }
    
  }
  Reset=()=>{
    document.getElementById("count").style.color = "black"
    this.setState({count : 0})

  }

  render(){
    return (
      <>
        <h1>Counter App</h1>
        <h1 id="count">{this.state.count}</h1>
        <div className="button">
          <button onClick={this.Increment}>+</button>
          <button onClick={this.Decrement}>-</button>
          <button onClick={this.Reset}>Reset</button>
        </div>
      </>
    )
  }

}

export default Counter;