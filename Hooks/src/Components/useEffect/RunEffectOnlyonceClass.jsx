import React, {Component} from 'react'

class RunEffectOnlyonceClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x : 0,
      y : 0
    }
  }

  logMousePosition = e => {
    this.setState({x: e.clientX, y: e.clientY})
  }

  componentDidMount() {
    console.log('Component mounted - Event Listener added')
    window.addEventListener('mousemove', this.logMousePosition)
  }

  componentWillUnmount() {
    console.log('Component unmounted - Event Listener removed')
    window.removeEventListener('mousemove', this.logMousePosition)
  }

  render(){
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}
export default RunEffectOnlyonceClass