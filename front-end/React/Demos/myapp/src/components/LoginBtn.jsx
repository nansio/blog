import React from 'react'
class LoginBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 1}
  }
  handleClick = () => {
    console.log('this is: ' + this.state.count)
  }
  render() {
    return (
      <div className="btnc">
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default LoginBtn