import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log('Interval cleared');
  }

  render() {
    return (
      <div>IntervalClassCounter - {this.state.count}</div>
    )
  }
}

export default IntervalClassCounter