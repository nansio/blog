import React from 'react'

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0}
  }
  handleClick = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }
  render() {
    if(this.state.counter === 5) {
      throw new Error('哦不！出错了！')
    }
    return (
      <div className="buggy-counter" style={{border: '3px dotted green'}}>
        <h3>这是一个演示ErrorBoundary的Buggy Counter</h3>
        <p>点击下方数字递增，当数字增加到5时会触发错误！</p>
        <h1 onClick={this.handleClick}>{ this.state.counter }</h1>
      </div>
    )
  }
}

export default BuggyCounter
