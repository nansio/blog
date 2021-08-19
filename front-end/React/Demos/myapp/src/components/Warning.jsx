import React from 'react'
function WarningBanner(props) {
  if(!props.show) {
    return null
  }
  return (
    <div className="warning" 
      style={{
          height:'100px', width:'800px', backgroundColor:'whitesmoke',
          lineHeight:'100px', textAlign:'center',fontSize: '52px',
          color: 'red',position: 'absolute', top: '10vh', left: 'calc(50vw - 400px)'
      }}>
      Warning!
    </div>
  )
}

class Warning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showWarning: props.showing ? props.showing : false}
  }
  handleToggle = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }
  render() {
    return (
      <div className="warning_container">
        <WarningBanner show={this.state.showWarning} />
        <button onClick={this.handleToggle}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}
export default Warning