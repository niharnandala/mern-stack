import React, { Component } from 'react'

export class formdemo extends Component {
  constructor(props) {
    super(props)
    this.state={
        un:"",
        br:"cse"
    }
  }
  handlebr=(event)=>{
    this.setState({
        br:event.target.value
    })
  }
  handlesubmit=(event)=>{
    alert(this.state.un+""+this.state.br)
    event.preventDefault()
  }
  handleun=(event)=>{
    this.setState({
        un:event.target.value,
    })
    console.log(this.state.un)
  }
  render(){
     return (
        <form>
            <input type = "text" value = {this.state.un} onChange={this.handleun}/>
            <input type = "text" value = {this.state.br} onChange={this.handlebr}/>
        </form>
    )
  }
}

export default formdemo