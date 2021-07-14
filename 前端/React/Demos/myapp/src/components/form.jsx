import React from 'react'

class ControlledForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      gender: '',
      description: ''
    }
  }
  handleChange = (event) => {
    const target = event.target
    const which_prop = target.name
    this.setState({
      [which_prop]: target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert(`姓名: ${this.state.name} \n年龄: ${this.state.age}\n性别: ${this.state.gender}\n个人简介: ${this.state.description}`)
  }

  render() {
    return (
      <div className="form-c">
        <form style={{border: '2px solid green'}}>
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="姓名" /> <br/>
          <input type="number" name="age" id="age" value={this.state.age} onChange={this.handleChange} placeholder="年龄(数字)" /> <br/>
          <select name="gender" id="gender" 
           value={this.state.gender} 
           onChange={this.handleChange}
          >
            <option value="" disabled>请选择性别</option>
            <option value="male">男</option>
            <option value="female">女</option>
          </select><br/>
          <textarea name="description" id="desc" cols="30" rows="5" 
            value={this.state.description} onChange={this.handleChange} placeholder="个人描述" /> <br/>
          <button type="submit" onClick={this.handleSubmit} style={{fontSize: "21px"}}>提交</button>
        </form>
      </div>
    )
  }
}
export default ControlledForm