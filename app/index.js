import React from 'react';
import ReactDOM from 'react-dom';

class Allocator extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>Management Allocator</div>
	}
}

ReactDOM.render(<Allocator />, document.getElementById('app'));