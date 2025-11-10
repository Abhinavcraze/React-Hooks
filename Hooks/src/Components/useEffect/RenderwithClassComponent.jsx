{/* conditiobnally run effects */}

import React from 'react'

class RenderwithClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count : 0,
      name : ''
    }
  } 

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {   
    console.log('Previous State', prevState) 
    if (prevState.count !== this.state.count) {
      console.log('Updating document Title')
      document.title = `Clicked ${this.state.count} times`;
    }
    if (prevProps.userId !== this.props.userId) {
    this.fetchUserData(this.props.userId);
  }
  }

  render() {
    return (
      <div>
        <input type = "text" placeholder="Enter a text" value = {this.state.name} className="white-input"onChange = {(e) => this.setState({name: e.target.value})} />
        <button onClick = {() => this.setState({count: this.state.count + 1})}>
          Click {this.state.count} times
        </button>
      </div>
    )
  }
}

export default RenderwithClassComponent