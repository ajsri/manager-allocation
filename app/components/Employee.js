import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      position: this.props.position,
      boss: this.props.boss,
      bosses: this.props.bosses,
      cost: this.props.value,
      bossId: this.props.bossId,
      editing: true
    }
  }

  edit(){
    this.setState({editing: true});
  }
  update(){
    this.setState({editing: false});
    let record = this.state;
    this.props.updateRecord(record);
  }
  updateName(event){
    this.setState({name: event.target.value});
  }
  updatePosition(event){
    this.setState({position: event.target.value});
  }
  updateBoss(event){
    let values = event.target.value;
    values = values.split(':');
    this.setState({
      bossId: values[0],
      boss: values[1]
    });
  }
  render(){
    const jobValues = {
      developer: 1000,
      qatester: 500,
      manager: 300
    }
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
              <select className="form-control" 
                      value={this.state.position} 
                      onChange={this.updatePosition.bind(this)}>
                <option value="qatester">QA Tester</option>      
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
              </select>
            }
          </div>
          <div className="col-md-3">
            {!this.state.editing &&
              <div onClick={this.edit.bind(this)}>
                {this.state.boss}
              </div>
            }
            {this.state.editing &&
              <select className="form-control" 
                      value={`${this.state.bossId}:${this.state.boss}`}
                      onChange={this.updateBoss.bind(this)}
                      ref="boss">
                {this.props.bosses.map((boss, i) => {
                  return(
                    <option key={i} value={`${boss.id}:${boss.name}`}>{boss.name}</option>
                  )
                })}
              </select>
            }
          </div>
          <div className="col-md-1">
            ${jobValues[this.state.position]}
          </div>
          <div className="col-md-2">
            {this.state.editing && 
              <button type="button" 
                      className="btn btn-default" 
                      onClick={this.update.bind(this)}>
                Done
              </button>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Employee