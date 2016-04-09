import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './components/Employee';

class Allocator extends React.Component{
	constructor(props){
		super(props);
    this.state = {
      allocation: 0,
      employees: [
        {id: 0, type: 'manager', name: 'Manager A', reportsTo: 0},
        {id: 1, type: 'manager', name: 'Manager B', reportsTo: 0},
        {id: 2, type: 'developer', name: 'Developer', reportsTo: 1},
        {id: 3, type: 'qatester', name: 'QA Tester', reportsTo: 1}
      ],
      jobsValues: {
        manager: 300,
        developer: 1000,
        qatester: 500
      },
      managers: []
    }
	}
  componentDidMount(){
    let managers = [];
    this.state.employees.map((person, i) => {
      if(person.type == 'manager'){
        managers.push(person);
      }
    });
    this.setState({managers: managers});
  }
  updateRecord(record){
    console.log(arguments);
  }
	render(){
		return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Department</h1>
          </div>
        </div>
        <div className="row theaders">
          <div className="col-md-3"><strong>Name</strong></div>
          <div className="col-md-3"><strong>Position</strong></div>
          <div className="col-md-3"><strong>Reports To</strong></div>
          <div className="col-md-3"><strong>Cost</strong></div>
        </div>
        {this.state.employees && this.state.employees.map((person, i) => {
          let bossId = person.reportsTo;
          let boss = this.state.employees[bossId];
          let cost = this.state.jobsValues[person.type];
          return(
            <Employee key={i}
                      id={person.id}
                      name={person.name} 
                      boss={boss.name} 
                      bossId={boss.id}
                      position={person.type} 
                      value={cost}
                      bosses={this.state.managers}
                      updateRecord={this.updateRecord} />
          )
          
        })}
      </div>
    )
	}
}

ReactDOM.render(<Allocator />, document.getElementById('app'));