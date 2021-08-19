import React from 'react'

class TempratureInput extends React.Component {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    const temp = this.props.temp
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>请输入{scale === 'f' ? '华氏' : '摄氏'}度数:</legend>
        <input type="number" value={temp} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TempratureInput