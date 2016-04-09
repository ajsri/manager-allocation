import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Bob',
      editing: false
    }
  }
  addEmployee(name, type, boss){
    console.log("name", "type", "boss");
  }
  editName(){
    this.setState({editing: !this.state.editing});
  }
  updateName(event){
    console.log(event.target.value);
    this.setState({name: event.target.value})
  }
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            Total: ${this.props.total}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {!this.state.editing &&
              <div onClick={this.editName.bind(this)}>
                {this.state.name}
              </div>
            }
            {this.state.editing &&
              <div>
                <input type="text" className="form-control" value={this.state.name} onChange={this.updateName.bind(this)}/>
                <button type="button" className="btn btn-default" onClick={this.editName.bind(this)}>Done</button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Employee