import React from 'react'

class LazyCompo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {result: ''}
  }
  compute = () => {
    import('../utils/calc').then(calc => {
      this.setState({result: calc.default(1, 1)})
    })
  }

  render() {
    return (
      <div>
        <h1>这个组件是使用React.lazy懒加载出来的哦！</h1>
        <h3>当前组件调用加法的函数是通过动态import语法引入的</h3>
        <p>
          1+1={this.state.result}
        </p>
        <button onClick={this.compute}>计算</button>
      </div>
    )
  }
}

export default LazyCompo