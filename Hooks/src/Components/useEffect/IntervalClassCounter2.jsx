import React, { Component } from 'react'

export class IntervalClassCounter2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  } 

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <h3>IntervalClassCounter2 - {this.state.count}</h3>
    )
  }
}

export default IntervalClassCounter2