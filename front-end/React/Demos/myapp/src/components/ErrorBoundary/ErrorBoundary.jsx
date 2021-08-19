import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false, errorInfo: null }
  }

  // static getDerivedStateFromError(error) {
  //   return {error: true, errorInfo: ''}
  // }

  componentDidCatch(error, errorInfo) {
    // 捕获所有子组件错误
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // 当然，你可以在这儿把错误信息上传给服务器
  }
  render() {
    if(this.state.error) {
      // error path
      return (
        <div style={{border: '3px dashed red'}}>
          <h2>某个地方出错了！</h2>
          <details style={{whiteSpace: 'pre-wrap'}}>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // 没有错误的话 就正常渲染子组件
    return this.props.children
  }
}

export default ErrorBoundary