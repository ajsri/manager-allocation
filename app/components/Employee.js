import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      position: this.props.position,
      boss: this.props.boss,
      cost: this.props.value,
      editing: false
    }
  }
  edit(){
    this.setState({editing: !this.state.editing});
  }
  updateName(event){
    this.setState({name: event.target.value});
  }
  updatePosition(event){
    this.setState({position: event.target.value, editing: false});
  }
  render(){
    return(
      <div>
        <div className="row" style={{marginBottom: 34}}>
          <div className="col-md-3">
            {!this.state.editing &&
              <div onClick={this.edit.bind(this)}>
                {this.state.name}
              </div>
            }
            {this.state.editing &&
              <input type="text" 
                     className="form-control" 
                     value={this.state.name} 
                     onChange={this.updateName.bind(this)}/>
            }
          </div>
          <div className="col-md-3">
            {!this.state.editing && 
              <div onClick={this.edit.bind(this)}>
                {this.state.position}
              </div>
            }
            {this.state.editing && 
              <select className="form-control" value={this.state.position} onChange={this.updatePosition.bind(this)}>
                <option value="qatester">QA Tester</option>      
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
              </select>
            }
          </div>
          <div className="col-md-3">
            {this.state.boss}
          </div>
          <div className="col-md-1">
            {this.state.cost}
          </div>
          <div className="col-md-2">
            {this.state.editing && 
              <button type="button" className="btn btn-default" onClick={this.edit.bind(this)}>Done</button>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Employee