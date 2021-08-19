import React from 'react'
import TempratureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'
import { toCelsius, toFahrenheit, tryConvert} from '../utils/temp_convert'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {temp: '', scale: 'c'}
  }

  handleCelsiusChange = temp => {
    this.setState({scale: 'c', temp})
  }
  handleFahrenheitChange = temp => {
    this.setState({scale: 'f', temp})
  }
  render() {
    const scale = this.state.scale
    const temp = this.state.temp
    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp
    const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp

    return (
      <div style={{border: '2px dashed blue', marginTop: '21px'}}>
        <TempratureInput scale='c' temp={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TempratureInput scale='f' temp={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}

export default Calculator
