import React, { Component } from 'react';
//import PropTypes from 'prop-types'

// State class
// class App extends React.Component{
//   render(){
//     return React.createElement('h1',null,'Hi there');
//   }
// }

//  Stateless
//  const App = () => <h1>Hello stateless</h1>

//Props are static States are dynamic

//Working with props
// class App extends React.Component{
//   render(){
//     let txt = this.props.txt
//     return(
//       <h1>{this.props.txt}</h1>
//     );
//   }
// }

// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number
// }

// App.defaultProps = {
//   txt: "this is the default text"
// }

//workng with states
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       txt:'Progress!',
//       cat: 9
//     }
//   }
//   update (e){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     return(
//       <div>
//         {/* <input type="text" onChange={this.update.bind(this)}/> */}
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)}/>
//         <Widget update={this.update.bind(this)}/>
//       </div>
//     );
//   }
// }

// //component stateless of the text input that was removed above
// const Widget = (props) => <input type="text" onChange={props.update}/>

//nested data using props.children
// class App extends React.Component{
//   render(){
//     return <Button>React<Heart/></Button>
//   }
// }

// const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component{
//   render(){
//     return <span>&hearts;</span>
//   }
// }

// Validating prop values
// class App extends React.Component{
//   render(){
//     return <Title text = ""/>
//   }
// }

// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
//   text(props, propName, component){
//     if(!props[propName]){
//       return new Error('missing ${propName}')
//     }
//     // if(props[propName].length<6){
//     //   return new Error('${propName} was too short')
//     // }
//   }
// }

// React Events
class App extends React.Component{
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({currentEvent: e.type})
  }

  render(){
    return(
      <div>
        <textarea 
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          cols="30"
          rows="10" />
          <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {a: ''}
//   }

//   update(){
//     this.setState({
//       //a: e.target.value,  //there is no difference between these two
//       //b: e.target.value   //not to the output state anyways
//       //so to fix it either
//       //a: ReactDOM.findDomNode(this.a).value
//       //or
//       a: this.a.refs.input.value,
//       b: this.refs.b.value
//     })
//   }

//   render(){
//     return(
//     <div>
//       <Input ref ={component => this.a = component} update={this.update.bind(this)}/>{this.state.a}
//       <hr/>
//       <input ref="b" type="text" onChange={this.update.bind(this)}/>{this.state.b}
//     </div>
//     )
//   }
// }

// class Input extends React.Component{
//   render(){
//     return <div><input ref="input" type="text" onChange={this.props.update}/></div>
//   }
// }
export default App;