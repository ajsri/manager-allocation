import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './components/Employee';

class Allocator extends React.Component{
	constructor(props){
		super(props);
    this.updateRecord = this.updateRecord.bind(this);
    this.state = {
      allocation: 0,
      employees: [
        {id: 0, type: 'manager', name: 'Manager A', reportsTo: 0},
        {id: 1, type: 'manager', name: 'Manager B', reportsTo: 0},
        {id: 2, type: 'developer', name: 'Developer', reportsTo: 1},
        {id: 3, type: 'qatester', name: 'QA Tester', reportsTo: 1}
      ],
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
          return(
            <Employee key={i}
                      id={person.id}
                      name={person.name} 
                      boss={boss.name} 
                      bossId={boss.id}
                      position={person.type} 
                      bosses={this.state.managers}
                      updateRecord={this.updateRecord.bind(this)} />
          )
          
        })}
      </div>
    )
	}
  updateRecord(record){
    //THIS IS A TERRIBLE TERRIBLE THING TO DO, NEVER DIRECTLY MUTATE YOUR STATE, USE SETSTATE
    //BUT MY BRAIN IS ON FIRE AND THIS MIGHT NOT EVEN GET SEEN SO SCREW IT, HAVE SOME UPDATE
    //IN ALL FAIRNESS THOUGH THIS IS WHERE WE'D HIT AN API, PUT IT BACK THROUGH A REDUCER AND
    //GO FROM THERE. AND I'M NOT READY TO GET EXPRESS INVOLVED IN THIS.
    console.log(record);
  }
}

ReactDOM.render(<Allocator />, document.getElementById('app'));