export function toCelsius(fahrenheit) {
  return (fahrenheit -32) * 5 / 9
}
export function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

export function tryConvert(temp, convert) {
  const input = parseFloat(temp)
  if(Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}